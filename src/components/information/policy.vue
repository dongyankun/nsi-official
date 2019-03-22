<template>
    <div class="newsList-com">
        <div class="container">
            <div class="row">
                <div class="col-md-3 list" v-for="(list,index) in newsList" :key="index">
                    <div class="list-box">
                        <div class="list-img-box">
                            <a href="javascript:;" class="img-box"><img :src="list.imgSrc" alt="" height="270"></a>
                        </div>
                        <div class="list-content-box">
                            <h3><a href="javascript:;" :title="list.title">{{list.title}}</a></h3>
                            <p :title="list.desc">{{list.desc}}</p>
                        </div>
                        <div class="list-share-box">
                            <p class="text-right">分享到：<el-popover class="text-center" placement="top-start" title="打开微信 “扫一扫”" width="190" trigger="hover" content="这是二维码"><img width="150" src="../../assets/img/layoutImg/wechat_QR.png" alt=""><span slot="reference" title="分享到微信" class="iconfont icon-weixin weiChat"></span></el-popover><span title="分享到微博" class="iconfont icon-weibo2 weibo"></span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt20">
                <div class="col-md-12 text-center">
                    <a href="javascript:;" class="loadMore">加载更多</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            newsList:[
                {
                imgSrc:require('../../assets/img/index/small003.jpg'),
                title:"研究：课改过程中的教师身份认同困境",
                desc:"一直以来，教师专业身份认同问题都是国内外学界研究的重要课题。伴随着本世纪初中国大陆教育改革的宏观背景脉络，在该领域更是出现了前所未有的困境与挑战。因此，黄显涵等人在《课程改革中教师挑战与困境：中国大陆教师的个案分析》一文中，利用教师困境维度（控制困境、课程困境、专业发展困境、评估困境）的框架体系，着手对中国大陆课程改革过程中，所体现出的教师专业身份认同困境进行实证研究。"
            },{
                imgSrc:require('../../assets/img/index/small004.jpg'),
                title:"VIPKID完成5亿美元D+轮融资，估值超过200亿元",
                desc:"6月21日，在线少儿英语品牌VIPKID确认完成5亿美元D+轮融资，由投资管理机构Coatue、腾讯公司、红杉资本中国基金、云锋基金共同领投。VIPKID创始人兼CEO米雯娟表示，此次融资将主要用于招聘北美外教、储备技术和产品人才以及全球业务布局三个方面。"
            },{
                imgSrc:require('../../assets/img/index/small001.jpg'),
                title:"麻省理工毕业演讲：Facebook首席运营官告诫孩子，做乐观主义者拥抱不确定",
                desc:"Facebook首席运营官雪莉·桑德伯格（Sheryl Sandberg）在2018麻省理工学院毕业典礼上，分享了自己对毕业生的寄语。这位福布斯上榜前50名“最有力量” 的商业女精英通过自己的经历和感悟，告诉毕业生们，这一刻起意味着从他们一生中最具规划性条理性的那部分人生毕业，面对未来的不确定因素，要勇敢面对，做清醒的乐观主义者。技术需要人来创建，用所学知识解决全球面临最关键的问题。发挥影响力，让技术成为世界上一种善的力量。"
            },{
                imgSrc:require('../../assets/img/index/small002.jpg'),
                title:"知识付费两周年：行业“凉凉”，你的焦虑治好了吗？",
                desc:"2016年年中井喷式爆发，历经两年红红火火的知识付费平台，如今迎来了“危急时刻”。"
            }, {
                imgSrc:require('../../assets/img/index/small001.jpg'),
                title:"研究：课改过程中的教师身份认同困境",
                desc:"一直以来，教师专业身份认同问题都是国内外学界研究的重要课题。伴随着本世纪初中国大陆教育改革的宏观背景脉络，在该领域更是出现了前所未有的困境与挑战。因此，黄显涵等人在《课程改革中教师挑战与困境：中国大陆教师的个案分析》一文中，利用教师困境维度（控制困境、课程困境、专业发展困境、评估困境）的框架体系，着手对中国大陆课程改革过程中，所体现出的教师专业身份认同困境进行实证研究。"
            },{
                imgSrc:require('../../assets/img/index/small002.jpg'),
                title:"VIPKID完成5亿美元D+轮融资，估值超过200亿元",
                desc:"6月21日，在线少儿英语品牌VIPKID确认完成5亿美元D+轮融资，由投资管理机构Coatue、腾讯公司、红杉资本中国基金、云锋基金共同领投。VIPKID创始人兼CEO米雯娟表示，此次融资将主要用于招聘北美外教、储备技术和产品人才以及全球业务布局三个方面。"
            },{
                imgSrc:require('../../assets/img/index/small003.jpg'),
                title:"麻省理工毕业演讲：Facebook首席运营官告诫孩子，做乐观主义者拥抱不确定",
                desc:"Facebook首席运营官雪莉·桑德伯格（Sheryl Sandberg）在2018麻省理工学院毕业典礼上，分享了自己对毕业生的寄语。这位福布斯上榜前50名“最有力量” 的商业女精英通过自己的经历和感悟，告诉毕业生们，这一刻起意味着从他们一生中最具规划性条理性的那部分人生毕业，面对未来的不确定因素，要勇敢面对，做清醒的乐观主义者。技术需要人来创建，用所学知识解决全球面临最关键的问题。发挥影响力，让技术成为世界上一种善的力量。"
            },{
                imgSrc:require('../../assets/img/index/small004.jpg'),
                title:"知识付费两周年：行业“凉凉”，你的焦虑治好了吗？",
                desc:"2016年年中井喷式爆发，历经两年红红火火的知识付费平台，如今迎来了“危急时刻”。"
            }
            ]
        }
    }
}
</script>

<style lang="scss">
   @import '../../assets/style/news/common.scss';
</style>
