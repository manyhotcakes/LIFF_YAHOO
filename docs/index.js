window.yconnectInit = function () {
  YAHOO.JP.yconnect.Authorization.init({
    button: {
      // ボタンに関しては下記URLを参考に設定してください
      // https://developer.yahoo.co.jp/yconnect/loginbuttons.html
      format: "image",
      type: "a",
      textType: "a",
      width: 196,
      height: 38,
      className: "yconnectLogin",
    },
    forceRedirect: true,
    authorization: {
      clientId: "dj00aiZpPVZxTnFwbWtLWG5JYiZzPWNvbnN1bWVyc2VjcmV0Jng9OGI-", // 登録したClient IDを入力してください
      redirectUri: "https://manyhotcakes.github.io/LIFF_YAHOO/y_logged_in.html", // 本スクリプトを埋め込むページのURLを入力してください
      scope: "openid email profile address",
      windowWidth: "500",
      windowHeight: "400",
    },
  });
};

//
(function(){
    var fs = document.getElementsByTagName("script")[0], s = document.createElement("script");
    s.setAttribute("src", "https://s.yimg.jp/images/login/yconnect/auth/2.0.4/auth-min.js");
    fs.parentNode.insertBefore(s, fs);
    })();

//
window.onload = () => {
  console.log("LIFF INIT");
  liff
    .init({ liffId: "1654217489-pKGnXXkn" })
    .then(() => {
      console.log("LIFF INIT SUCCESS");
      if (!liff.isLoggedIn()) {
        liff.login();
      } else {
        liff.getProfile().then((res) => {
          document.getElementById("line account").innerText = JSON.stringify(
            res
          );
        });
        window.yconnectInit();
      }
    })
    .catch((e) => {
      console.error("LIFF INIT FAILED", e);
    });
};
