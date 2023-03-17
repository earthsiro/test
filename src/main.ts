import "./style.scss";
import "vant/lib/index.css";

import {
  ActionBar,
  ActionBarButton,
  ActionBarIcon,
  Button,
  Divider,
  NavBar,
  PullRefresh,
  Swipe,
  SwipeItem,
} from "vant";

import App from "./App.vue";
import Router from "../src/router/index";
import { createApp } from "vue";

const app = createApp(App);
// createApp(App).mount('#app')
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);
app.use(Button);
app.use(Divider);
app.use(NavBar);
app.use(PullRefresh);
app.use(Swipe);
app.use(SwipeItem);

app.use(Router);
app.mount("#app");
