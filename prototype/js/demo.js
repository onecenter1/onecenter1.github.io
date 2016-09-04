$(function(){
	/*关闭窗口*/
	$("#window_close").click(function(){window.close();return false;});
	$('.dialog_close').click(function(){
	var list = art.dialog.list;
	for (var i in list) {
		list[i].close();
	};
	});
	$('.top-m .ico-quit').click(function(){
	var list = art.dialog.list;
	for (var i in list) {
		list[i].close();
	};
	});
	$('.top-m .ico-quit').click(function(){
	var list = parent.art.dialog.list;
	for (var i in list) {
		list[i].close();
	};
	});
	/*select*/
	$(".select_body").click(function(){
		var vv=$(this).width();
		$(this).find('input.select_text').width(vv - 30);
		$(this).next(".select_boundtree").width(vv);
		$(this).next(".select_boundtree").show('fast');
		return false;
	});
	$(".select_body2").click(function(){
		var vv= $(this).width();
		$(this).find('input.select_text').width(vv - 30);
		$(this).next(".select_boundtree").width(vv);
		$(this).next(".select_boundtree").show('fast');
		$(this).toggleClass("on");
		return false;
	});
	//index
	$(".nav a").click(function(){
		$(".nav a").removeClass("on");
		$(this).addClass("on");
		});
	$(".screen_item").dblclick(function(){
		$(".grid_trash").slideToggle();
		});
	//view
	$("#all .alarm1").click(function(){
		$("#all").fadeOut(300);
		$("#all_detali").fadeIn(500);
		});
	$("#all_detali .back").click(function(){
		$("#all_detali").fadeOut(300);
		$("#all").fadeIn(500);
		});
	$("#all .btn_nav a").click(function(){
		$("#all .btn_nav a").removeClass("on");
		$(this).addClass('on');
		$("#all").fadeOut(300);
		$("#all").fadeIn(500);
		});
	$("#topnsetting .btn_nav a").click(function(){
		$("#topnsetting .btn_nav a").removeClass("on");
		$(this).addClass('on');
		$("#topnsetting .leap").fadeOut(300);
		$("#topnsetting .leap").fadeIn(500);
		});
	$(".ico-chart").click(function(){
		$(this).removeClass("ico-chart").addClass("ico-table	").click(function(){
			$(this).removeClass("ico-table	").addClass("ico-chart");
			$("#topn_detail").fadeOut(300);
			$("#topn").fadeIn(500);
			});
		$("#topn").fadeOut(300);
		$("#topn_detail").fadeIn(500);
		});
	//left sub nav
	$(".arrowdown").click(function(){
		$(this).closest('a').next('ul').find('.num').toggle();
		$(this).closest('a').next('ul').find('.icon_remove, .icon_modify').toggle();
		});
	//tshirt
	$(".tshirt li").click(function(){
		$(".tshirt li").removeClass("on");
		$(this).addClass("on");
		$(".tshirt .check").fadeOut(100);
		$(".tshirt .btn_s").fadeIn(500);
		$(this).find(".check").fadeIn(500);
		$(this).find('.btn_s').fadeOut(100)
		});
	//hang
	$(".title_btn").click(function(){
		$(".hang").slideDown('fast').delay(2000).slideUp(200);
		return false;
		});	
	//helpimg1
	$(function(){
		$(".helpimg1").delay(1000).slideDown(500).delay(1000).slideUp(500);
		return false;
		})
	//btn_s4
	$(".btn_s4").click(function(){
		$(".btn_s4").removeClass("on");
		$(this).addClass("on")
		})
	//open
	$(".title").click(function(){
		$(this).closest('.setting-units').find('.holder').hide('slow');
		$(this).closest('.setting-units').find('.rare_holder').hide('slow');
		$(this).closest('.setting-units').find('a.title_btn').hide('');
		$(this).closest('.setting-units').find('.icon_open').removeClass('icon_open').addClass('icon_close');
		$(".rare_btn").removeClass("on");
		$(this).siblings(".holder").animate({
		height: "toggle", opacity: "toggle"
	  	}, 500 );
		$(this).closest('.setting-unit').find('.icon_close').removeClass('icon_close').addClass('icon_open');
		$(this).closest('.setting-unit').find('a.title_btn').fadeIn('fast');
		});
	$(".rare_btn").click(function(){
		$('.setting-units').find('.holder').hide('slow');
		$('.setting-units').find('.rare_holder').hide('slow');
		$(".rare_btn").removeClass("on");
		$(this).addClass('on');
		$(this).siblings(".rare_holder").animate({
		height: "toggle", opacity: "toggle"
	  	}, 500 );
		$(this).closest('.setting-unit').find('.icon_open').addClass('icon_close');
		$(this).closest('.setting-unit').find('a.title_btn').show();
		});
	//add_holder
	$(".add_btn").click(function(){
		$(this).toggleClass('on');
		$(".add_holder").animate({
		height: "toggle", opacity: "toggle"
	  	}, 500 );
		$("#add_list").fadeOut();
		$("#add_button").slideUp();
		});
	$(".add_close").click(function(){
		$(".add_holder").animate({
		height: "toggle", opacity: "toggle"
	  	}, 500 );
		$("#add_list").fadeIn();
		$("#add_button").slideDown();
		});
	//finc
	$("#findbtn").click(function(){
		$('.setting-units').find('.holder').hide('slow');
		$(this).closest('.button').siblings(".holder").animate({
		height: "toggle", opacity: "toggle"
	  	}, 500 );
		$("#find1").hide();
		$("#find2").show();
		$("#find9").show(); 
		});
	$("#findstop").click(function(){
		$("#find4").hide();
		$("#find3").show(); 
		$("#find5").show(); 
		});
	$("#findnext").click(function(){
		$(".setting-unit").hide();
		$(this).closest('.setting-unit').show();
		$(this).closest('.button').siblings(".holder").animate({
		height: "toggle", opacity: "toggle"
	  	}, 500 );
		$("#find6").hide();
		$("#find7").show(); 
		$("#find8").show(); 
		$("#find9").hide();
		});
	$(".common th span").click(function(){
		$(this).closest("th").find(".rank-up").css('display','inline-block');
		$(this).closest("th").find(".rank-down").css('display','inline-block');
		})
	//show new old
	$("#show_old").click(function(){
		$("#new").hide();
		$("#show_new").prop('checked', false);
		$("#old").show();
		$("#show_old").prop('checked', true);
		})
	$("#show_new").click(function(){
		$("#old").hide();
		$("#show_old").prop('checked', false);
		$("#new").show();
		$("#show_new").prop('checked', true);
		})
	//usercheck & emailcheck
	$(".uc a, .ec a").click(function(){
		$(this).toggleClass('on');
		});
	//on-off
	$(".icon_on").click(function(){
		$(this).toggleClass('icon_off');
		});
	$(".icon_off").click(function(){
		$(this).toggleClass('icon_off');
		$(this).toggleClass('icon_on');
		});
	$(".icon_switchon").click(function(){
		$(this).toggleClass('icon_switchoff');
		});
	$(".icon_switchoff").click(function(){
		$(this).toggleClass('icon_switchoff');
		$(this).toggleClass('icon_switchon');
		});
	
	//sub_ul
	$(".sub_ul li a").click(function(){
		$(this).siblings("ul").slideToggle();
		});
	//用户名框鼠标焦点移进，文字消失
	$("input.null").click(function () {
		var check1 = $(this).val();
		if (check1 == this.defaultValue) {
			$(this).val("");
		};
		$(this).addClass('null_t');
	});
	//interface
	$(".interface span.gt").click(function(){
		$('.interface a').removeClass('on');
		$(this).closest("a").addClass('on');
		$(".interface_right").hide();
		$(".interface_right").fadeIn();
	});
	$(".interface span.rt").click(function(){
		$('.interface a').removeClass('on');
		$(this).closest("a").addClass('on');
		$(".interface_right").hide();
		$(".interface_right").fadeIn();
	});
	//btn_s
	$(".btn_t").click(function(){
		$(".btn_t").removeClass("on");
		$(this).addClass("on");	
	});
	//sub-sidebar
	$('.sidebar li').hover(function(){
	  var $ul = $(this).children("ul:not(:empty)");
			$ul.stop();
			$ul.css("left",0).show().animate({
				opacity:"1",
				left:65
			},800);
		},function(){
			var $ul = $(this).children("ul:not(:empty)");
			$ul.stop();
			$ul.animate({
				opacity:"0",
				left:0
			},800,function(){
				$ul.hide();
			});		
	});
	//choose
	$('.choose1').click(function(){
		$('.choose2').removeClass('on');
		$('.choose1').addClass('on');
		});
	$('.choose2').click(function(){
		$('.choose1').removeClass('on');
		$('.choose2').addClass('on');
		});
	//select
		$(".select_box").click(function(event){   
		event.stopPropagation();
		$(this).find(".option").toggle();
		$(this).parent().siblings().find(".option").hide();
	});
	$(document).click(function(event){
		var eo=$(event.target);
		if($(".select_box").is(":visible") && eo.attr("class")!="option" && !eo.parent(".option").length)
		$('.option').hide();									  
	});
	//tabber
	$('.tabber a').click(function(){
		var i=$('.tabber a').index(this);
		var j=$('.tabber li');
		var t=$('.tabber-content > div');
		$(j).removeClass('on');
		$(j).eq(i).addClass('on');
		$(t).hide();
		$(t).eq(i).show();
		})
	/*赋值给文本框*/
	$(".option a").click(function(){
		var value=$(this).text();
		$(this).parent().siblings(".select_txt").text(value);
		$("#select_value").val(value)
	 })
	 //show_calendarimg
	$(".calendar, .time_body").click(function(e){
	 var classname='calendarimg'
		pageWidth = document.documentElement.offsetWidth;
		pageHight = document.documentElement.offsetHeight;
		divWidth = jQuery("." + classname).width();
		divHight = jQuery("." + classname).height();
		if (e.pageX + divWidth < pageWidth) {
			pagex = e.pageX;
		} else {
			pagex = e.pageX - divWidth;
		}
		pagey = e.pageY + 10;
	 jQuery("." + classname).css("top", pagey + "px").css("left", pagex + "px").fadeIn(200);
	 return false;
	});

	//单击空白区域隐藏弹出层 
	$(document).click(function (event) {
		$(".select_boundtree").hide('fast');
		$(".select_body2").removeClass("on");
		$(".hang").slideUp("fast");
		$("#more").slideUp();
		$("#rank").fadeOut(100);
		$("#rank2").fadeOut(100);
		$("#rank3").fadeOut(100);
		$("#tools").fadeOut(100);
		$(".calendarimg").fadeOut(100);
		$("#tinyset").fadeOut(100);
		$("#share").fadeOut(100);
		$("#treetool").fadeOut(100);
		$("#ipmore").fadeOut(100)
		})
	return false;		
});

