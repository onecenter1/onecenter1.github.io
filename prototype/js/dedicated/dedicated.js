/**
 * Created with JetBrains WebStorm.
 * User: M.s
 * Date: 14-5-21
 * Time: 上午11:35
 * To change this template use File | Settings | File Templates.
 */
//    手风琴插件

$(function(){
    var ULlist=$(".accordion-main .accordion-list");//LI列表  accordion
    ULlist.each(function(e){
        $(document).ready(function(){
            $(ULlist[e]).next().slideUp();
            $(ULlist[0]).next().slideDown();
        });
        $(ULlist[e]).click(function(){
            $(ULlist[e]).prev().slideUp();
            $(ULlist[e]).next().slideToggle();
            $(ULlist[e]).prev().prev().prev().slideUp();
            $(ULlist[e]).next().next().next().slideUp();
            $(ULlist[e]).prev().prev().prev().prev().prev().slideUp();
            $(ULlist[e]).next().next().next().next().next().slideUp();
            $(ULlist[e]).next().next().next().next().next().next().next().slideUp();
            $(".tbodypartwinuser").hide();
        });
    });
});
//   -----------------------------主页的视图切换
//
// //    点击视图切换按钮
    var biaoji=0;
    var goswitch=   $(".goswitch");  //切换按钮
var moduleleft=  $(".moduleleft");  //左边的视图
var moduleright=$(".moduleright");  //右边的视图


//浏览模式切换
goswitch.click(function(){
    if(biaoji%2==0){
        goswitch.css({
            backgroundPosition:"0 -422px"
        });
        moduleleft.animate({
            width:"99%"
        },100);
        moduleright.animate({
            width:"0%",
            opacity:"hide"
        },200);
        biaoji++;

    }else{
        goswitch.css({
            backgroundPosition:"0 -398px"
        });
        moduleleft.animate({
            width:"75%"
        },100);
        moduleright.animate({
            width:"20%",
            opacity:"show"
        },200);
        biaoji--;
    }




});

//点击主页的设置按钮定制页面
    var custompageobj=$(".custompage");
    var costombtnobj=$(".costombtn");  //点击设置定制页按钮
var indexclosewindow=$("#indexclosewindow");  //主页的弹出层的关闭按钮
        custompageobj.ready(function(){
            custompageobj.hide();
        });
costombtnobj.click(function(){
    custompageobj.slideDown();
    $(".bodywindows").show();
});
indexclosewindow.click(function(){
    custompageobj.slideUp();
    $(".bodywindows").hide();
});
//点击主页弹出层的取消按钮
$(".indexclosewindow").click(function(){
    custompageobj.slideUp();
    $(".bodywindows").hide();
});

var indexclickleftview=$(".indexclickleftview");  //点击主页弹出层的导航左按钮
var indexclickrightview=$(".indexclickrightview");// 点击主页弹出层的导航右按钮
var indexviewcruent=$(".indexviewcruent");//按钮的背景图切换

var indextcone=$(".indextc-contentone");  //弹出层的第一块页面
var indextctwo=$(".indextc-contenttwo");  //弹出层的第二块页面
indexclickleftview.ready(function(){
    indexclickleftview.css({
        backgroundPosition:"-16px 0 "
    });
    indextctwo.hide();
});
indexclickleftview.click(function(){
    indextcone.show(300);
    indextctwo.hide(300);
    indexviewcruent.css({
        backgroundPosition:"0 0"
    });
    indexclickleftview.css({
        backgroundPosition:"-16px 0 "
    });
    indexclickrightview.css({
        backgroundPosition:" 0 -16px"
    })
});


indexclickrightview.click(function(){
    indextcone.hide(300);
    indextctwo.show(300);
    indexviewcruent.css({
        backgroundPosition:"0 -26px"
    });
    indexclickleftview.css({
        backgroundPosition:"0 0  "
    });
    indexclickrightview.css({
        backgroundPosition:"-16px -16px"
    });


});






//先遍历主页的顶部列表视图   主页弹出层定制页
  var indexleftview=$(".indexleftview ul li"); //得到li上面的div，，进行遍历
  var indexleftviewlen=indexleftview.length;

var addviewto=$(".addviewto");//主页的添加按钮
var currentdel=$(".currentdelete");

//添加按钮
addviewto.each(function(e){
    $(addviewto[e]).bind("click",function(){
        var num=parseInt(e)+1;
        console.log(num);
          var clickobjtext= $(addviewto[e]).prev().prev().find("span").text();
        var lidebg="../images/ex/TOPN"+num+".png";
        var atr=" <li class='indexleftviewgaojin' style='background: url("+lidebg+") 0 0 no-repeat'>" +
            "<div class='indexviewlitext'><span>"+clickobjtext+"</span><span class='currentdel currentdelete'></span></div></li>";
        console.log(atr);

        var atrtop="<li class='toaddindexview'></li>";

        $(".indexleftview ul li").last().replaceWith(atrtop);
        if($(".indexleftview ul li").length<12){
            $(".indexleftview ul li").last().after(atrtop);
        }
            $(".toaddindexview").first().replaceWith(atr);
        //点击下方添加视图之后的删除按钮
        $(".currentdelete").bind("click",function(){
            $(this).parent().parent().remove();
                $(".indexleftview ul li").last().replaceWith(atrtop);
        });
        //顶部视图的删除
    });
});
//时间监听

