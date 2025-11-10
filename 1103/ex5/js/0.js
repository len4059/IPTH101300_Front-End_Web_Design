$(document).ready(function(){
    $(".box").eq(0.).addClass("ch_bg");
    
    // 讓顏色格子水平排列
    $(".content").each(index => {
        $(".content").eq(index).css({
            "left":480*index, 
            "top":-480*index
        })
    });

    $(".box").click(function(){
        let _index = $(this).index();
        $(this).addClass("ch_bg").siblings().removeClass("ch_bg");
        
        $(".content").each(index => {
            $(".content").eq(index).animate({
                left: 480 * index - (480 * _index),
            }, 1000)
        })
    });
});