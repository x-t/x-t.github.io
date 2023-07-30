// if an error occured, the server sends it anyway.
document.body.addEventListener('htmx:beforeSwap', function(evt) {
  evt.detail.shouldSwap = true;
});
