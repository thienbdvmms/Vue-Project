import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createRouter, createWebHashHistory } from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";
import HomePage from './components/HomePage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/hello",
      component: HelloWorld,
    },
  ],
});

createApp(App).use(router).mount("#app");