//openwindow
function openwindow(url,name,iWidth,iHeight)
 {
  var url;                             //转向网页的地址;
  var name;                           //网页名称，可为空;
  var iWidth;                          //弹出窗口的宽度;
  var iHeight;                        //弹出窗口的高度;
  var iTop = (window.screen.availHeight-30-iHeight)/2;       //获得窗口的垂直位置;
  var iLeft = (window.screen.availWidth-10-iWidth)/2;        //获得窗口的水平位置;
  window.open(url,name,'height='+iHeight+',,innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
 }
//sub-select
$(function(){
	$('.select_boundtree li, .select_boundtree li').hover(function(){
		$(this).children('ul').stop(true,true).show();
		$(this).addClass('hover');
	},function(){
		$(this).children('ul').stop(true,true).hide();
		$(this).removeClass('hover');
	});
});

$.fn.scroller = function() {
    var speed = 'slow'; // Choose default speed
    $(this).each(function() {
        $(this).bind('click', function() {
            var target = $(this).attr('href'); // Get scroll target
            $(target).ScrollTo(speed);
            return false;
        });
    });
}


//下拉按钮的JS
$(document).ready(function(){
    $(".select_box").click(function(event){
        event.stopPropagation();
        $(this).find(".option").toggle();
        $(this).parent().siblings().find(".option").hide();
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

