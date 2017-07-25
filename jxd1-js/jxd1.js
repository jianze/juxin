$(function() {
    var bannerTu = $(".banner-tu-box .banner-tu");
    var bannerDian = $(".banner-dian");
    // 动态获取轮播点的宽度和添加轮播点
    bannerTu.each(function () {
        bannerDian.append("<li></li>");
    });
    bannerDian.width(40 * bannerTu.length);
    var WbDian = bannerDian.width();
    bannerDian.css({"margin-left": -WbDian / 2});
    // 轮播图
    var leftD = $('.banner-left');
    var rightD = $('.banner-right');
    var bannerBox = $(".banner-box");
    var Dianli = $("li", bannerDian);
    Dianli.eq(0).addClass('se');
    bannerTu.css('opacity', 0).eq(0).css('opacity', 1);
    var LunboS = setInterval(LunBo, 5000);
    bannerBox.mouseover(function () {
        clearInterval(LunboS);
    });
    bannerBox.mouseout(function () {
        LunboS = setInterval(LunBo, 5000);
    });
    var XiaBiao = 0;
    var Fl = true;
    rightD.click(function () {
        if (!Fl) {
            return;
        }
        Fl = false;
        LunBo();
        return false;
    });
    leftD.click(function () {
        if (!Fl) {
            return;
        }
        Fl = false;
        LunBoZ();
        return false;
    });
    function LunBo() {
        XiaBiao++;
        if (XiaBiao == bannerTu.length) {
            XiaBiao = 0;
        }
        bannerTu.each(function (i) {
            if (i != XiaBiao) {
                bannerTu.eq(i).animate({opacity: 0}, 1000);
            }
            Dianli.eq(i).removeClass("se");
        });
        bannerTu.eq(XiaBiao).animate({opacity: 1}, 1000, function () {
            Fl = true;
        });
        Dianli.eq(XiaBiao).addClass("se");
    }

    function LunBoZ() {
        XiaBiao--;
        if (XiaBiao < 0) {
            XiaBiao = bannerTu.length - 1;
        }
        bannerTu.each(function (i) {
            if (i != XiaBiao) {
                bannerTu.eq(i).animate({opacity: 0}, 1000);
            }
            Dianli.eq(i).removeClass("se");
        });
        bannerTu.eq(XiaBiao).animate({opacity: 1}, 1000, function () {
            Fl = true;
        });
        Dianli.eq(XiaBiao).addClass("se");
    }

    Dianli.each(function (i) {
        Dianli.eq(i).click(function () {
            Dianli.each(function (j) {
                if (j != i) {
                    bannerTu.eq(j).animate({opacity: 0}, 1000);
                }
                Dianli.eq(j).removeClass("se");
            });
            bannerTu.eq(i).animate({opacity: 1}, 1000);
            Dianli.eq(i).addClass("se");
            XiaBiao = i;
        })
    });
    // 倒计时
    var time = 640490;
    setInterval(function () {
        if(time==0){
            time=640490;
        }
        time--;
        var day = parseInt(time / 60 / 60 / 24);
        var hour = parseInt(time / 60 / 60 % 24);
        $('.ban2-box .djs .d').html("0"+day);
        $('.ban2-box .djs .h').html("0"+hour);
    }, 1000);
    // 牌照轮播
    var pzBox=$(".ban9-box .lun-box .lun-boxn ul");
    var Pz=$(".ban9-box .lun-box .lun-boxn ul li");
    var Lbox=$(".ban9-box .lun-box");
    var Left=$(".ban9-box .lun-box .left");
    var Right=$(".ban9-box .lun-box .right");
    var sT=setInterval(pzL,2500);
    Lbox.mouseover(function(){
        clearInterval(sT);
    });
    Lbox.mouseout(function(){
        sT=setInterval(pzL,2500);
    });
    var Pzw=Pz.width();
    var Fll=true;
    Left.click(function(){
        if(!Fll){
            return ;
        }
        Fll=false;
        pzL();
        return false;
    });
    Right.click(function(){
        if(!Fll){
            return ;
        }
        Fll=false;
        pzR();
        return false;
    });
    function pzR(){
        pzBox.animate({left:0},1000,function(){
            var LA=$(".ban9-box .lun-box .lun-boxn ul li:last-child");
            pzBox.prepend(LA);
            pzBox.css("left",-Pzw);
            Fll=true;
        });
    }
    function pzL(){
        var FI=$(".ban9-box .lun-box .lun-boxn ul li:first-child");
        pzBox.append(FI);
        pzBox.css("left",0);
        pzBox.animate({left:-Pzw},1000,function(){
            Fll=true;
        });
    }
    // 返回顶部
    var fanhui=$(".gudingzx .fanhuidingbu");
    fanhui.click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });
});