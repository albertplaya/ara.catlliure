//Remove paywall
var paywall = document.getElementsByClassName("paywall");
paywall[0].parentNode.removeChild(paywall[0]);

//Unlock navigation
document.getElementsByClassName("web-mode closed")[0].className = "web-mode";
