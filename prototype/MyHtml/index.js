//当菜单被来下的时候改变了页面的宽度时恢复主菜单位置
          $(window).on('resize',function(){
            if ($(document).width() > 768) {
              $('.header_ul').offset({top:"0"});
            };
          })
          //关闭table
          $('.ico-cancel').on('click',function(){
            $(this).parents('.col-md-6').hide(500);
          });
          //隐藏或显示table
          $('.ico-chart').on('click',function(){
            $(this).parents('.panel').find('.panel-body').toggleClass('hide')
          });
          
          //向上向下移动菜单....
          $('.header-pagedown,.header-pageup').on('click',function(){
            var $menu = $('.header_ul'),
                top = $menu.offset().top,
                h = $menu.height(),
                $this = $(this),
                isDown = $this.hasClass('header-pagedown');
            if (isDown) {
              if ((-top+77) < h) {
                $menu.css({"position":"relative"}).offset({top:top-77});
              };
            }else{
              if (top < 0) {
                $menu.css({"position":"relative"}).offset({top:top+77});
              };
            };

          });