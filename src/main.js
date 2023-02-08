import Vue from 'vue'
import App from './App'

import uView from "uview-ui"
import GlobalMixin from './mixins/global'

Vue.use(uView);
Vue.mixin(GlobalMixin)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
