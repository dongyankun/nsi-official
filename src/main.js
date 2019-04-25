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
// axios.defaults.baseURL = "http://192.168.0.20:8080/nsi-1.0"

// 生产
axios.defaults.baseURL = "https://data.xinxueshuo.cn/nsi-1.0"

Vue.prototype.axios = axios;
// Vue.prototype.wxConfig = wxConfig

// i18n
const i18n = new VueI18n({
    locale: 'zh', // 语言标识
    messages: {
        'zh': require('./lang/zh'),
        'en': require('./lang/en')
    }
})

//  百度统计
router.afterEach((to, from, next) => { 
    setTimeout(() => {   
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?e898a1b6e73616a0c84313f55a47efd6";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    }, 0);
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    i18n,
    components: { Layout },
    template: '<Layout/>'
})