//顶部视图的删除

currentdel.each(function(e){
    $(currentdel[e]).bind("click",function(e){
        var atrtop="<li class='toaddindexview'></li>";
        $(e.target).parent().parent().remove();
        $(".indexleftview ul li").last().replaceWith(atrtop);
        $(".addviewto").bind("click",function(){
            var num=parseInt(e)+1;
            console.log(num);
            var clickobjtext= $(addviewto[e]).prev().prev().find("span").text();
            var lidebg="../images/ex/TOPN"+num+".png";
            var atr=" <li class='indexleftviewgaojin' style='background: url("+lidebg+") 0 0 no-repeat'>" +
                "<div class='indexviewlitext'><span>"+clickobjtext+"</span><span class='currentdel currentdelete'></span></div></li>";
            $(".indexleftview ul li").last().after(atrtop);
                $(".toaddindexview").last().replaceWith(atrtop);
            if($(".indexleftview ul li").length>12){
                $(".indexleftview ul li").last().remove();
            }
        });
    });
});






  var indexviewbut=$(".indexviewbut");  //主页的弹出层下面列表的表

  var butlistwindow=$(".butlistwindow"); //每一块的透明背景
addviewto.ready(function(){
    addviewto.css({opacity:0});
});
indexviewbut.each(function(e){
    $(indexviewbut[e]).mousemove(function(){
        $(addviewto[e]).css({opacity:1});
        $(butlistwindow[e]).addClass("butlistwindowhover");

    });
    $(indexviewbut[e]).mouseout(function(){
        $(addviewto[e]).css({opacity:0});
        $(butlistwindow[e]).removeClass("butlistwindowhover");
    });
});





//====================================================主页的弹出层添加视图方法

   var openinterfacewin=$(".openinterfacewin");//关注网络设备的按钮
var interwint=$(".interwint");   //关注网络设备的弹出层
openinterfacewin.click(function(){
    interwint.show();
});
$(".closeinterwin").click(function(){
    interwint.hide();
});
//关注网络设备里面的搜索
  var indexviewsearchdel=$(".indexviewsearchdel"); // 搜索中的删除按钮
var inputEl = $('.indexviewsearch')

//
indexviewsearchdel.click(function(){
          console.log(this)
          if(inputEl.val()!=null){
              inputEl.val('');
          }
      });

        defVal = inputEl.val();
    console.log(defVal)
    inputEl.bind({
        focus: function() {
            var _this = $(this);
            if (_this.val() == defVal) {
                _this.val('');
            }
        },
        blur: function() {
            var _this = $(this);
            if (_this.val() == '') {
                _this.val(defVal);
            }
        }
    });


//主页的第一块小视图切换

var indexinfoswitch=$(".indexinfoswitch");//得到第一块小视图的容器
var indexviewwaningpage=$(".indexviewwaning");//得到要切换的视图 总
var indexviewbutton=$(".indexviewswitch a");//得到点击的标签a

indexviewwaningpage.each(function(e){
    $(indexviewwaningpage[1]).hide();
    $(indexviewwaningpage[2]).hide();
    $(indexviewwaningpage[3]).hide();

});
$(function(){
    indexviewbutton.each(function(e){



        $(indexviewbutton[0]).click(function(){
            $(indexviewwaningpage[0]).show();
            $(indexviewwaningpage[1]).hide();
            $(indexviewwaningpage[2]).hide();
            $(indexviewwaningpage[3]).hide();
            $(this).addClass("on");
            $(indexviewbutton[e]).removeClass("on");
        });
        $(indexviewbutton[1]).click(function(){
            $(indexviewwaningpage[0]).hide();
            $(indexviewwaningpage[1]).show();
            $(indexviewwaningpage[2]).hide();
            $(indexviewwaningpage[3]).hide();
            $(this).addClass("on");
            $(indexviewbutton[e]).removeClass("on");
        });
        $(indexviewbutton[2]).click(function(){
            $(indexviewwaningpage[0]).hide();
            $(indexviewwaningpage[1]).hide();
            $(indexviewwaningpage[2]).show();
            $(indexviewwaningpage[3]).hide();
            $(this).addClass("on");
            $(indexviewbutton[e]).removeClass("on");
        });
        $(indexviewbutton[3]).click(function(){
            $(indexviewwaningpage[0]).hide();
            $(indexviewwaningpage[1]).hide();
            $(indexviewwaningpage[2]).hide();
            $(indexviewwaningpage[3]).show();
            $(this).addClass("on");
            $(indexviewbutton[e]).removeClass("on");
        });
    });



});



