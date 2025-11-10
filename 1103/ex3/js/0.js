$(document).ready(function(){
    let currentIndex = 0;
    $(".box").eq(0.).addClass("ch_bg");
    $(".content").eq(0).show();
    $(".box").click(function(){
        let _index = $(this).index();
        $(this).addClass("ch_bg").siblings().removeClass("ch_bg");
        let top_s = 480 * _index * -1;
        let bottom_s = 480 * _index;
        if(_index > currentIndex){
            $(".content").eq(_index).animate({
                top: top_s,
            }, 1000);
        }
        else {
            $(".content").eq(_index).animate({
                bottom: bottom_s,
            }, 1000);
        }

        currentIndex = _index;
    });
});