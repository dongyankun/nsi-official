// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout.vue'
import router from './routers/router'
import axios from 'axios'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import VueAwesomeSwiper from 'vue-awesome-swiper';

// Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);
Vue.use(VueI18n)

Vue.config.productionTip = false

// 罗震
// axios.defaults.baseURL = "http://192.168.0.191:8080/nsi-1.0"

// 生产
axios.defaults.baseURL = "http://data.xinxueshuo.cn/nsi-1.0"

Vue.prototype.axios = axios;

// i18n
const i18n = new VueI18n({
    locale: 'zh', // 语言标识
    messages: {
        'zh': require('./lang/zh'),
        'en': require('./lang/en')
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    i18n,
    components: { Layout },
    template: '<Layout/>'
})