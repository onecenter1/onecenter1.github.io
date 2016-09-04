/**
 * Created with JetBrains WebStorm.
 * User: M。s
 * Date: 14-5-13
 * Time: 下午3:32
 * To change this template use File | Settings | File Templates.
 */



var lilist=$(".mainnavfrom ul li");  //得到LI对象

lilist.ready(function(){
    $(".window2").hide();
    $(".window3").hide();
    $(".window4").hide();
    $(".window5").hide();
    $(".window6").hide();
    $(".libg1").addClass("activeinfo");
})






lilist.each(function(e){
    $(lilist[0]).click(function(){
         $(".window1").show();
        $(".window2").hide();
        $(".window3").hide();
        $(".window4").hide();
        $(".window5").hide();
        $(".window6").hide();
        $("#getjiekoubutton").hide();

    });




    $(lilist[1]).click(function(){
        $(".window1").hide();
        $(".window2").show();
        $(".window3").hide();
        $(".window4").hide();
        $(".window5").hide();
        $(".window6").hide();
        $("#getjiekoubutton").hide();




        });




    $(lilist[2]).click(function(){
        $(".window1").hide();
        $(".window2").hide();
        $(".window3").show();
        $(".window4").hide();
        $(".window5").hide();
        $(".window6").hide();
        $("#getjiekoubutton").hide();



    });





    $(lilist[3]).click(function(){
        $(".window1").hide();
        $(".window2").hide();
        $(".window3").hide();
        $(".window4").show();
        $(".window5").hide();
        $(".window6").hide();
        $("#getjiekoubutton").hide();




    });
    $(lilist[4]).click(function(){
        $(".window5").show();
        $(".window1").hide();
        $(".window2").hide();
        $(".window3").hide();
        $(".window4").hide();
        $(".window6").hide();

        $("#getjiekoubutton").show();






    });

    $(lilist[5]).click(function(){
        $(".window5").hide();
        $(".window1").hide();
        $(".window2").hide();
        $(".window3").hide();
        $(".window4").hide();
        $(".window6").show();
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



$("#topmenuul li").bind("click",function(){
    $("#topmenuul li").removeClass("on");
    $(this).addClass("on");
});


$(function() {
    if (window.PIE) {
        $('.rounded').each(function() {
            PIE.attach(this);
        });
    }
});

// Horizontal slider
$('.ui-slider').slider({
    range: true,
    values: [17, 67]
});

// Vertical slider
$("#v-slider").slider({
    orientation: "vertical",
    range: "min",
    min: 0,
    max: 100,
    value: 60,
    slide: function (event, ui) {
        $("#amount").val(ui.value);
    }
});
$("#amount").val($("#v-slider").slider("value"));



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


