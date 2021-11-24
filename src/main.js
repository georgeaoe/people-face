import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/charts.js'
import jquery from 'jquery'
import animated from 'animate.css'

Vue.use(animated);
Vue.prototype.$ = jquery
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')