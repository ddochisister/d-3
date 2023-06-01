$(function(){
    // 메뉴
    $(".sub").hide();
    $(".main li,.sub").hover(function(){
        $(".sub").stop().show();
    },function(){
        $(".sub").stop().hide();
    })
    $(".sub_list>li").hover(function(){
        var n=$(this).index();
        console.log("n:",n);

        $(".main li a").removeClass("on")
        $(".main li").eq(n).find("a").addClass("on")
    },function(){
        $(".main li a").removeClass("on")
    })


    //슬라이드
    // $(".fade li").hide();
    // $(".fade li").eq(0).show();
    // 또는
    $(".fade li").eq(0).siblings().hide();
    // 또는
    // $(".fade li:gt(0)").hide();

    var n=0;
    setInterval(function(){
        $(".fade li").eq(0).fadeOut();
        if(n==2){
            n=0;
        }else{
            n++;
        }
        $(".fade li").eq(n).fadeIn();
    },3000)



    //공지사항 갤러리
    $(".not_gal h2").click(function(){
        $(".not_gal h2").removeClass("on");
        $(this).addClass("on");

        $(".not_gal ul").hide();
        $(this).next().show();
    })



    //팝업
    $(".click").click(function(){
        $(".popup").show()
    })
    $(".close").click(function(){
        $(".popup").hide()
    })


})// jquery