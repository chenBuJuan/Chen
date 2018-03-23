$(document).ready(function(){
    var conHeader = $("#content>header");
    var ifeLis = $("#opusIFE>ul>li");
    var fccLis = $("#opusFCC>ul>li");
    var perLis = $("#opusPer>ul>li");
    var topBtn = $("#toTop");
    var menu = $("#menu");
    var menuBar = $("#menuBar");
    var menuBtn = $("#menuBtn");
    var menuClose = $("#menuClose");
    var content = $("#content");
    var mask = $("#mask");
    var menuLis = $("#menu>nav>ul>li");
    
    conHeader.css("height", $(window).height() + "px");
    conHeader.css("backgroundSize", "100% " + ($(window).height() - 100) + "px");
    $("#tip").css("top", $(window).height() - 100 + "px");

    ifeLis.each(function(key, value){
        $(value).click(function(){
            window.open($(this).find('.mes>header>a').attr("href"));
        });
    });
    fccLis.each(function(key, value){
        $(value).click(function(){
            window.open($(this).find('.img>a').attr("href"));
        });
    });
    perLis.each(function(key, value){
        if(key == 1 || key == 2){
            $(value).click(function(){
                window.open($(this).find('.btn>a').attr("href"));
            });
        }
    });
    menuLis.eq(0).click(function(){
        $("html,body").animate({scrollTop: '0px'});
    });
    menuLis.eq(1).click(function(){
        $("html,body").animate({scrollTop: $("#opusIFE").position().top});
    });
    menuLis.eq(2).click(function(){
        $("html,body").animate({scrollTop: $("#opusFCC").position().top + 100});
    });
    menuLis.eq(3).click(function(){
        $("html,body").animate({scrollTop: $("#opusPer").position().top});
    });
    menuLis.eq(4).click(function(){
        $("html,body").animate({scrollTop: $(document).height() - $(window).height()});
    });
    topBtn.click(function(){
        $("html,body").animate({scrollTop: '0px'});
    });
    
    menuBar.hover(menuBarIn, menuBarOut);
    menuBtn.click(menuIn);
    menuClose.click(menuOut);
    mask.click(menuOut);

    $(window).resize(function(){
        window.location.reload();
    });
    $(document).scroll(function(){
        if($(this).scrollTop() >= $(window).height()){
            topBtn.show();
        }else{
            topBtn.hide();
        }
    });

    function menuIn(){
        menu.css("left", 0);
        menuBar.css("left", 0);
        content.css("transform", "translateX(50%)");
        menuBtn.toggle();
        menuClose.toggle();
        mask.toggle();
        menuBar.unbind('mouseenter').unbind('mouseleave');
    }
    function menuOut(){
        menu.css("left", "-50%");
        menuBar.css("left", "100%");
        content.css("transform", "translateX(0)");
        menuBtn.toggle();
        menuClose.toggle();
        mask.toggle();
        menuBar.hover(menuBarIn, menuBarOut);
    }
    function menuBarIn(){
        menu.css("left", "-49%");
        content.css("transform", "translateX(1%)");
    }
    function menuBarOut(){
        menu.css("left", "-50%");
        content.css("transform", "translateX(0)");
    }
});

