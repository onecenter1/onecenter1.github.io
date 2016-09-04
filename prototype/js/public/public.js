/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-5-21
 * Time: 上午11:35
 * To change this template use File | Settings | File Templates.
 */




//流量分析的左边导航手风琴效果
var foxfrolistmain= $(".foxfrolist-main");  //获得二级列表
var foxfrolisttop=$(".foxfrolist-top");   //获得二级列表点击行
var foxfrolistcontent=$(".foxfrolist-content");  //获得二级列表内容
var foxfrolistico=$(".foxfrolistico");   //得到下拉列表的图标


foxfrolisttop.each(function(e){
    $(foxfrolisttop[e]).ready(function(){
        $(foxfrolisttop[e]).next().slideUp();
    });
    $(foxfrolisttop[e]).click(function(){
        $(foxfrolisttop[e]).next().slideToggle();
        $(foxfrolisttop[e]).find(".foxfrolistico").toggleClass("l-arrow-down");
//        $(this).find(".foxfrolistico").addClass("l-arrow-down");

    });
});

var thirdnav=$(".h-third-nav")
thirdnav.each(function(e){
      $(thirdnav[e]).click(function(){
          console.log($(thirdnav[e]))
          $(thirdnav[e]).addClass(".hoverclick");
//          $(this).addClass(".hover");
      });
});



var warningbuttontble=$("#warningbuttontble");
warningbuttontble.ready(function(){


    $(".peizhibeifnewin").hide();
    $("#reourcedeletewin").hide();
    $(".arrow-down").animate({
        marginTop:"-19px"
    });
    pagewindow1.hide();
    pagewindow2.hide();
    pagewindow3.hide();
    pagewindow4.hide();
    pagewindow5.hide();
    backuplog.hide();


});






$(".arrow-down").click(function(){
    $(".arrow-down").toggleClass("arrow-up");
    console.log("setre6")
});
var i=0;
$(".arrow-down").click(function(){
    if(i%2==0){
        $(".arrow-down").animate({
            marginTop:"-16px"
        });
        warningbuttontble.animate({
            height:"206px",
            marginTop:"-206px"
        })
        i++;
    }else{

        warningbuttontble.animate({
            height:"15px",
            marginTop:"0px"
        });
        $(".arrow-down").animate({
            marginTop:"-16px"
        });
        i--;
    }

});


var windowpagelog=$(".windowpagelog");  //日志告警页面
var windowpage1=$(".windowspage1");     //第一块页面

windowpagelog.ready(function(){
    windowpagelog.hide();
});


/**
 * Created with JetBrains WebStorm.
 * User: M。s
 * Date: 14-5-8
 * Time: 下午4:18
 * To change this template use File | Settings | File Templates.
 */


//系统管理
var bodywindow=$(".bodywindows");

$(function(){

    //系统管理的添加用户按钮弹出层
    $("#adduserwin").ready(function(){
        $("#adduserwin").hide();  //添加用户弹出层
        $(".reourcedeletewin").hide();  //删除层
    });

    var getadduserwin= $(".getadduserwin");
    getadduserwin.click(function(){
        $("#adduserwin").show(500);  //添加用户弹出层
        bodywindow.show();
    });
//   点击添加用户的取消按钮
    $(".resetwin").click(function(){
        $("#adduserwin").hide(500);
        bodywindow.hide();
    });
   $(".closewindowone").click(function(){
       $("#adduserwin").hide(500);
       bodywindow.hide();
   });
    //点击删除按钮
    $(".usergetwindel").click(function(){
        $("#reourcedeletewin").show(500);  //删除层
        bodywindow.show();

    });
   //点击关闭按钮
    $(".closeuserdelwin").click(function(){
        $("#reourcedeletewin").hide(500);  //删除层
        bodywindow.hide();
    });
    //点击取消按钮
    $(".windowhide2_no").click(function(){
        $("#reourcedeletewin").hide(500);  //删除层
        bodywindow.hide();
    });


});

