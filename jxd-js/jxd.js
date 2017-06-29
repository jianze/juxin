$(function(){
    // 获取浏览器高
    var Lanheight=$(window).height();
    var Lanwidth=$(window).width();
    var Banner=$('.jxd-banner');
    Banner.height(Lanheight);
    var Nav=$(".jxd-box-nav");
    var $wd = $(window);
    var NavA=$(".jxd-nav a");
    var Yw=$(".jxd-yw");
    var Gud=$(".gudingzx");
    var Ynav=$(".jxd-nav-tou");
    Ynav.height(Lanheight);
    $wd.scroll(function() {
        var scTop = $wd.scrollTop();
        if(Lanwidth<=750){
            return;
        }
        if(scTop>=100){
            Nav.css("background","rgba(16,21,40,0.7)");
            if(scTop>Lanheight-80){
                Nav.css({"background":"#ffffff","line-height":"30px","height":"30px"});
                NavA.css("color","#212121");
                Gud.css("opacity","1");
            }else if(scTop<Lanheight-80){
                Nav.css({"background":"rgba(16,21,40,0.7)","line-height":"80px","height":"80px"});
                NavA.css("color","#dedede");
                Gud.css("opacity","0");
            }
            Yw.css("margin-top","-183px");
        }else if(scTop<100){
            Nav.css("background","rgba(16,21,40,0)");
        }
    });
    // 返回顶部
    var fanhui=$(".gudingzx .fanhuidingbu");
    fanhui.click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });
    // 响应式效果
    // 经典套餐
    var ydTca=$(".jxy-jdtc-fl .jxy-jdtc-bt");
    var ydTcb=$(".jxy-jdtc-fl");
    var ydTcx=$(".jxy-jdtc-fl .jxy-jdtc-bt .jxy-jdtc-tb");
    ydTca.each(function(i){
        ydTca.eq(i).click(function(){
            ydTca.each(function (j) {
                ydTcb.eq(j).removeClass("jxy-jdtc-bc");
                ydTcx.eq(j).removeClass("jxy-jdtc-xj");
            });
            ydTcb.eq(i).addClass("jxy-jdtc-bc");
            ydTcx.eq(i).addClass("jxy-jdtc-xj");
        });
    });
    var ydTcul=$(".jxd-jdtc .card-area .card-item .card .content-second .jxd-jtcbox ul");
    var ydTcyr=$(".card-area .card-item");
    ydTcyr.each(function(i){
        ydTcyr.eq(i).mouseover(function(){
            ydTcyr.each(function (j) {
                ydTcul.eq(j).removeClass("jxd-jtcul");
            });
            ydTcul.eq(i).addClass("jxd-jtcul");
        });
    });
    // 动态添加高度
    var Gsys=$(".jxd-gsys .gsys-box .gsys-left");
    function Dt() {
        var Dtk=Gsys.width();
        Gsys.height(Dtk);
    }
    Dt();
    window.onresize=Dt;
});