import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI, { locale })

new Vue({
    render: h => h(App),
    router: router,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')