//主页的设置按钮CPU和内存的切换
$(".i-equi").click(function(){
    $(".i-equi").removeClass("on");
    $(this).addClass("on");
});

// 顶级向下导航翻页
var pageup=$(".header-pageup");
var pagedomn=$(".header-pagedown");

var pagenav1=$("#navmenu1");
var pagenav2=$("#navmenu2");

pagedomn.click(function(){
    pagenav1.slideUp("hide");
    pagenav2.slideDown("show");
});

pageup.click(function(){
    pagenav1.slideDown(1000);
    pagenav2.slideUp(1000);
});

var overtrun2=$(".indexovertrun2");//的到翻转的页面2
var getovertrun2=$(".getovertrun2");  //得到点击要翻转的按钮
var getovertrunico=$(".getovertrunico");

//click是indexwindowover2的翻转
//click2是indexovertrun2的翻转

var indexwindowover2=$(".indexwindowover2");//第一张页面
indexwindowover2.ready(function(){
    overtrun2.hide();
    getovertrunico.hide();
//点击报表里面的性能报表里的弹出层按钮
    $("#windowreport").hide();
    $('.loopleft').hide();
    windowobj.hide();
});

getovertrun2.click(function(){
    indexwindowover2.removeClass("click");
    indexwindowover2.animate({
        opacity:"hide"
    },1);

    overtrun2.addClass("click2");
    overtrun2.animate({
        opacity:"show"
    },1);
    getovertrun2.hide(500);
    getovertrunico.show(500);
});
getovertrunico.click(function(){

    indexwindowover2.addClass("click");
    indexwindowover2.animate({
        opacity:"show"
    },1);
    overtrun2.removeClass("click2");
    overtrun2.animate({
        opacity:"hide"
    },1);
    getovertrun2.show(500);
    getovertrunico.hide(500);
});

//点击报表里面的报表管理的添加按钮弹出层
        var reportthemannage=$(".reportthemannage");  //添加按钮
        var themannagewin=$(".themannagewin") ; //点击添加按钮的弹出层
    reportthemannage.click(function(){
        themannagewin.show();
        bodywindow.show();
       });

//点击报表列表里面的视图
     var targetthiswin=$(".targetthiswin");  //视图按钮
        targetthiswin.click(function(){
              $(".reportviewwin").show();
        });

//报表里的视图固定导航
    var floatnav=$(".floatnav ul li");  //得到遍历li
floatnav.each(function(e){
    $(floatnav[e]).hover(function(){
        $(floatnav[e]).animate({width:"100px",left:"-50px"},200);
    },function(){
        $(floatnav[e]).animate({width:"50px",left:"0px"},100);
    });
//    $(floatnav[e]).mouseout(function(){
//
//    });
});


//当点击添加报告内容按钮后的列表的点击
var seletethelisttext=$(".seletethelisttext");  //按钮列表
$(document).ready(function(){
    $(".report-seletethelisttext").hide();
    $(".report-seletethelisttext:first").show();
//       其他内容的显示
    $(".dayportobjone").show();
    $(".report-dataone").show();
    seletethelisttext.each(function(e){
        $(seletethelisttext[e]).click(function(){
            $(this).parent().hide();
            $(".showthebtn").show();
            $(".preResetwin").show();

            $(".report-seletethelisttext").hide();
            var thistabobj=  $(this).attr("href");
            $(thistabobj).fadeIn();
            return false;
        });
    });
});

//当没有点击添加报告内容的按钮的列表点击
var reportthelistobj=$(".reportthelistobj");  //按钮列表
$(document).ready(function(){
    $(".report-seletethelisttext").hide();
    $(".report-seletethelisttext:first").show();
//       其他内容的显示
    $(".dayportobjone").show();
    $(".report-dataone").show();
    reportthelistobj.each(function(e){
        $(reportthelistobj[e]).click(function(){
            $(this).parent().hide();
            $(".showthebtn").show();
            $(".report-seletethelisttext").hide();
            var thistabobj=  $(this).attr("href");
            $(thistabobj).fadeIn();
            return false;
        });
    });
});
//点击重置层的取消按钮
   var cancelresetwin=$(".cancelresetwin");  //取消按钮
cancelresetwin.click(function(){
      $(".preResetwin").hide();
});



//点击报表里面的表格行弹出层

   var trlistclicktar=$(".trlistclicktar tr");  //tr行
trlistclicktar.each(function(e){
    $(this).click(function(){
           $(".ResourcesOutlook").show();
    });
});

//点击交换机和服务器进行定位
   var positiontocenter=$(".positiontocenter");  //点击交换机定位
   var positiontobuttom=$(".positiontobuttom");  //点击服务器定位

    positiontocenter.click(function(){
     $(".scolltopposition").animate({
         scrollTop:"10"
     },500);
});

