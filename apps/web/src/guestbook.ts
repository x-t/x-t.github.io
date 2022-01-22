import * as Sentry from "@sentry/browser";
import { NhostClient } from "@nhost/nhost-js";

/* Real JAMStack s*** hours!
   The fact that it's vanilla JS is raw pain.
   The things I do for the Claris Home Page
   novelty... */

interface PostsSchema {
  id: string;
  name?: string;
  comment: string;
  created_at: string;
}

const nhostUrl = "https://uxtafleoaetvphdawoed.nhost.run";
const postBackendUrl = "https://old-flower-8394.fly.dev/post";

const nhost = new NhostClient({
  backendUrl: nhostUrl,
});

const hide_element = (id: string): void => {
  const element = document.getElementById(id)!;
  element.style.display = "none";
};

const unhide_element = (id: string): void => {
  const element = document.getElementById(id)!;
  element.style.display = "block";
};

const render = (data: PostsSchema[]) => {
  const append = (el: HTMLElement) => {
    const container = document.querySelector(
      "#guestbookPosts > table > tbody"
    )!;
    container.appendChild(el);
  };

  data.forEach((element) => {
    const { name, comment, created_at } = element;
    const date = new Date(created_at);
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const nameString = name || "Anonymous";
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const commentCell = document.createElement("td");
    const dateCell = document.createElement("td");
    nameCell.innerText = nameString;
    commentCell.innerText = comment;
    dateCell.innerText = `${dateString} ${timeString}`;
    row.appendChild(dateCell);
    row.appendChild(nameCell);
    row.appendChild(commentCell);
    append(row);
  });
};

const memoize_posts = (posts: PostsSchema[]) => {
  localStorage.setItem("posts", JSON.stringify(posts));
  localStorage.setItem("last_updated", new Date().toISOString());
};

const get_posts = async (force_update = false): Promise<PostsSchema[]> => {
  let posts = JSON.parse(localStorage.getItem("posts")!) as PostsSchema[];
  let last_updated = localStorage.getItem("last_updated")!;

  if (posts && last_updated && !force_update) {
    const last_updated_date = new Date(last_updated);
    const now = new Date();
    const diff = now.getTime() - last_updated_date.getTime();
    if (diff >= 1000 * 60 * 60) {
      // Posts are stale, so update them
      localStorage.removeItem("posts");
      localStorage.removeItem("last_updated");
      posts = [];
      last_updated = "";
    }
    if (diff < 1000 * 60 * 5) return posts;
  }

  const { error, data } = await nhost.graphql.request(
    `
  query Posts(
    $timesincemodified: timestamptz = ""
  ) {
    posts(order_by: {created_at: desc},
      where: {created_at: {
        _gte: $timesincemodified
      }}) {
      name
      created_at
      comment
    }
  }
  `,
    {
      timesincemodified: last_updated || "1970-01-01",
    }
  );

  if (error) throw error;

  const concat = [
    ...((data as { posts: PostsSchema[] }).posts || []),
    ...(posts || []),
  ];
  memoize_posts(concat);
  return concat;
};

const main = async () => {
  try {
    render(await get_posts());
    unhide_element("guestbookPosts");
    hide_element("guestbookLoading");
  } catch (error: any) {
    Sentry.captureException(error);
    unhide_element("guestbookLoading");
    document.getElementById("guestbookLoading")!.innerText = error;
  }
};

main();

const reset_captcha = () => {
  const captcha_div = document.querySelector<HTMLDivElement>(".h-captcha")!;
  captcha_div.innerHTML = "";
  // @ts-ignore
  hcaptcha.render(document.getElementsByClassName("h-captcha")[0]);
};

const show_form_error = (error: string) => {
  const error_div = document.getElementById("errorPosting")!;
  const error_text = document.getElementById("guestbookError")!;
  const form_div = document.getElementById("postDialog")!;
  error_text.innerText = error;
  error_div.style.display = "block";
  form_div.style.display = "none";
};

const clear_posts = () => {
  const container = document.querySelector("#guestbookPosts > table > tbody")!;
  container.innerHTML = `
<TABLE BORDER=1>
  <TR>
     <TH>Date</TH>
     <TH>Name</TH>
     <TH>Comment</TH>
  </TR>
</TABLE>`;
};

// @ts-ignore
window.postFunction = async (responseKey: string) => {
  const name_el = document.getElementById("guestbookName")! as HTMLInputElement;
  const comment_el = document.getElementById(
    "guestbookComment"
  )! as HTMLInputElement;
  const name = name_el.value;
  const comment = comment_el.value;

  hide_element("postDialog");
  unhide_element("postSubmitting");

  if (!comment) {
    show_form_error("Comment cannot be empty!");
    return;
  }

  if (name.length > 32 || comment.length > 128) {
    show_form_error(
      `${name.length > 32 && !(comment.length > 128) ? "Name" : ""}${
        !(name.length > 32) && comment.length > 128 ? "Comment" : ""
      }${
        name.length > 32 && comment.length > 128 ? "Name and comment" : ""
      } too long!`
    );
    return;
  }

  try {
    const res = await fetch(postBackendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        comment,
        captcha_response: responseKey,
      }),
    });

    hide_element("postSubmitting");

    if (res.status === 201) {
      reset_captcha();
      name_el.value = "";
      comment_el.value = "";
      unhide_element("postDialog");
      hide_element("guestbookPosts");
      unhide_element("guestbookLoading");
      clear_posts();
      // There's a delay between inserting and selecting
      // 1.5 seconds is a number I pulled out of my ass,
      // but it works
      setTimeout(async () => {
        const posts = await get_posts(true);
        render(posts);
        unhide_element("guestbookPosts");
        hide_element("guestbookLoading");
      }, 1500);
      return;
    }

    const err = await res.text();
    show_form_error(err);
  } catch (error: any) {
    show_form_error(error);
    return;
  }
};

// @ts-ignore
window.retryForm = () => {
  reset_captcha();
  const error_div = document.getElementById("errorPosting")!;
  const form_div = document.getElementById("postDialog")!;
  error_div.style.display = "none";
  form_div.style.display = "block";
};
