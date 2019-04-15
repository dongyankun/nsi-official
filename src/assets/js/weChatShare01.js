import wx from 'weixin-js-sdk'
import axios from 'axios'

let weiChatInit = {
    // 判断是否为微信浏览器
    isWeixinBrowser() {
        var agent = navigator.userAgent.toLowerCase();
        if (agent.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    },
    // 微信配置config
    wxConfig() {
        axios({
            method: "get",
            // url: '/Admin_api?whereFrom=WeChatShare&Callback=',
            url: '/wxPay/wx_chat_share.do',
            params: {
                url: window.location.href
            }
        }).then((res) => {
            let data = res.data.data
                // let data = JSON.parse(res.data.split('(')[1].split(')')[0])
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature, // 必填，签名，见附录1
                jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            })
        })
    },
    //wx.ready
    wxReady(wxShareInfo) {
        // 发送后台微信配置
        this.wxConfig()

        // 分享给朋友
        wx.ready(() => {
            wx.onMenuShareAppMessage({

                title: wxShareInfo.title, // 分享标题

                desc: wxShareInfo.desc, // 分享描述

                link: wxShareInfo.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致

                imgUrl: wxShareInfo.imgUrl, // 分享图标

                type: '', // 分享类型,music、video或link，不填默认为link

                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空

                success: function() {
                    // 用户确认分享后执行的回调函数

                },
                cancel: function() {
                    // 用户取消分享后执行的回调函数
                }
            });

            // 分享到朋友圈
            wx.onMenuShareTimeline({

                title: wxShareInfo.title, // 分享标题

                link: wxShareInfo.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致

                imgUrl: wxShareInfo.imgUrl, // 分享图标

                success: function() {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function() {
                    // 用户取消分享后执行的回调函数
                }
            });
        })
    }
}

export default weiChatInit