positiontobuttom.click(function(){
    $(".scolltopposition").animate({
        scrollTop:"1320"
    },500);
});
//监听滚动事件
$(".scolltopposition").scroll(function(){
    var scolltoppositionscroll=parseInt($(".scolltopposition").scrollTop());
    if(scolltoppositionscroll>=9){
        positiontocenter.css({color:"red"});
        positiontobuttom.css({color:"#fff"});
    }
    if(scolltoppositionscroll>=1318){
        positiontobuttom.css({color:"red"});
        positiontocenter.css({color:"#fff"});
    }

});
/**

 *
 * Created with JetBrains WebStorm.
 * User: M。s
 * Date: 14-5-8
 * Time: 下午4:21
 * To change this template use File | Settings | File Templates.
 */
//                       业务管理模块--------------------js


$(function(){
    $(".clickgetcuret tr").each(function(e){
        $($(".clickgetcuret tr")[e]).click(function(){
            window.location.href="business-noinfo.html";
        });
    });

    // 图片放大缩小显示
    var b = $(".player ul>li").size();

    $("#icon_left").click(function(){
        $(".player ul>li").each(function(){
            var a = $(this).attr("class"),c = parseInt(a.charAt(1)) - 1;
            c == 0 && (c = b);
            $(this).removeClass(a).addClass("p" + c);
        });
    }),
        $("#icon_right").click(function(){
            $(".player ul>li").each(function(){
                var a = $(this).attr("class");
                c = parseInt(a.charAt(1)) + 1;
                c > b && (c = 1);
                $(this).removeClass(a).addClass("p" + c);
            });
        });
    $(".player ul>li.p1,.player ul>li.p2,.player ul>li.p3").live("click",function(){
        $("#icon_right").click();
    }),
        $(".player ul>li.p5,.player ul>li.p6,.player ul>li.p7").live("click",function(){
            $("#icon_left").click();
        });
//                $(".player ul>li.p4").live('click',function(){
//                    var url = $(this).find("a").attr("href");
//                    window.open(url);return false;
//                });
    // 自动滚动
//        setInterval(function(){
//            $("#icon_left").click();
//        }, 5000);




});


var openbesinesswin=$(".openbesinesswin");
var closebesinesswin=$(".closebesinesswin");
openbesinesswin.click(function(){
    $(".businessaddwin").show(500);
});
closebesinesswin.click(function(){
    $(".businessaddwin").hide(500);
});




/**
 * Created with JetBrains WebStorm.
 * User: M。s
 * Date: 14-5-8
 * Time: 下午4:21
 * To change this template use File | Settings | File Templates.
 */
//                       report--info----------------------js


    //  点击按钮进行切换


    $(function(){
        var $imgList = $('.bodyone');
        var $imgfocus = $('.threeloop');
        var $page = $('.img-channel > span');
        var n = 6;
        var focus_Width = $imgfocus.width();//分类长
        //向前运动

        $('.loopleft').click(function(){
            if (n ==3)
            {//在第一个面板继续向后时，跳转至最后一个面板
//            $imgList.animate({left: '-=' + (focus_Width*($imgfocus.length+1))}, 800);
                $imgList.animate({   left: '-=' + focus_Width*n},800);
                n=6;

                console.log(n);
            }
            else
            {
                $imgList.animate({left: '+=' + focus_Width}, 800);
                n--;
//            $('#right').show(200);
                console.log(n)
            }
            if(n==3){
                $('.loopleft').hide(200);
                $('.loopright').show(200);
            }
            $page.eq(n - 1).addClass('txt-weight').siblings().removeClass('txt-weight');
        });
        //向后运动
        $('.loopright').click(function(){
            console.log("ete")
            if (n == $imgfocus.length)
            {
                //在最后一个面板继续向前时，跳转至第一个面板
                $imgList.animate({left: '0px'}, 800);
                n = 3;
            }
            else
            {
                $imgList.animate({
                    left: '-=' + focus_Width}, 800);
                n++;
//            $('#right').show(200);
                console.log(n)
            }
            if(n==6){
                $('.loopright').hide(200);
                $('.loopleft').show(200);
            }
            $page.eq(n - 1).addClass('txt-weight').siblings().removeClass('txt-weight');


        })


    });



//点击设置图标弹出层

    var temp=$(".reportsettting");

    var windowobj=$(".reportsetwin");
    var bodywindow=$(".bodywindows");


//显示
    temp.click(function(){
        windowobj.show(500);
//        bodywindow.show(500);
        bodywindow.css({display:"block"});
    });

//影藏
//点击确定
    $(".submitobj").click(function(){
        windowobj.hide(700);
        bodywindow.hide(500);
    });
//点击关闭
    $(".resetobj").click(function(){
        windowobj.hide(700);
        bodywindow.hide(500);
    });

//点击关闭按钮关闭弹出层

    $(".closereportwin").click(function(){
        windowobj.hide(500);
        bodywindow.hide(500);
    });



$("#windowreport").ready(function(){
    $("#windowreport").hide();
})
    $("#getwindowreport").click(function(){
        $("#windowreport").show(500);
        bodywindow.show();
    });

