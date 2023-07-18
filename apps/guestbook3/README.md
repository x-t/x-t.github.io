# guestbook3

the fourth iteration of the forever-broken guestbook on x-t.github.io

it's not that special, it's fully api-compatible with the second iteration. that's mainly because the typescript one keeps breaking for no reason and i am fine with the api.

just this time it's written in go. i've tried a go guestbook before, this time i just know how to code. i guess.

## usage (api)

it's kind of a hybrid between being REST and then not. oh well. keeps it simple for the frontend.

### `GET /api/get_posts`

returns a json array of posts. see [guestbook.html](https://x-t.github.io/guestbook.html) for an example, it uses alpine.js to render the posts.

### `POST /api/post`

posts a post. checks the post, etc.

it's just an html form endpoint, so use `<form>`.

## usage (cli)

god help you