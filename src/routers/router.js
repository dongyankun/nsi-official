import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'
import aboutusPage from '../pages/aboutusPage.vue'
import InformationPage from '../pages/InformationPage.vue'
import eventPage from "../pages/eventPage.vue"
import researchPage from '../pages/researchPage.vue'
import consultingPage from '../pages/consulting.vue'
import lotusPage from '../pages/lotusPage.vue'

import newestList from '../components/information/newList.vue'
import original from '../components/information/original.vue'
import visitschool from '../components/information/visitSchool.vue'
import policy from '../components/information/policy.vue'
import detailnews from '../components/information/newsDetail.vue'
import interview from '../components/information/interview.vue'

import eventDetail from '../components/event/eventDetail.vue'
import periodical from '../components/research/periodical.vue'


import consultOne from '../components/consulting/consultOne.vue'
import consultTwo from '../components/consulting/consultTwo.vue'
import consultThree from '../components/consulting/consultThree.vue'
import consultFour from '../components/consulting/consultFour.vue'
import consultFive from '../components/consulting/consultFive.vue'
import consultMob from '../components/consulting/consultMob.vue'



Vue.use(Router)

const routes = [{
    path: "/",
    component: IndexPage
}, {
    path: "/news",
    redirect: "/news/newestArticle",
    component: InformationPage,
    children: [{
            path: "newestArticle",
            component: newestList
        },
        {
            path: "original",
            component: original
        },
        {
            path: "visitSchool",
            component: visitschool
        },
        {
            path: "policy",
            component: policy
        },
        {
            path: "interview",
            component: interview
        }
    ]
}, {
    path: "/news/detailnews/:id",
    name: "detailNews",
    component: detailnews
}, {
    path: "/event",
    component: eventPage
}, {
    path: "/event/detail",
    name: "eventDetail",
    component: eventDetail
}, {
    path: "/about",
    component: aboutusPage
}, {
    path: "/research",
    component: researchPage,
    redirect: '/research/periodical',
    children: [{
        path: 'periodical',
        component: periodical
    }]
}, {
    path: "/consulting",
    component: consultingPage,
    redirect: '/consulting/consultOne',
    children: [{
        path: '/consulting/consultMob',
        component: consultMob
    },{
        path: '/consulting/consultOne',
        component: consultOne
    },{
        path: '/consulting/consultTwo',
        component: consultTwo
    },{
        path: '/consulting/consultThree',
        component: consultThree
    },{
        path: '/consulting/consultFour',
        component: consultFour
    },{
        path: '/consulting/consultFive',
        component: consultFive
    }]
}, {
    path: "/lotus",
    component: lotusPage
}]

const router = new Router({
    // mode: "history",
    routes
})

export default router;