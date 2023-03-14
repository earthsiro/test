import "./style.css";
import "vant/lib/index.css";

import { ActionBar, ActionBarButton, ActionBarIcon, Button } from "vant";

import App from "./App.vue";
import Router from "../src/router/index";
import { createApp } from "vue";

const app = createApp(App);
// createApp(App).mount('#app')
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);
app.use(Button);

app.use(Router);
app.mount("#app");