/**
 * Created with JetBrains WebStorm.
 * User: M。s
 * Date: 14-5-12
 * Time: 下午2:11
 * To change this template use File | Settings | File Templates.
 */


//------------------------------------backup页面的JS----------------------------------

var windowtanchu= $(".peizhibeifnewin");  //得到弹出层
windowtanchu.ready(function(){
    windowtanchu.hide();

});
//点击备份添加------
$("#getwindow").click(function(){
    windowtanchu.show(500);
    bodywindow.show();
});

$(".bodywindows").ready(function(){
    bodywindow.hide();
});

$(".btn-m").click(function(){
    $("#winodwsobj").hide(500);
});

var pagewindow1=$("#pagewindow1");
var pagewindow2=$("#pagewinow2");
var pagewindow3=$("#pagewindow3");
var pagewindow4=$("#windowpage4");
var pagewindow5=$("#windowpage5");
var backuplog=$("#windowbackuplog");


//点击列表

var trobj=$("#gettrclick tr");
//点击第一个页面的TR列表
trobj.each(function(e){
    $(trobj[e]).click(function(){
        pagewindow1.show();
        bodywindow.show();
    });
});


//点击第一个弹出层的关闭按钮关闭弹出层

$(".closewindowone").click(function(){
    pagewindow1.hide();
    bodywindow.hide();

});
//点击关闭按钮
$(".pop-close-ico").click(function(){
    bodywindow.hide();
    $("#reourcedeletewin").hide(500);
    backuplog.hide();
    pagewindow2.hide();
    pagewindow3.hide();
    pagewindow4.hide();
    pagewindow5.hide();
    windowtanchu.hide(500);

});

$(".closewindow2").click(function(){
    pagewindow1.show();

});
$(".closewindow3").click(function(){
    pagewindow1.show();

});
$(".closewindow4").click(function(){
    pagewindow1.show();

});
$(".closewindow5").click(function(){
    pagewindow1.show();

});
$(".closewindow6").click(function(){
    pagewindow1.show();

});


var windowtrclic=$("#windowliobj tr");  //得到弹出层的li点击列表
var getinfo=$("#getinfo");  //确定按钮



//点击tr复选框被选中状态

var mark=0;
//点击第一个弹出层的TRX选中复选框
windowtrclic.each(function(e){
    var tempchecked= $(windowtrclic[e]).children().children("input").attr("checked");
    $(windowtrclic[e]).click(function(){
        if(mark%2==0){
            if(tempchecked=="checked"){
                $(windowtrclic[e]).children().children("input").attr({checked:false});
            }else{
                $(windowtrclic[e]).children().children("input").attr({checked:true});
            }
            mark++;
        }else{
            if(tempchecked!="checked"){
                $(windowtrclic[e]).children().children("input").attr({checked:false});
            }else{
                $(windowtrclic[e]).children().children("input").attr({checked:true});
            }

            mark--;
        }
    });
})
//点击第一个弹出层的备份日志按钮
$("#backuplog").click(function(){
    backuplog.show();


});
//点击备份按钮的取消按钮
$("#closebackuplog").click(function(){
    backuplog.hide();
    pagewindow1.show();

});



//点击第一个弹出层的确定按钮
getinfo.click(function(){
    pagewindow2.show();
    pagewindow1.hide();
});
$("#closeindow2").click(function(){
    pagewindow1.show();
});
//点击比较按钮
$("#closewindow3").click(function(){
    pagewindow1.show();
});
var chekedbox1=$("#windowliobj tr td input");
$("#getinfoopenwindow").click(function(){
    var i=0;
    var j=0;
    function test(){
        j=0;
        for(i=0;i<chekedbox1.length;i++){
            if(chekedbox1[i].checked==true){
                j++;
            }

            if(j>2){
                alert("最多只能选择两个！")
                return false;
            }
        }

        pagewindow1.hide();
        pagewindow3.show();
    }
    test();

});
//点击子资源和主资源

