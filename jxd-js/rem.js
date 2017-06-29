var designwidth=750;
function a() {
    var clientwidth=document.documentElement.clientWidth;
    var fontsize=clientwidth/designwidth*100;
    document.documentElement.style.fontSize=fontsize+'px';
}
a();
window.onresize=a;