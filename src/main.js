import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHashHistory } from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/z",
      component: HelloWorld,
    },
  ],
});

createApp(App).use(router).mount("#app");

// new Vue({
//     render: h => h(App),
//     // router,
// }).$mount('app')
