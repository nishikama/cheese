// 'use strict'

$(() => {
    // slickプラグインの設定
    $('.slide').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        centerMode: true,
        variableWidth: true
    })

    // ロードまたはリサイズの際のヘッダーの状態を設定
    $(window).on('load resize', () => {
        $('.slick-track').css('left', parseInt($('.slick-slide.slick-current').css('width')) / 2 + 'px')
        if ($(window).width() < 1366) {
            $('#panel-btn-icon, .header').removeClass('close')
        }
    })

    // ハンバーガーを押されるとメニューの状態が変化する
    $('#panel-btn').on('click', () => {
        $('#panel-btn-icon, .header').toggleClass('close')
        return false
    })

    // メニューのリンクをクリックするとメニューが収納される
    $('nav a').on('click', () => {
        $('#panel-btn-icon, .header').removeClass('close')
        return true
    })

    $.ajaxSetup({ cache: true })
    $.getScript('https://connect.facebook.net/en_US/sdk.js', () => {
        FB.init({
            appId: '2002181400091533',
            version: 'v3.2' // or v2.1, v2.2, v2.3, ...
        })

        FB.login((response) => {
            if (response.status === 'connected') {
                $('body').css('visibility', 'visible')        
            }
            else {
                window.location.href = 'https://www.facebook.com'
            }
        })
    })
})