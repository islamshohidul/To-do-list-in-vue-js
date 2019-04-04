import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';  // Add this
import router from './router'
Vue.use(VeeValidate);  // Add this
Vue.config.productionTip = false




new Vue({
 router,
  render: h => h(App),
}).$mount('#app')