var inputradio=$(".topmain input");//得到单选按钮的组
var inputradiolen=inputradio.length;
console.log(inputradio);


$("#zhuziyuan").click(function(){
    $(".twopage").hide();
    $(".onepage").show();
});

$("#ziziyuan").click(function(){
    $(".twopage").show();
    $(".onepage").hide();
});
var tempobjinfo=document.getElementsByName("zhuziyuan");
function getonepage(){
    if(tempobjinfo[0].checked==true){
        $(".twopage").hide();
        $(".onepage").show();
    }

}

function gettwopage(){
    if(tempobjinfo[1].checked==true){
        $(".twopage").show();
        $(".onepage").hide();
    }

}


inputradio.each(function(e){
    $(inputradio[e]).click(function(){

        console.log("agagag");
        if( $(inputradio[0]).checked==true){
            console.log("YES");
        }else{
            console.log("NO");
        }
        if( $(inputradio[1]).checked==true){
            console.log("YES");
        }else{
            console.log("NO");
        }


    });

});

//点击发现设备按钮出现弹出层

$(".faxianshebei").click(function(){
    pagewindow4.show(200);
    console.log("yrdy")

});
//点击发现设备按钮的弹出层取消按钮
$("#colsewindow4").click(function(){
    pagewindow4.hide();
});
//默认单一发现的列表为影藏状态
$(".select_boundtree").ready(function(){
    $(".select_boundtree").hide();
});
var tempobj=0;
$("#showliinfo").click(function(){
    if(tempobj%2==0){
        $(".select_boundtree").show();
        tempobj++;
    }else{
        $(".select_boundtree").hide();
        tempobj--;
    }

});
$("#window5show").click(function(){
    pagewindow5.show();
});

$("#closewindow5").click(function(){
    pagewindow5.hide();
    $(".select_boundtree").hide();
});




/**
 * Created with JetBrains WebStorm.
 * User: M.s
 * Date: 14-5-15
 * Time: 下午2:36
 * To change this template use File | Settings | File Templates.
 */
//--------------------------------------------------------------trafficNnalysis-info----------------

var page1=$(".page1");
var page2=$(".pagetwo");
var page3=$(".page3");
var page4=$(".page4");
var page5=$(".page5");
var page6=$(".page6");


page2.ready(function(){

    page2.hide();
    page4.hide();
    page6.hide();

});

$(".getovertrun1").click(function(){
    page1.toggleClass("clickpage1");
    page2.toggleClass("clickpage2");


});

$(".getovertrunico2").click(function(){
    page1.toggleClass("clickpage1");
    page2.toggleClass("clickpage2");
});
$(".getovertrun2").click(function(){
    page3.hide();
    page4.show();
});

$(".getovertrunico3").click(function(){
    page3.show();
    page4.hide();
});
$(".getovertrun3").click(function(){
    page5.hide();
    page6.show();
});
$(".getovertrunico4").click(function(){
    page5.show();
    page6.hide();
});





/**
 * Created with JetBrains WebStorm.
 * User: M。s
 * Date: 14-5-8
 * Time: 下午4:18
 * To change this template use File | Settings | File Templates.
 */

//资源管理页面

    //表格单数行和双数行的控制
   var  alltbody=$(".alltbody tr");
   var alltbodynum=true;
   var tabletrclick=$(".tabletrclick");
  var forwordclass=$(".classeach").find(".forwordclass"); //得到转发按钮
   var forwordclassadd=$(".forwordclass"); //得到转发按钮


var pre;//搜索原来的节点，假设原来的背景颜色为白色，点击变为#e6f0fc


