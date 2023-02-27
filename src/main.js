import Vue from "vue";
import App from "./App";

import uView from "uview-ui";
import GlobalMixin from "./mixins/global";

import store from "./store";

Vue.use(uView);

Vue.mixin(GlobalMixin);

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  ...App,
  store,
});
app.$mount();
