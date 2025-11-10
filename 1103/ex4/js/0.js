$(document).ready(function(){
    $(".box").eq(0.).addClass("ch_bg");
    $(".content").eq(0).show();
    $(".box").click(function(){
        let _index = $(this).index();
        $(this).addClass("ch_bg").siblings().removeClass("ch_bg");
        let left_s = 480 * _index * -1;
        $(".content").eq(_index).animate({
            left: left_s,
        }, 1000);
    });
});