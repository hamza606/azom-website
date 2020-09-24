
$(".close-search").on('click', function () {
    $('.header-search').fadeOut(200)
});
$(".header-search-button").on('click', function () {
    $('.header-search').slideToggle(200)
});

if($('#player').length){
    const player = new Plyr('#player',{
        speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] },
        quality:{ default: 720, options: [1080, 720, 480, 360] }
    });
    player.on('play', () => {
        $('.video-section h3').fadeOut(500);
    });
    player.on('pause', () => {
        $('.video-section h3').fadeIn(500);
    });
}

$(window).scroll(function () {
    let sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 200) {
        sticky.addClass('fixed');
        $("body").addClass("headerIsFixed")
    }
    else {
        sticky.removeClass('fixed');
        $("body").removeClass("headerIsFixed")
    }
});