forwordclass.each(function(e){
    $(forwordclass[e]).mousemove(function(){
        $(forwordclass[e]).addClass("forwordclassmouse");
        $($(".classeach").find(".forwordclass").find(".rightarrows")[e]).addClass("rightarrowsbor");

//        $(forwordclass[e]).find("rightarrows").addClass("rightarrowsbor");
    });
    $(forwordclass[e]).mouseout(function(){
        $(forwordclass[e]).removeClass("forwordclassmouse");
        $($(".classeach").find(".forwordclass").find(".rightarrows")[e]).removeClass("rightarrowsbor");

    });

    });

forwordclassadd.each(function(e){
    $(forwordclassadd[e]).mousemove(function(){
        $(forwordclassadd[e]).addClass("forwordclassmouse");
        $($(".rightarrows")[e]).addClass("rightarrowsbor");

//        $(forwordclass[e]).find("rightarrows").addClass("rightarrowsbor");
    });
    $(forwordclassadd[e]).mouseout(function(){
        $(forwordclassadd[e]).removeClass("forwordclassmouse");
        $($(".rightarrows")[e]).removeClass("rightarrowsbor");

    });

});
   for(var i=0;i<alltbody.length;i++){
        if(i%2==1){
            $(alltbody[i]).hide();

        }
       console.log(alltbody);
   }
    var Smsalert=$(".Smsalerts");  //短信告警按钮
   var Emailalert=$(".Emailalerts");// 邮件告警按钮
    var changewinbtn=$(".changewinbtn");  //列表里面的告警按钮

tabletrclick.each(function(e){

    $(tabletrclick[e]).click(function(){
        var len= $(tabletrclick[e]).find("td").find(".changewinbtn").length;
        console.log(len);
        $(tabletrclick[e]).addClass("tabletrclickobj");
        if (pre != null && pre !=  $(tabletrclick[e])) $(pre).removeClass("tabletrclickobj");
        if (pre != null && pre !=  $(tabletrclick[e])) $(pre).removeClass("tabletrclickbg");
        if (pre != null && pre !=  $(tabletrclick[e])) $(pre).find("td").find(".ico-unfold").removeClass("ico-shrinkage");
        if (pre != null && pre !=  $(tabletrclick[e])) $(pre).removeClass("concealtrbg");

        pre =  $(tabletrclick[e]);
        if(len==1){
            Smsalert.addClass("ico-s-phone");
            Emailalert.removeClass("ico-s-email");
            console.log("得到1");
        }else{
            Smsalert.addClass("ico-s-phone");
            Emailalert.addClass("ico-s-email");
            console.log("得到2");
        }
        $(tabletrclick[e]).addClass("tabletrclickbg");
        $(tabletrclick[e]).find("td").find(".ico-unfold").addClass("ico-shrinkage");
            $(tabletrclick[e]).siblings(".concealtr").hide();
            $(tabletrclick[e]).next().toggle();

        $(tabletrclick[e]).next().addClass("concealtrbg");

    });
});

$(function(){

    var chushitext=$("#resourcetopmenuul .digit");
    var tempdelete=$(".updategetwin");
    var tempbuttomdelete=$(".deletegetwin");
    var cishu=0;
    //    点击按钮出现两个小按钮--------------------------
    var buttom=  $(".arrowdown");

    buttom.click(function(){
        if(cishu%2==0){
            tempdelete.css({display:"block"});
            tempbuttomdelete.css({display:"block"});
            $(".datainfo").animate({
                opacity:0,
                width:"0px"
            },50);
            cishu++;
        }else{
            tempdelete.css({display:"none"});
            tempbuttomdelete.css({display:"none"});
            $(".datainfo").animate({
                opacity:1,
                width:"37px"
            },50);
            cishu--;
        }
    });
    //    点击删除按钮弹出删除对话框
    tempdelete.click(function(){
        $("#reourcedeletewin").show(500);
//        $(".bodywindows").show();
    });
    //    点击删除对话框的取消按钮关闭
    $(".windowhide2_no").click(function(){
        $("#reourcedeletewin").hide(500);
        $(".bodywindows").hide();
    });



});


//在资源管理页面点击添加按钮新建一个LI

