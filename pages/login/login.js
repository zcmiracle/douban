// pages/login/login.js
Page({
    
    // 微信登录
    wechatLogin: function() {
        console.log("微信登录");
    },

    // 豆瓣已有帐号登录
    doubanLogin: function() {
        console.log("豆瓣已有帐号登录");
    },

    // 豆瓣使用协议/隐私协议
    openProtocol: function() {
        console.log("豆瓣使用协议/隐私协议");
        wx.navigateTo({
          url: '/pages/agreement/agreement',
        })
    },

})