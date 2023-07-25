import Alpine from "alpinejs";
// import 'htmx.org/dist/ext/preload.js';
// import "htmx.org"
import "./font.css";
import "./style.css";
import * as htmx from 'htmx.org';

declare global {
  interface Window {
    Alpine: typeof Alpine;
    botdPromise: Promise<any>;
    endpoints: {
        fetch: string;
        form: string;
        emailguard: string;
        guestbookfetch: string;
    };
    htmx: any;
  }
}

window.Alpine = Alpine;

window.htmx = htmx;

/* Swap any element (we return HTML on errors from the server) */

document.body.addEventListener('htmx:beforeSwap', function(evt) {
  // @ts-ignore
  evt.detail.shouldSwap = true;
});

Alpine.start();
