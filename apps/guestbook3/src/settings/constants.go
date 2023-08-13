package settings

// RedirectHTML Name of HTML document (endpoint) where
// the post controller (/api/post) will redirect/point to
// in a concat of Headers[Referer] + RedirectHTML.
//
// See:
//
// - src/controllers/post/post.go#54
//
// - src/controllers/post/post.go#59
//
// - src/views/post/validation_errors.html.tmpl#9
const RedirectHTML = "guestbook.html"
