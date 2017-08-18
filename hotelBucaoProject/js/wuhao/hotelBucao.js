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
                $(element).attr('class', 'spanImg' + (index + 1));
            });
            for (var i = 0; i < len; i++) {
                if ($(tabs[i]).attr('id') == 'tabActive') {
                    $(tabs[i]).find('span').eq(0).attr('class', 'spanImg' + (i + 1) + 'Click');
                }

            }
        }
        tabs.each(function(index, ele) {
            $(ele).on('click', function() {
                click(ele);
            });
        });
    })();
})