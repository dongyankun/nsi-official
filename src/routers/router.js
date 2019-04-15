import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'
import aboutusPage from '../pages/aboutusPage.vue'
import gesPage from '../pages/gesPage.vue'
import InformationPage from '../pages/InformationPage.vue'
import eventPage from "../pages/eventPage.vue"
import researchPage from '../pages/researchPage.vue'
import consultingPage from '../pages/consulting.vue'
import lotusPage from '../pages/lotusPage.vue'
import vipPage from '../pages/vipPage.vue'

import newestList from '../components/information/newList.vue'
import original from '../components/information/original.vue'
import visitschool from '../components/information/visitSchool.vue'
import policy from '../components/information/policy.vue'
import detailnews from '../components/information/newsDetail.vue'
import interview from '../components/information/interview.vue'
import historyNews from '../components/information/histroy.vue'
import historydetail from '../components/information/historyDetail.vue'

import eventLatest from '../components/event/eventLatest.vue'
import eventDetail from '../components/event/eventDetail.vue'
import eventLotus from '../components/event/eventLotus.vue'
import eventApply from '../components/event/eventApply.vue'
import periodical from '../components/research/periodical.vue'
import report from '../components/research/report.vue'
import advancedClass from '../components/research/advancedClass.vue'
import researchApply from '../components/research/researchApply.vue'
import researchIndex from '../components/research/researchIndex.vue'
import experts from '../components/research/experts.vue'

import consultOne from '../components/consulting/consultOne.vue'
import consultTwo from '../components/consulting/consultTwo.vue'
import consultThree from '../components/consulting/consultThree.vue'
import consultFour from '../components/consulting/consultFour.vue'
import consultFive from '../components/consulting/consultFive.vue'
import consultMob from '../components/consulting/consultMob.vue'

import notFondPage from '../components/common/notFondPage.vue'

// nullPage
import applyTalent from '../components/nullPage/apply.vue'

Vue.use(Router)

const routes = [{
        path: "/",
        component: IndexPage
    }, {
        path: "/news",
        redirect: "/news/latest",
        component: InformationPage,
        children: [{
                path: "latest",
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
            },
            {
                path: "histroy",
                component: historyNews
            }
        ]
    }, {
        path: "/news/detailnews/:id",
        name: "detailNews",
        component: detailnews
    },
    {
        path: "/news/historydetail/:id",
        name: "historydetail",
        component: historydetail
    },
    {
        path: "/event",
        component: eventPage,
        redirect: '/event/latest',
        children: [{
                path: 'latest',
                component: eventLatest
            },
            {
                path: 'subject',
                component: notFondPage
            }, {
                path: 'lotus',
                component: eventLotus
            }, {
                path: 'apply',
                component: eventApply
            }, {
                path: "detail",
                name: "eventDetail",
                component: eventDetail
            }
        ]
    }, {
        path: "/about",
        component: aboutusPage
    }, {
        path: "/ges",
        component: gesPage
    }, {
        path: "/research",
        component: researchPage,
        redirect: '/research/info',
        children: [{
                path: 'info',
                component: researchIndex
            },
            {
                path: 'periodical',
                component: periodical
            }, {
                path: 'report',
                component: report
            }, {
                path: 'pisom',
                component: advancedClass
            }, {
                path: 'apply',
                component: researchApply
            }, {
                path: 'experts',
                component: experts
            }
        ]
    }, {
        path: "/consulting",
        component: consultingPage,
        redirect: '/consulting/consultOne',
        children: [{
            path: '/consulting/consultMob',
            component: consultMob
        }, {
            path: '/consulting/consultOne',
            component: consultOne
        }, {
            path: '/consulting/consultTwo',
            component: consultTwo
        }, {
            path: '/consulting/consultThree',
            component: consultThree
        }, {
            path: '/consulting/consultFour',
            component: consultFour
        }, {
            path: '/consulting/consultFive',
            component: consultFive
        }]
    }, {
        path: "/lotus",
        component: lotusPage
    }, {
        path: "/lotus/shanghai",
        component: notFondPage
    }, {
        path: "/lotus/beijing",
        component: notFondPage
    }, {
        path: "/vip",
        component: vipPage
    }, {
        path: '/apply',
        component: applyTalent
    }
]

const router = new Router({
    // mode: "history",
    routes
})

export default router;