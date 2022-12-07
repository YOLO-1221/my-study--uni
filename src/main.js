/*
 * @Author: YOLO-1221 xue864226163@gmail.com
 * @Date: 2022-11-01 16:50:31
 * @LastEditors: YOLO-1221 xue864226163@gmail.com
 * @LastEditTime: 2022-12-07 20:13:15
 * @FilePath: /my-study--uni/src/main.js
 * @Description: 
 */
import Vue from 'vue'
import App from './App'

import uView from "uview-ui";
Vue.use(uView);

import GlobalMixin from './mixins/global'
Vue.mixin(GlobalMixin)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
