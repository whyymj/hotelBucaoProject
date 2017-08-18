$(document).ready(function() {
    $("#pager").pager({ pagenumber: 1, pagecount: 15, buttonClickCallback: PageClick });
});

PageClick = function(pageclickednumber) {
    $("#pager").pager({ pagenumber: pageclickednumber, pagecount: 15, buttonClickCallback: PageClick });
}