//弹出窗口里面的滚动切换-------------------
    var tempwondw1=  $(".windowcontentpage1");
    var tempwondw2=  $(".windowcontentpage2");

    var leftpage=$(".smallpageleft");
    var roghtpge=$(".smallpageright");


    tempwondw1.ready(function(){
        tempwondw2.hide();
        bodywindow.hide();
    });

roghtpge.click(function(){
        tempwondw1.hide(700);
        tempwondw2.show(700);
    });

leftpage.click(function(){
        tempwondw1.show(700);
        tempwondw2.hide(700);
    });

//点击弹出层的关闭按钮
    $(".closewindowone").click(function(){
        $("#windowreport").hide(500);
        bodywindow.hide();
    });

//点击弹出层的确定和取消按钮
    $(".closewindow").click(function(){
        $("#windowreport").hide(500);
        bodywindow.hide();
    });

//下拉按钮的JS
    $(document).ready(function(){
        $(".select-body").click(function(event){
            event.stopPropagation();
            $(this).find(".option").toggle();
            $(this).parent().siblings().find(".option").hide();
        });
        $(document).click(function(event){
            var eo=$(event.target);
            if($(".select-body").is(":visible") && eo.attr("class")!="option" && !eo.parent(".option").length)
                $('.option').hide();
        });
        /*赋值给文本框*/
        $(".option").find("a").click(function(){
            $(this).css({color:"yellow"});
            $(!this).each(function(e){$($(this)[e]).css({color:"black"})});
            var value=$(this).text();
            $(this).parent().prev(".select-l").children().children().find("span").text(value);
//            $("#select_value").val(value);
//           $("#select_txt").text(value);
        });


    });

//三级下拉按钮的JS
$(document).ready(function(){
    $(".select-bodylist").click(function(event){
        event.stopPropagation();
        $(this).find(".optionlist").toggle();
        $(this).parent().siblings().find(".optionlist").hide();
    });
    $(document).click(function(event){
        var eo=$(event.target);
        if($(".select-bodylist").is(":visible") && eo.attr("class")!="optionlist" && !eo.parent(".optionlist").length)
            $('.optionlist').hide();
    });
    /*赋值给文本框*/
    $(".optionlist").find("a").click(function(){
        $(this).css({color:"yellow"});
        $(!this).each(function(e){$($(this)[e]).css({color:"black"})});
        var value=$(this).text();
        $(this).parent().prev(".select-l").children().children().find("span").text(value);
//        $("#select_value").val(value);
           $("#select_txt").text(value);
    });


});

$(".openMonitoringwin").click(function(){
    $(".Monitoringwin").show();
});
$(".closeMonitoringwin").click(function(){
    $(".Monitoringwin").hide();
});
//3级下拉列表按钮的JS选择
var menuids=["suckertree1"]; //Enter id(s) of SuckerTree UL menus, separated by commas
$(".suckerdiv li ul").ready(function(){
    $(".suckerdiv li ul").hide();
});
function buildsubmenus(){
    for (var i=0; i<menuids.length; i++){
        var ultags=document.getElementById(menuids[i]).getElementsByTagName("ul");
        for (var t=0; t<ultags.length; t++){
            ultags[t].parentNode.getElementsByTagName("a")[0].className="subfolderstyle"
            ultags[t].parentNode.onmouseover=function(){
                this.getElementsByTagName("ul")[0].style.display="block"
            }
            ultags[t].parentNode.onmouseout=function(){
                this.getElementsByTagName("ul")[0].style.display="none"
            }
        }
    }
}

if (window.addEventListener)
    window.addEventListener("load", buildsubmenus, false);
else if (window.attachEvent)
    window.attachEvent("onload", buildsubmenus);







/**
 * Created with JetBrains WebStorm.
 * User: M。s
 * Date: 14-5-13
 * Time: 下午3:32
 * To change this template use File | Settings | File Templates.
 */


//图片上下点击轮播JS

jQuery(function(){
    if (!$('#slidePic')[0])
        return;
    var i = 0, p = $('#slidePic ul'), pList = $('#slidePic ul li'), len = pList.length;
    var elePrev = $('#prev'), eleNext = $('#next');
//var firstClick = false;
    var w = 150, num = 3;
//        p.css('width',w*len);
    if (len <= num)
        eleNext.addClass('gray');
    function prev(){
        if (elePrev.hasClass('gray')) {
//alert('已经是第一张了');
            return;
        }
        p.animate({
            marginTop:-(--i) * w-30
        },500);
        if (i < len - num) {
            eleNext.removeClass('gray');
        }
        if (i == 0) {
            elePrev.addClass('gray');
        }
    }
    function next(){
        if (eleNext.hasClass('gray')) {
//alert('已经是最后一张了');
            return;
        }
//p.css('margin-left',-(++i) * w);
        p.animate({
            marginTop:-(++i) * w
        },500);
        if (i != 0) {
            elePrev.removeClass('gray');
        }
        if (i == len - num) {
            eleNext.addClass('gray');
        }
    }
    elePrev.bind('click',prev);
    eleNext.bind('click',next);
});


