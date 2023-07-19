import Alpine from "alpinejs";
import "./font.css";
import "./style.css";

declare global {
  interface Window {
    Alpine: typeof Alpine;
    botdPromise: Promise<any>;
    endpoints: {
        fetch: string;
        form: string;
        emailguard: string;
    }
  }
}

window.endpoints = {
  fetch: import.meta.env.VITE_FETCH_ENDPOINT,
  form: import.meta.env.VITE_FORM_ENDPOINT,
  emailguard: import.meta.env.VITE_EMAILGUARD_ENDPOINT,
};

window.Alpine = Alpine;

Alpine.start();
