$(function() {
    /**
     * 该方法用于 .tabs 下的标签样式的切换，改变其背景色，切换背景图
     * 
     */
    (function() {
        var tabs = $('.tabstyle'); //全部标签
        var len = tabs.length;

        function click(ele) {
            $(ele).siblings().not('.zulin').removeAttr('id');
            $(ele).attr('id', 'tabActive');

            $(ele).siblings().not('.zulin').find('span').eq(0).each(function(index, element) {
                $(element).removeClass('class');
            });

            for (var i = 0; i < len; i++) {

                if ($(tabs[i]).attr('id') == 'tabActive') {
                    $(tabs[i]).find('span').eq(0).attr('class', 'spanImg' + (i + 1) + 'Click');
                } else {
                    $(tabs[i]).find('span').eq(0).attr('class', 'spanImg' + (i + 1));
                }

            }
        }
        tabs.each(function(index, ele) {
            $(ele).on('click', function() {
                click(ele);
            });
        });
        $('.tab1').click();
    })();
    /**
     * 该方法是.tabcon1 li样式切换方法 */
    (function() {
        var list = $('.tabcon1 li');
        var len = list.lenght;

        function click(ele) {
            $(ele).siblings().removeAttr('class');
            $(ele).attr('class', 'chosedLi');
        }
        for (var i = 0; i < len; i++) {
            $(list[i]).on('click', function() {
                click(this);
            })
        }
    })();
})