//资源管理页面




$(function(){
////两个按钮中只能选择一个按钮

    $("#buttoninfo").click(function(){
        $("#buttoninfo1").css({
            backgroundPosition:"0 0"
        });
        $("#buttoninfo").css({
            backgroundPosition:"1px -70px"
        });
    });
    $("#buttoninfo1").click(function(){
        $("#buttoninfo").css({
            backgroundPosition:"0 0"
        });

        $("#buttoninfo1").css({
            backgroundPosition:"1px -70px"
        });

    });

    var  resourceupdatewin=$(".resourceupdatewin");

    resourceupdatewin.ready(function(){
        resourceupdatewin.hide();
    });
    var  openresourcewin=$(".openresourcewin");//点击按钮弹出资源   设置层
    openresourcewin.click(function(){
        resourceupdatewin.slideDown();
    });
    //点击弹出层的关闭按钮关闭弹出
    $(".closewinresource").click(function(){
        resourceupdatewin.slideUp();
    });
//        //监控设置里面列表的点击切换效果  点击之后选中再点击取消

    var rray= $(".check-btn"); //得到所有的短信告警按钮
    //通过点击选中按钮
    rray.each(function(e){
        $(rray[e]).click(function(){
            console.log("ete")
            $(rray[e]).toggleClass("active");
        });
    });

//修改当前点击前面的文本内容

    var uodatethetext=$(".clicktheupdatetext");  //修改按钮
    var textthemark=0;

    uodatethetext.click(function(e){
        uodatethetext.toggleClass("uodatethetextok");
        $(".textfocuson").focus();
        if(textthemark%2==0){

            $(e.target).prev().text("");
            textthemark++;
        }else{

            $(e.target).prev().text("WINserv00_12");
            textthemark--;
        }

    });
//    资源管理主机弹出层进程下的表格点击列表
     var tablenewborderactive=$(".tablenewborderactive tr"); // 表格的tbody下的tr列表
    tablenewborderactive.each(function(e){
         $(tablenewborderactive[e]).click(function(){
//             $(".tablenewborderactive tr").removeClass("activetrlist");
            $(this).addClass("activetrlist");
               console.log("seye");
         });
    });
    //点击扫描按钮的时候弹出表格层
    var openfindtablecek=$(".openfindtablecek"); //扫描按钮
    var scanwinsour=$(".scanwinsour");  //扫描的弹出层
    openfindtablecek.click(function(){
        scanwinsour.show();
    });
    $(".yesbyscan").click(function(){
        scanwinsour.hide();
        $(".tablenewborderactive tr").removeClass("activetrlist");
    });




//蓝色按钮的一个选中状态
    var btnlistarry=$(".btnlistarry ul li"); //列表的外面div
    btnlistarry.each(function(e){
          $(btnlistarry[e]).click(function(){
              $(".btnlistarry ul li").removeClass("on");
              $(this).addClass("on");
          })
    });



//自定义志标组的弹出层
    var Customindicators=$(".Customindicators");

    var Presetaccountwin=$(".Presetaccountwin");//预置账户
    var resourcediscoverywin=$(".resourcediscoverywin");//资源发现
    var Batchfoundwin=$(".Batchfoundwin"); //批量发现

    $(document).ready(function(){
        resourcediscoverywin.hide();
        Batchfoundwin.hide();
    });
    $(".openCustomindicatorswin").click(function(){
        $(".zyfx").show();
        bodywindow.show();
    });
    $(".closezyfx").click(function(){
        $(".zyfx").hide();
        bodywindow.hide();
    });
    $(".account").each(function(e){
        $($(".account")[1]).css({backgroundPosition:"-81px -6px"})
        $($(".account")[2]).css({backgroundPosition:"-158px -6px"})
    });

    Customindicators.each(function(e){
//        $($(".accountshree label")[e]).hide();
//        $($(".accountshree label")[0]).show();
        $(Customindicators[0]).ready(function(){
            $($(".accountshree label")[0]).css({position:"relative",left:"15%",top:"13px"});
            $( $(".accountshree")[0]).css({height:"85px"});
            $($(".accounttwo")[0]).show();
        });

          $(Customindicators[0]).click(function(){
              $($(".accountshree label")[0]).css({position:"relative",left:"15%",top:"13px"});
//              $($(".accountshree label")[0]).show();
              $( $(".accountshree")[0]).css({height:"85px"});
              $($(".accounttwo")[0]).show();

              $( $(".accountshree")[1]).css({height:"72px"});
//            $($(".accountshree label")[1]).hide();
            $($(".accounttwo")[1]).hide();

              $( $(".accountshree")[2]).css({height:"72px"});
//            $($(".accountshree label")[2]).hide();
            $($(".accounttwo")[2]).hide();
              Presetaccountwin.show();
              resourcediscoverywin.hide();
              Batchfoundwin.hide();
          }) ;


        $(Customindicators[1]).click(function(){
            $($(".accountshree label")[1]).css({position:"relative",left:"12%",top:"13px"});
            $( $(".accountshree")[1]).css({height:"85px"});
            $($(".accounttwo")[1]).show();
//            $($(".accountshree label")[1]).show();

            $( $(".accountshree")[0]).css({height:"72px"});
//            $($(".accountshree label")[0]).hide();
            $($(".accounttwo")[0]).hide();

            $( $(".accountshree")[2]).css({height:"72px"});
//            $($(".accountshree label")[2]).hide();
            $($(".accounttwo")[2]).hide();
            Presetaccountwin.hide();
            resourcediscoverywin.show();
            Batchfoundwin.hide();
        }) ;
        $(Customindicators[2]).click(function(){
            $($(".accountshree label")[2]).css({position:"relative",left:"15%",top:"13px"});
            $( $(".accountshree")[2]).css({height:"85px"});
            $($(".accounttwo")[2]).show();
//            $($(".accountshree label")[2]).show();

            $( $(".accountshree")[1]).css({height:"72px"});
//            $($(".accountshree label")[1]).hide();
            $($(".accounttwo")[1]).hide();

            $( $(".accountshree")[0]).css({height:"72px"});
//            $($(".accountshree label")[0]).hide();
            $($(".accounttwo")[0]).hide();
            Presetaccountwin.hide();
            resourcediscoverywin.hide();
            Batchfoundwin.show();
        }) ;
    });
// 点击资源发现里面的表格里的按钮
    var opentbodypartwin=$(".opentbodypartwin");//得到弹出表格的点击按钮
    var tbodypartwinuserRes=$(".tbodypartwinuserRes");  //得到表额里面要弹出层
    var tbodypartwinuser=$(".tbodypartwinuser");//发现信息点击用户按钮的弹出层

    opentbodypartwin.bind("click",function(){
        tbodypartwinuserRes.show();
    });

    //点击弹出表格的关闭按钮
    $(".closetbodypartwin").bind("click",function(){
        tbodypartwinuserRes.hide();
        tbodypartwinuser.hide();
    });
   var selecttbodypartwin=$(".selecttbodypartwin");  //发现信息里面的用户按钮
    selecttbodypartwin.click(function(){
        tbodypartwinuser.show();
    });



    var Spinners=$(".Spinnerswitch"); //资源发现的手风琴切换
    var premark;
    Spinners.each(function(e){
        $(Spinners[e]).click(function(){
            if (premark != null && premark !=  $(Spinners[e])) $(premark).find("span").last().removeClass("Spinnerup");
            if (premark != null && premark !=  $(Spinners[e])) $(premark).find("span").last().addClass("Spinnerdown");
            premark =  $(Spinners[e]);
            $(Spinners[e]).find("span").last().addClass("Spinnerup");
        });
    });
   var openMonitoringwin=$(".openMonitoringwin");  //加入监控按钮
  var opentheresults=$(".opentheresult");  //发现按钮
 var opentheresultno=$(".opentheresultno");  //发现失败按钮
    opentheresultno.click(function(){
        opentheresults.parent().parent().slideUp();
        opentheresults.parent().parent().prev().find("span").last().removeClass("Spinnerup");
        opentheresults.parent().parent().prev().find("span").last().addClass("Spinnerdown");
        opentheresults.parent().parent().prev().prev().slideUp();
        opentheresults.parent().parent().next().next().slideDown();
        $(".okthewin").show();
        $(".nothewin").hide();
        openMonitoringwin.hide();
        tbodypartwinuser.hide();
        openMonitoringwin.parent().css({left:"83%"});
    });
    opentheresults.click(function(){
        opentheresults.parent().parent().slideUp();
        opentheresults.parent().parent().prev().find("span").last().removeClass("Spinnerup");
        opentheresults.parent().parent().prev().find("span").last().addClass("Spinnerdown");
        opentheresults.parent().parent().prev().prev().slideUp();
        opentheresults.parent().parent().next().next().slideDown();
        $(".okthewin").hide();
        $(".nothewin").show();
        openMonitoringwin.show();
        tbodypartwinuser.hide();
        openMonitoringwin.parent().css({left:"75%"});
    });
    //点击列表的时候出现遍历进行三个弹出层的选择
    var ziyuanallwin=$(".ziyuanallwin");  //资源总览弹出层
    var internetallwin=$(".internetallwin");  //网络设备的弹出层
    var opentheSwitchwin=$(".opentheSwitchwin"); // 交换机的按钮
    var Switchallwin=$(".Switchallwin");//交换机的弹出层

    var alltbody=$(".alltbody tr");  //tr列表
    $(".opentheziyuanwin").click(function(){
//        ziyuanallwin.show();
         window.open("resource-apply.html");
    });

     var tablemainbg=$(".tablemainbg th");  //表格的表头列的点击
    var temptable=0;
    tablemainbg.each(function(e){
        $(tablemainbg[e]).find(".thislistsort").ready(function(){
            $(tablemainbg[e]).find(".thislistsort").hide();
        });
        $(tablemainbg[e]).bind("click",function(){
            $(tablemainbg[e]).find(".thislistsort").show();
            $(tablemainbg[e]).find(".thislistsort").toggleClass("thislistsortclick");
        });


    })  ;
//点击表头列的下拉按钮是弹出选项列表
     var openlisttable=$(".openlisttable"); //表头的下拉按钮
//    openlisttable.each(function(e){
//        $(openlisttable[e]).click(function(){
//
//        });
//    });

//    点击主机里面的告警列表关闭当前上面的所有内容
    $(".tablelistobjwin2").ready(function(){
        $(".tablelistobjwin2").hide();
    })
    var clickthelisttable=$(".clickthelisttable");  //告警列表按钮
    clickthelisttable.click(function(){
       $(".tablelistobjwin2").show();

    });
    $(".closethiswinobj").click(function(){
        $(".tablelistobjwin2").hide();
    });



   $(".closeallwin").click(function(){
//       ziyuanallwin.hide();
//       internetallwin.hide();
//       Switchallwin.hide();
        window.close();
       $(".ResourcesOutlook").hide();
   });
    var Discoverytowin=$(".Discoverytowin");
    Discoverytowin.click(function(){
         $(".succeedwin").show();
    });
   var internetopenwin=$(".internetopenwin");  //网络类型的行
    internetopenwin.click(function(){
//        internetallwin.show();
        window.open("resource-use.html");
    });

    opentheSwitchwin.click(function(){
//        Switchallwin.show();
        window.open("resource-applyserver.html");

    });


 //TAB标签的最全切换方法
//资源总览页的三个层的遍历
//    var resourssthree=$(".resours-modelall");
//    resourssthree.each(function(){
//          $(resourssthree[e])
//    });

    var clickobjtarget=$(".clickobjtarget");  //按钮列表
   $(document).ready(function(){
       $(".resours-modelall").hide();
      $(".resours-modelall:first").show();
//       其他内容的显示
       $(".dayportobjone").show();
       $(".report-dataone").show();
       clickobjtarget.each(function(e){
           $(clickobjtarget[e]).click(function(){
               $(".clickobjtarget").removeClass("on");
               $(this).addClass("on");
//               $(this).checked();
//                $(this).attr({checked():"checked"});
               $(".resours-modelall").hide();
               var thistabobj=  $(this).attr("href");
               $(thistabobj).fadeIn();
               return false;
           });
       });
   });

    var clickinternettarget=$(".clickinternettarget");  //按钮列表
    $(document).ready(function(){
        $(".resours-internetmodelall").hide();
        $(".resours-internetmodelall:first").show();
        clickinternettarget.each(function(e){
            $(clickinternettarget[e]).click(function(){
                $(".clickinternettarget").removeClass("on");
                $(this).addClass("on");
                $(".resours-internetmodelall").hide();
                var thistabobj=  $(this).attr("href");
                $(thistabobj).fadeIn();
                return false;
            });
        });
    });

    var clickSwitchtarget=$(".clickSwitchtarget");  //按钮列表
    $(document).ready(function(){
        $(".resours-Switchmodelall").hide();
        $(".resours-Switchmodelall:first").show();
        clickSwitchtarget.each(function(e){
            $(clickSwitchtarget[e]).click(function(){
                $(".clickSwitchtarget").removeClass("on");
                $(this).addClass("on");
                $(".resours-Switchmodelall").hide();
                var thistabobj=  $(this).attr("href");
                $(thistabobj).fadeIn();
                return false;
            });
        });
    });

//点击删除按钮弹出层

    var deleteobjwindow=$(".deleteobjwindow");  //删除的弹出层
    var siveobjwindow=$(".siveobjwindow");//保存的弹出层

    //点击删除按钮
    $(".opendeletewin").click(function(){
        deleteobjwindow.show();
        setInterval(deletewinclose,1500);
    });
    //点击保存按钮出现保存弹出层
    var sivebtnobj=$(".sivebtnobj");
    sivebtnobj.click(function(){
        siveobjwindow.show();
        setInterval(sivewinclose,1500);
    });
    function sivewinclose(){
             siveobjwindow.hide();
    }
    function deletewinclose(){
          deleteobjwindow.hide();
    }
//    $(".losethedeletewin").click(function(){
//        deleteobjwindow.hide();
//        siveobjwindow.hide();
//    });




//点击资源管理弹出层下面的NAV导航

     var onclicktheleft=$(".clicktheleft");
     var activenum=0;
    onclicktheleft.click(function(){
        if(activenum%2==0){
            $(".modelnavlist").animate({
                width:"7%",
                left:"-4px"
            },300);
            $(".modelnavlist").addClass("modelnavlisttwo");
            activenum++;
        }else{
            $(".modelnavlist").animate({
                width:"57%",
                left:"-7px"
            },500);
            $(".modelnavlist").removeClass("modelnavlisttwo");
            activenum--;
        }
        onclicktheleft.find("a").toggleClass("right");
        onclicktheleft.prev().toggle(300);
    });
});
































