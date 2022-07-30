function showModle() {
    document.querySelector(".overlay").classList.add("showoveerly");
    document.querySelector(".loginfrom").classList.add("showlogin");
}
function closeModle() {
    document.querySelector(".overlay").classList.remove("showoveerly");
    document.querySelector(".loginfrom").classList.remove("showlogin");
}
var btnlogin = document.querySelector(".btn-login");
btnlogin.addEventListener("click", showModle)
var close=document.querySelector("span");
close.addEventListener("click",closeModle)