var newgroup= $(".arrowadd");  //添加按钮

//得到li列表
newgroup.click(function(){
    $(".bodywindows").css({
        display:'block'
    });
});

<!--
function MM_effectAppearFade(targetElement, duration, from, to, toggle)
{
    Spry.Effect.DoFade(targetElement, {duration: duration, from: from, to: to, toggle: toggle});
}
function MM_showHideLayers() { //v9.0
    var i,p,v,obj,args=MM_showHideLayers.arguments;
    for (i=0; i<(args.length-2); i+=3)
        with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
            if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
            obj.visibility=v; }
}
//-->




$("#winodwsobj").ready(function(){


        $("#winodwsobj").hide();
        $("#page1").hide();

        $("#windowhide2").hide();    //第二个弹出层
        $("#resourceupdatewin").hide();
        $(".bodywindows").css({
            display:'none'
        });
    });

    var accordingnum=0;
//    var according=$(".accordion-main .accordion-list");
//    according.each(function(e){
//        $(according[e]).click(function(){
//            $(according[e]).next().slideToggle();
//        });
//    });

    $(".content_nav ul li").each(function(e){
        $($(".content_nav ul li")[1]).click(function(){
            $($(".content_nav ul li")[1]).css({
                backgroundImage: "url(../../images/comm/window/windowsnav.png)"
            });
            $($(".content_nav ul li")[0]).css({
                backgroundColor:"#181b1f !important"
            });
            $("#content_table").hide();
        });
        $($(".content_nav ul li")[0]).click(function(){
            $("#content_table").show();
        });

    });



//
//$(function(){
//
//
//
//
//
//
//



//
////点击Pagewindows2，监控设置2  的时候切换窗口
//    var windowtext=$("#jiankongpage2");  //弹出层的内容
//
//    var lefttubiao=$(".left");   //第一个背景的左边
//    var rifhttubio=$(".right");   //第一个背景的右边
//
//    var lefttubiao1=$(".left1");   //第二个背景的左边
//    var rifhttubio2=$(".right2");   //第二个背景的右边
//
//    var bgclass=$(".button1");
//    var bgclass2=$(".button2");
//    $("#pagewindow2btn").click(function(){
//        bgclass2.addClass("on");
//        bgclass.removeClass("on");
//
//
//        $("#jiankongpage2").hide(200);   //报警设置页面
//        console.log($("#pagewindow2"));
////    点击第二个按钮的第二个样式
//        $("#pagewindow2").css({
//            backgroundPosition:"left -76px"
//        });
//        lefttubiao1.css({
//            backgroundPosition:"left 0"
//        });
//        rifhttubio2.css({
//            backgroundPosition:"right -38px"
//        });
//// 第一个按钮的样式
//        lefttubiao.css({
//            backgroundPosition:"0 -114px"
//        });
//        rifhttubio.css({
//            backgroundPosition:"right -152px"
//        })
//        $("#pagewindow1").css({
//            backgroundPosition:"0 -190px"
//        });
//
//
//    });



//
//

//点击按钮进行切换
    var tempa= $(".window5left ul li a");

    tempa.each(function(e){
        $(tempa[e]).click(function(){
            $(tempa[e]).toggleClass("click");
        });

    });

//弹出窗口里面的滚动切换-------------------
    var tempwondw1=  $(".windowcontentpage1");
    var tempwondw2=  $(".windowcontentpage2");
//    资源管理的弹出层滑动窗口
   var resurceleftpage=$(".resurceleftpage");
    var resurcerightpage=$(".resurcerightpage");
    tempwondw2.ready(function(){
        tempwondw2.hide();
    });
    resurceleftpage.click(function(){
        tempwondw1.hide(700);
        tempwondw2.show(700);
    });
    resurcerightpage.click(function(){
        tempwondw1.show(700);
        tempwondw2.hide(700);
    });
    //    得到左右两个按钮
    var leftpage= $(".smallpageleftone")
    var roghtpge=$(".smallpagerighttwo");
    tempwondw2.ready(function(){
        tempwondw2.hide();
    });
