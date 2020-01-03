const proxy = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        "/miaov",proxy({
            "target": "https://data.miaov.com/", // 目标主机
            "secure": true, // 验证SSL证书
            "changeOrigin": true, // 虚拟主机
            "pathRewrite": { // 路径重写
                "^/miaov": "" 
            },
            "cookieDomainRewrite": "https://data.miaov.com/" // 权限校验
        })
    );
};