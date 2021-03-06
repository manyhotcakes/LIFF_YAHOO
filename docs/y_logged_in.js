window.yconnectInit = function() {
    YAHOO.JP.yconnect.Authorization.init({
        button: {    // ボタンに関しては下記URLを参考に設定してください
                     // https://developer.yahoo.co.jp/yconnect/loginbuttons.html
            format: "image",
            type: "a",
            textType:"a",
            width: 196,
            height: 38,
            className: "yconnectLogin"
        },
        forceRedirect: true,
        authorization: {
            clientId: "dj00aiZpPVZxTnFwbWtLWG5JYiZzPWNvbnN1bWVyc2VjcmV0Jng9OGI-",    // 登録したClient IDを入力してください
            redirectUri: "https://manyhotcakes.github.io/LIFF_YAHOO/y_logged_in.html", // 本スクリプトを埋め込むページのURLを入力してください
            scope: "openid email profile address",
            windowWidth: "500",
            windowHeight: "400"
        },
        autofill: {
            // 属性パラメーター: "属性情報を挿入したいフォーム要素のID名"
            // name: "name",
            // email: "email",
            // address: "address"
        },
        onSuccess: function(res) {
            // 正常時のコールバック関数
            // res変数に各属性情報が格納されます
            console.log("SUCCESS: Yahoo Logged in", res)
        },
        onError: function(res) {
            // エラー発生時のコールバック関数
            console.error("FAIL: Yahoo Logged in", res)
        },
        onCancel: function(res) {
            // 同意キャンセルされた時のコールバック関数
            console.error("CANCEL: Yahoo Log in", res)
        }
    });

    document.getElementById("info").innerText = location.href
};

(function(){
    var fs = document.getElementsByTagName("script")[0], s = document.createElement("script");
    s.setAttribute("src", "https://s.yimg.jp/images/login/yconnect/auth/2.0.4/auth-min.js");
    fs.parentNode.insertBefore(s, fs);
    })();