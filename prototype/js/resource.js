


$(function(){
    $("#winodwsobj").ready(function(){
        $("#winodwsobj").hide();

        $("#page1").hide();
        $("#baojingpage1").hide();
        $("#windowhide2").hide();    //第二个弹出层
        $("#resourceupdatewin").hide();
        $(".bodywindows").css({
            display:'none'
        });
    });
    /**
     * Created with JetBrains WebStorm.
     * User: M。s
     * Date: 14-5-8
     * Time: 下午4:18
     * To change this template use File | Settings | File Templates.
     */

//资源管理页面

//    点击按钮出现两个小按钮--------------------------
    var buttom=  $(".arrowdown");
    var chushitext=$("#topmenuul .digit");
    var getupdatewindow=$(".getupdatewindow");
    var tempdelete=$(".l-icon-delete");
    var tempbuttomdelete=$(".l-icon-edit");

    var mark=0;
    buttom.click(function(){
        if(mark%2==0){
            chushitext.animate({
                opacity:0,
                width:"0px"
            },50);
            tempdelete.css({display:"block"});
            tempbuttomdelete.css({display:"block"});
            mark++;
        }else{
            chushitext.animate({
                opacity:1,
                width:"37px"
            },100);
            tempdelete.css({display:"none"});
            tempbuttomdelete.css({display:"none"});
            mark--;
        }
    });



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


//    点击弹出层

//$(".bodywindows");
//$(".windowhide2");



    var lilist= $("#topmenuul li");

//点击修改小图标弹出层

    getupdatewindow.each(function(e){
        $(getupdatewindow[e]).bind('click',function(){
            $("#windowhide2").hide();    //第二个弹出层
            $("#winodwsobj").show(500);

            $(".bodywindows").css({
                display:'block'
            });
            console.log(getupdatewindow);
        });

    });

//点击删除小图标出现弹出层

    tempbuttomdelete.each(function(e){
        $(tempbuttomdelete[e]).bind('click',function(){
            $("#windowhide2").show(500);
            $(".bodywindows").css({
                display:'block'
            });
        });
    });
//点击取消按钮关闭弹出层
    $(".windowhide2_no").click(function(){
        $("#windowhide2").hide(700);
        $(".bodywindows").css({
            display:'none'
        });
    });


//点击关闭按钮关闭修改层
    $("#closewindow").click(function(){
        $("#baojingpage1").hide(200);   //报警设置页面
        $("#windowhide2").hide();    //第二个弹出层
        $("#resourceupdatewin").hide(200);


        $(".bodywindows").css({
            display:'none'
        });

        $("#pagewindow1").css({
            backgroundPosition:"left -76px"
        });
        lefttubiao.css({
            backgroundPosition:"left 0"
        });
        rifhttubio.css({
            backgroundPosition:"right -38px"
        });
// 第一个按钮的样式
        lefttubiao1.css({
            backgroundPosition:"0 -114px"
        });
        rifhttubio2.css({
            backgroundPosition:"right -152px"
        })
        $("#pagewindow2").css({
            backgroundPosition:"0 -190px"
        });

        windowtext.animate({
            width:"869px",
            opacity:"show"
        },200);


    });



//点击Pagewindows2，监控设置2  的时候切换窗口
    var windowtext=$("#jiankongpage2");  //弹出层的内容

    var lefttubiao=$(".left");   //第一个背景的左边
    var rifhttubio=$(".right");   //第一个背景的右边

    var lefttubiao1=$(".left1");   //第二个背景的左边
    var rifhttubio2=$(".right2");   //第二个背景的右边

    var bgclass=$(".button1");
    var bgclass2=$(".button2");
    $("#pagewindow2btn").click(function(){
        bgclass2.addClass("on");
        bgclass.removeClass("on");

        $("#baojingpage1").show(200);   //报警设置页面
        $("#jiankongpage2").hide(200);   //报警设置页面
        console.log($("#pagewindow2"));
//    点击第二个按钮的第二个样式
        $("#pagewindow2").css({
            backgroundPosition:"left -76px"
        });
        lefttubiao1.css({
            backgroundPosition:"left 0"
        });
        rifhttubio2.css({
            backgroundPosition:"right -38px"
        });
// 第一个按钮的样式
        lefttubiao.css({
            backgroundPosition:"0 -114px"
        });
        rifhttubio.css({
            backgroundPosition:"right -152px"
        })
        $("#pagewindow1").css({
            backgroundPosition:"0 -190px"
        });


    });
//点击Pagewinodw1。监控设置1 的时候 切换窗口

    $("#pagewindow1btn").click(function(){
//    点击第二个按钮的第二个样式
        bgclass.addClass("on");
        bgclass2.removeClass("on");
        $("#baojingpage1").hide();
        $("#jiankongpage2").hide(200);

        $("#pagewindow1").css({
            backgroundPosition:"left -76px"
        });
        lefttubiao.css({
            backgroundPosition:"left 0"
        });
        rifhttubio.css({
            backgroundPosition:"right -38px"
        });
// 第一个按钮的样式
        lefttubiao1.css({
            backgroundPosition:"0 -114px"
        });
        rifhttubio2.css({
            backgroundPosition:"right -152px"
        })
        $("#pagewindow2").css({
            backgroundPosition:"0 -190px"
        });

        windowtext.animate({
            width:"869px",
            opacity:"show"
        },200);

    });
//两个按钮中只能选择一个按钮

    $("#buttoninfo").click(function(){
        $("#buttoninfo1").css({
            backgroundPosition:"0 0"
        });

        $("#buttoninfo").css({
            backgroundPosition:"1px -70px"
        });


        console.log("agddg");
    });
    $("#buttoninfo1").click(function(){
        $("#buttoninfo").css({
            backgroundPosition:"0 0"
        });

        $("#buttoninfo1").css({
            backgroundPosition:"1px -70px"
        });

    });

//    点击报警设置里面的li列表遍历选择层

    var    jiankongwindow1=$(".window1");
    var    jiankongwindow2=$(".window2");
    var    jiankongwindow3=$(".window3");
    var    jiankongwindow4=$(".window4");
    var    jiankongwindow5=$(".window5");
    var    jiankongwindow6=$(".window6");

    jiankongwindow1.ready(function(){

        jiankongwindow2.hide();
        jiankongwindow3.hide();
        jiankongwindow4.hide();
        jiankongwindow5.hide();
        jiankongwindow6.hide();
        $(".libg1").addClass("activeinfo");
    })  ;

    /**
     * Created with JetBrains WebStorm.
     * User: M。s
     * Date: 14-5-13
     * Time: 下午3:32
     * To change this template use File | Settings | File Templates.
     */

    var lilist=$(".mainnavfrom ul li");  //得到LI对象


    lilist.each(function(e){
        $(lilist[0]).click(function(){
            jiankongwindow1.show();
            jiankongwindow2.hide();
            jiankongwindow3.hide();
            jiankongwindow4.hide();
            jiankongwindow5.hide();
            jiankongwindow6.hide();
            $("#getjiekoubutton").hide();
        });
        $(lilist[1]).click(function(){
            jiankongwindow1.hide();
            jiankongwindow2.show();
            jiankongwindow3.hide();
            jiankongwindow4.hide();
            jiankongwindow5.hide();
            jiankongwindow6.hide();
            $("#getjiekoubutton").hide();
        });
        $(lilist[2]).click(function(){
            jiankongwindow1.hide();
            jiankongwindow2.hide();
            jiankongwindow3.show();
            jiankongwindow4.hide();
            jiankongwindow5.hide();
            jiankongwindow6.hide();
            $("#getjiekoubutton").hide();
        });
        $(lilist[3]).click(function(){
            jiankongwindow1.hide();
            jiankongwindow2.hide();
            jiankongwindow3.hide();
            jiankongwindow4.show();
            jiankongwindow5.hide();
            jiankongwindow6.hide();
            $("#getjiekoubutton").hide();

        });
        $(lilist[4]).click(function(){
            jiankongwindow1.hide();
            jiankongwindow2.hide();
            jiankongwindow3.hide();
            jiankongwindow4.hide();
            jiankongwindow5.show();
            jiankongwindow6.hide();

            $("#getjiekoubutton").show();
        });

        $(lilist[5]).click(function(){
            jiankongwindow1.hide();
            jiankongwindow2.hide();
            jiankongwindow3.hide();
            jiankongwindow4.hide();
            jiankongwindow5.hide();
            jiankongwindow6.show();
            $("#getjiekoubutton").hide();

        });

    });


//window5的获取接口按钮
    $("#getjiekoubutton").ready(function(){
        $("#getjiekoubutton").hide();
    });


//window5left的Li列表单行和双行的背景颜色交替
    var templi= $(".window5left ul li");
    for(var i=0;i<templi.length;i++){
        if(i%2==0){
            $(templi[i]).css({
                backgroundPosition:"-17px -14px"
            });
        }else{
            $(templi[i]).css({
                backgroundPosition:"-17px -68px"

            });
        }
    };
//点击按钮进行切换
    var tempa= $(".window5left ul li a");

    tempa.each(function(e){
        $(tempa[e]).click(function(){
            $(tempa[e]).toggleClass("click");
        });

    });











































//弹出窗口里面的滚动切换-------------------
    var tempwondw1=  $("#windowcontentpage1");
    var tempwondw2=  $("#windowcontentpage2");

    var leftpage=$(".tab-arrow-l");
    var roghtpge=$(".tab-arrow-r");
    tempwondw1.ready(function(){
        tempwondw2.hide();
    });

    leftpage.click(function(){
        tempwondw1.hide(700);
        tempwondw2.show(700);
    });

    roghtpge.click(function(){
        tempwondw1.show(700);
        tempwondw2.hide(700);
    });

//点击向下显示一个列表

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

//监控设置里面列表的点击切换效果

    var rray= $(".check-btn"); //得到所有的短信告警按钮
    //通过点击选中按钮
    rray.each(function(e){
        $(rray[e]).click(function(){
            $(rray[e]).toggleClass("active");
        });
    });



//在资源管理页面点击添加按钮新建一个LI

    var newgroup= $(".arrowadd");  //添加按钮
    var newyesbtn=newgroup.text();
//得到li列表
    $("#topmenuul li")

    newgroup.click(function(){
        $(this).parents().find("#topmenuul").append("" +
            "  <li class=''>" +
            "<a class='h-subnav' href='resource-info.html' target='rightcontent'>" +
            "<span class='digit'>0</span><span>" +
            "<div style='width: 80px'  CONTENTEDITABLE=true onbeforeeditfocus ='this.oldData=this.firstChild.data'" +
            " >新建资源</div>" +
            "</span><span class='l-icon l-icon-edit' ></span>" +
            "<span id='deletewindow' class='l-icon l-icon-delete'></span></a></li>");

//    console.log( $(this).parents().find("#topmenuul").find("li").append("<li>weyt</li>"));


    });

//实现滚动效果     Start------------
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

//实心滚动效果   End   -----------



//下拉按钮的JS
    $(document).ready(function(){
        $(".select_box").click(function(event){
            event.stopPropagation();
            $(this).find(".option").toggle();
            $(this).parent().siblings().find(".option").hide();
            console.log("seey")
        });
        $(document).click(function(event){
            var eo=$(event.target);
            if($(".select_box").is(":visible") && eo.attr("class")!="option" && !eo.parent(".option").length)
                $('.option').hide();
        });
        /*赋值给文本框*/
        $(".option a").click(function(){
            var value=$(this).text();
            $(this).parent().siblings(".select_txt").text(value);
            $("#select_value").val(value);
        });
    });




})