$(document).ready(function () {

    //SLIDER
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })

    //HAMBURGER
    $(".bars").click(function(){
        if($(this).hasClass("fa-circle-xmark")){
            $(this).removeClass("fa-circle-xmark");
            $(".bars").css("position", "absolute");
            $(".bars").css("margin-right", "0");
            $(" #mainNav ul").css("right", "-170px");
        }else{
            $(this).addClass("fa-circle-xmark");
            $(".bars").css("position", "fixed");
            $(".bars").css("margin-right", "20px")
            $("#mainNav ul").css("right", "0");
        }
    })





})