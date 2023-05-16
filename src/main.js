import { createApp } from "vue";
import App from "./App.vue";
// On importe le routeur
import router from "./router.js";

createApp(App).use(router).mount("#app");