roghtpge.click(function(){
        tempwondwpage1.hide(700);
        tempwondwpage2.show(700);
    });
leftpage.click(function(){
        tempwondwpage1.show(700);
        tempwondwpage2.hide(700);
    });
    var temppagetopone=$(".addtextemail");
    var temppagetoptwo=$(".addtexttooemail");


    var tempwondwpage1=  $(".addtext");
    var tempwondwpage2=  $(".addtexttoo");
    var leftpageone=$(".smallpageleftoneobj");
    var rightpagetwo=$(".smallpagerighttwoobj");
rightpagetwo.click(function(){
        temppagetopone.hide(700);
        temppagetoptwo.show(700);
    });
leftpageone.click(function(){
        temppagetopone.show(700);
        temppagetoptwo.hide(700);
    });

////   告警管理里面的弹出

//    --------------------------------添加手机号码方法
    //   点击添加按钮将input的信息添加到moddle列表里面
    var addinputtomiddlebuttom=$(".addinputtomiddle");  //得到点击添加input按钮
    var addtexttomiddletext=$(".addtexttomiddle");   //得到input的对象
    var addtext=$(".addtext");
    var valall="";
    var deletecurrent=$(".deletecurrent");
    var receiverall=$(".receiver");

//告警管理的弹出层短信和邮件按钮的切换





    //     移上接
    // 收人列表对象显示一个关闭按钮
    deletecurrent.ready(function(){
        deletecurrent.hide();

    });
    receiverall.each(function(e){

//        $(receiverall[e]).find("a").hide();
        $(receiverall[e]).mousemove(function(){
            $(receiverall[e]).find("delclickjieshouren").css({opacity:"show"});
        });
        $(receiverall[e]).mouseout(function(){
            $(receiverall[e]).find("delclickjieshouren").css({opacity:"hide"});
        });
        $(receiverall[e]).find("delclickjieshouren").bind("click",function(){
            $(receiverall[e]).remove();
        })
    });

    addinputtomiddlebuttom.live("click",function(){
        console.log(addtexttomiddletext.val());
        valall="<div class='forwordclass receiver'><span class='forwordtextcls'>"+addtexttomiddletext.val()+"</span><a class='rightarrows'></a>" +
            "<a class='delclickjieshouren'></a></div>";
           addtext.prepend(valall);
          var objtemp=addtext.find("div").length;
          console.log(leftpage)

        if(objtemp>8){
            $(".addtexttoo").append(valall);
            $(".smallpageleftone").show();
            $(".smallpagerighttwo").show();
        }
        $(".delclickjieshouren").click(function(e){
            $(e.target).parent().remove();
        });

    });
//
////             ------------------------------添加邮件转发地址方法
//    //   点击添加按钮将input的信息添 加到moddle列表里面
    var addinputtomiddlebuttomemail=$(".addinputtoemail");  //得到点击添加input按钮
    var addtexttomiddletextemail=$(".addtexttoemail");   //得到input的对象
    var addtextemail=$(".addtextemail");
    var valallemail="";
    var deletecurrent=$(".deletecurrent");
    var receiverall=$(".receiver");

    //     移上接收人列表对象显示一个关闭按钮
    deletecurrent.ready(function(){
        deletecurrent.hide();
    });
    receiverall.each(function(e){

//        $(receiverall[e]).find("a").hide();
        $(receiverall[e]).mousemove(function(){
            $(receiverall[e]).find("delclickjieshouren").css({opacity:"show"});
        });
        $(receiverall[e]).mouseout(function(){
            $(receiverall[e]).find("delclickjieshouren").css({opacity:"hide"});
        });
        $(receiverall[e]).find("delclickjieshouren").bind("click",function(){
            $(receiverall[e]).remove();
        });
    });
    addinputtomiddlebuttomemail.click(function(){
        console.log(addtexttomiddletextemail.val());
        valallemail="<div class='forwordclass receiver'><span class='forwordtextcls'>"+addtexttomiddletextemail.val()+"</span><a class='rightarrows'></a>" +
            "<a class='delclickjieshouren'></a></div>";
        addtextemail.prepend(valallemail);
        var objtempemail=addtextemail.find("div").length;
        console.log(objtempemail)
        if(objtempemail>8){
            $(".addtexttooemail").append(valallemail);
            $(".smallpageleftoneobj").show();
            $(".smallpagerighttwoobj").show();
        }
        $(".delclickjieshouren").click(function(e){
            $(e.target).parent().remove();
        });
    });
//
//
    var buttonforword=$(".buttonforword");
    var forword=$(".forword");
    var closeforword=$(".closeforword");
    forword.ready(function(){
        forword.hide();
    });
    buttonforword.click(function(){
        forword.slideDown();
    });
    closeforword.click(function(){
        forword.slideUp();
    });

////点击向下显示一个列表
//
    var libiao=$(".select_boundtree");
    var temp=0;
    libiao.ready(function(){
        libiao.hide();
    });
    $("#getlibiao").click(function(){
        if(temp%2==0){
            libiao.slideDown(200);
            temp++;
            $("#getlibiao a").css({
                backgroundPosition:"0 -38px"
            });
        }else{
            libiao.slideUp(200);
            $("#getlibiao a").css({
                backgroundPosition:"0 -19px"
            });
            temp--;
        }

    });
//
//

//
//
//
//
//
////实现滚动效果     Start------------
    var doc = document;
    var _wheelData = -1;
    var mainBox = doc.getElementById('mainBox');
    function bind(obj, type, handler) {
        var node = typeof obj == "string" ? $(obj) : obj;
        if (node.addEventListener) {
            node.addEventListener(type, handler, false);
        } else if (node.attachEvent) {
            node.attachEvent('on' + type, handler);
        } else {
            node['on' + type] = handler;
        }
    }
    function mouseWheel(obj, handler) {
        var node = typeof obj == "string" ? $(obj) : obj;
        bind(node, 'mousewheel', function(event) {
            var data = -getWheelData(event);
            handler(data);
            if (document.all) {
                window.event.returnValue = false;
            } else {
                event.preventDefault();
            }

        });
        //火狐
        bind(node, 'DOMMouseScroll', function(event) {
            var data = getWheelData(event);
            handler(data);
            event.preventDefault();
        });
        function getWheelData(event) {
            var e = event || window.event;
            return e.wheelDelta ? e.wheelDelta : e.detail * 40;
        }
    }

    function addScroll() {
        this.init.apply(this, arguments);
    }
    addScroll.prototype = {
        init : function(mainBox, contentBox, className) {
            var mainBox = doc.getElementById(mainBox);
            var contentBox = doc.getElementById(contentBox);
            var scrollDiv = this._createScroll(mainBox, className);
            this._resizeScorll(scrollDiv, mainBox, contentBox);
            this._tragScroll(scrollDiv, mainBox, contentBox);
            this._wheelChange(scrollDiv, mainBox, contentBox);
            this._clickScroll(scrollDiv, mainBox, contentBox);
        },
        //创建滚动条
        _createScroll : function(mainBox, className) {
            var _scrollBox = doc.createElement('div')
            var _scroll = doc.createElement('div');
            var span = doc.createElement('span');
            _scrollBox.appendChild(_scroll);
            _scroll.appendChild(span);
            _scroll.className = className;
            mainBox.appendChild(_scrollBox);
            return _scroll;
        },
        //调整滚动条
        _resizeScorll : function(element, mainBox, contentBox) {
            var p = element.parentNode;
            var conHeight = contentBox.offsetHeight;
            var _width = mainBox.clientWidth;
            var _height = mainBox.clientHeight;
            var _scrollWidth = element.offsetWidth;
            var _left = _width - _scrollWidth;
            p.style.width = _scrollWidth + "px";
            p.style.height = _height + "px";
            p.style.left = _left + "px";

            p.style.position = "absolute";
            p.style.background = "#131a20";
            contentBox.style.width = (mainBox.offsetWidth - _scrollWidth)
                + "px";
            var _scrollHeight = parseInt(_height * (_height / conHeight));
            if (_scrollHeight >= mainBox.clientHeight) {
                element.parentNode.style.display = "none";
            }
            element.style.height = _scrollHeight + "px";
        },
        //拖动滚动条
        _tragScroll : function(element, mainBox, contentBox) {
            var mainHeight = mainBox.clientHeight;
            element.onmousedown = function(event) {
                var _this = this;
                var _scrollTop = element.offsetTop;
                var e = event || window.event;
                var top = e.clientY;
                //this.onmousemove=scrollGo;
                document.onmousemove = scrollGo;
                document.onmouseup = function(event) {
                    this.onmousemove = null;
                }
                function scrollGo(event) {
                    var e = event || window.event;
                    var _top = e.clientY;
                    var _t = _top - top + _scrollTop;
                    if (_t > (mainHeight - element.offsetHeight)) {
                        _t = mainHeight - element.offsetHeight;
                    }
                    if (_t <= 0) {
                        _t = 0;
                    }
                    element.style.top = _t + "px";
                    contentBox.style.top = -_t
                        * (contentBox.offsetHeight / mainBox.offsetHeight)
                        + "px";
                    _wheelData = _t;
                }
            }
            element.onmouseover = function() {
                this.style.background = "#444";
            }
            element.onmouseout = function() {
                this.style.background = "#666";
            }
        },
        //鼠标滚轮滚动，滚动条滚动
        _wheelChange : function(element, mainBox, contentBox) {
            var node = typeof mainBox == "string" ? $(mainBox) : mainBox;
            var flag = 0, rate = 0, wheelFlag = 0;
            if (node) {
                mouseWheel(
                    node,
                    function(data) {
                        wheelFlag += data;
                        if (_wheelData >= 0) {
                            flag = _wheelData;
                            element.style.top = flag + "px";
                            wheelFlag = _wheelData * 12;
                            _wheelData = -1;
                        } else {
                            flag = wheelFlag / 12;
                        }
                        if (flag <= 0) {
                            flag = 0;
                            wheelFlag = 0;
                        }
                        if (flag >= (mainBox.offsetHeight - element.offsetHeight)) {
                            flag = (mainBox.clientHeight - element.offsetHeight);
                            wheelFlag = (mainBox.clientHeight - element.offsetHeight) * 12;

                        }
                        element.style.top = flag + "px";
                        contentBox.style.top = -flag
                            * (contentBox.offsetHeight / mainBox.offsetHeight)
                            + "px";
                    });
            }
        },
        _clickScroll : function(element, mainBox, contentBox) {
            var p = element.parentNode;
            p.onclick = function(event) {
                var e = event || window.event;
                var t = e.target || e.srcElement;
                var sTop = document.documentElement.scrollTop > 0 ? document.documentElement.scrollTop
                    : document.body.scrollTop;
                var top = mainBox.offsetTop;
                var _top = e.clientY + sTop - top - element.offsetHeight
                    / 2;
                if (_top <= 0) {
                    _top = 0;
                }
                if (_top >= (mainBox.clientHeight - element.offsetHeight)) {
                    _top = mainBox.clientHeight - element.offsetHeight;
                }
                if (t != element) {
                    element.style.top = _top + "px";
                    contentBox.style.top = -_top
                        * (contentBox.offsetHeight / mainBox.offsetHeight)
                        + "px";
                    _wheelData = _top;
                }
            }
        }
    }
    new addScroll('mainBox', 'content', 'scrollDiv');
//

//});
//
