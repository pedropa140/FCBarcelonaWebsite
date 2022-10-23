var site = 1;
$('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left').click(
    function() {
        if(site > 0 && site < 3){
            site--;
            if(site == 1){
                $('.barcelona_page_middle_firstteammatches_content_scroller_container').animate({
                    left: '-734'
                }, 250);
                $('.barcelona_page_middle_firstteammatches_content_controller_left').css("background-color", "#cd122d");
                $('.barcelona_page_middle_firstteammatches_content_controller_center').css("background-color", "#d8d8d8");
                $('.barcelona_page_middle_firstteammatches_content_controller_right').css("background-color", "#cd122d");
            }
            else if(site == 0){
                $('.barcelona_page_middle_firstteammatches_content_scroller_container').animate({
                    left: '0'
                }, 250);
                $('.barcelona_page_middle_firstteammatches_content_controller_left').css("background-color", "#d8d8d8");
                $('.barcelona_page_middle_firstteammatches_content_controller_center').css("background-color", "#cd122d");
                $('.barcelona_page_middle_firstteammatches_content_controller_right').css("background-color", "#cd122d");
            }
        }

        if(site == 0) {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').animate({
                opacity: "0.5"
            });
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').css(
                'background-color', "#f8f8f8"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container svg").css(
                'fill', "#000000"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left").css(
                'cursor', "default"
            );
        } else {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').animate({
                opacity: "1"
            });
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left").css(
                'cursor', "pointer"
            );
        }

        if(site == 2) {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').animate({
                opacity: "0.5"
            });
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').css(
                'background-color', "#f8f8f8"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container svg").css(
                'fill', "#000000"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right").css(
                'cursor', "default"
            );
        } else {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').animate({
                opacity: "1"
            });
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right").css(
                'cursor', "pointer"
            );
        }
    }
);

$('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right').click(
    function() {
        if(site > -1 && site < 2){
            site++;
            if(site == 1){
                $('.barcelona_page_middle_firstteammatches_content_scroller_container').animate({
                    left: '-734'
                }, 250);
                $('.barcelona_page_middle_firstteammatches_content_controller_left').css("background-color", "#cd122d");
                $('.barcelona_page_middle_firstteammatches_content_controller_center').css("background-color", "#d8d8d8");
                $('.barcelona_page_middle_firstteammatches_content_controller_right').css("background-color", "#cd122d");
            }
            else if(site == 2){
                $('.barcelona_page_middle_firstteammatches_content_scroller_container').animate({
                    left: '-1464'
                }, 250);
                $('.barcelona_page_middle_firstteammatches_content_controller_left').css("background-color", "#cd122d");
                $('.barcelona_page_middle_firstteammatches_content_controller_center').css("background-color", "#cd122d");
                $('.barcelona_page_middle_firstteammatches_content_controller_right').css("background-color", "#d8d8d8");
            }
        }

        if(site == 0) {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').animate({
                opacity: "0.5"
            });
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').css(
                'background-color', "#f8f8f8"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container svg").css(
                'fill', "#000000"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left").css(
                'cursor', "default"
            );
        } else {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').animate({
                opacity: "1"
            });
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left").css(
                'cursor', "pointer"
            );
        }

        if(site == 2) {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').animate({
                opacity: "0.5"
            });
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').css(
                'background-color', "#f8f8f8"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container svg").css(
                'fill', "#000000"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right").css(
                'cursor', "default"
            );
        } else {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').animate({
                opacity: "1"
            });
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right").css(
                'cursor', "pointer"
            );
        }
    }
);

$('.barcelona_page_middle_firstteammatches_content_controller_left').click(
    function() {
        $('.barcelona_page_middle_firstteammatches_content_scroller_container').animate({
            left: '0'
        }, 250);
        $('.barcelona_page_middle_firstteammatches_content_controller_left').css("background-color", "#d8d8d8");
        $('.barcelona_page_middle_firstteammatches_content_controller_center').css("background-color", "#cd122d");
        $('.barcelona_page_middle_firstteammatches_content_controller_right').css("background-color", "#cd122d");
        site = 0;

        if(site == 0) {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').animate({
                opacity: "0.5"
            });
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').css(
                'background-color', "#f8f8f8"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container svg").css(
                'fill', "#000000"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left").css(
                'cursor', "default"
            );
        } else {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').animate({
                opacity: "1"
            });
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left").css(
                'cursor', "pointer"
            );
        }

        if(site == 2) {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').animate({
                opacity: "0.5"
            });
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').css(
                'background-color', "#f8f8f8"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container svg").css(
                'fill', "#000000"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right").css(
                'cursor', "default"
            );
        } else {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').animate({
                opacity: "1"
            });
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right").css(
                'cursor', "pointer"
            );
        }
    }
);

$('.barcelona_page_middle_firstteammatches_content_controller_center').click(
    function() {
        $('.barcelona_page_middle_firstteammatches_content_scroller_container').animate({
            left: '-734'
        }, 250);
        $('.barcelona_page_middle_firstteammatches_content_controller_left').css("background-color", "#cd122d");
        $('.barcelona_page_middle_firstteammatches_content_controller_center').css("background-color", "#d8d8d8");
        $('.barcelona_page_middle_firstteammatches_content_controller_right').css("background-color", "#cd122d");
        site = 1;

        if(site == 0) {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').animate({
                opacity: "0.5"
            });
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').css(
                'background-color', "#f8f8f8"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container svg").css(
                'fill', "#000000"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left").css(
                'cursor', "default"
            );
        } else {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').animate({
                opacity: "1"
            });
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left").css(
                'cursor', "pointer"
            );
        }

        if(site == 2) {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').animate({
                opacity: "0.5"
            });
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').css(
                'background-color', "#f8f8f8"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container svg").css(
                'fill', "#000000"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right").css(
                'cursor', "default"
            );
        } else {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').animate({
                opacity: "1"
            });
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right").css(
                'cursor', "pointer"
            );
        }
    }
);

$('.barcelona_page_middle_firstteammatches_content_controller_right').click(
    function() {
        $('.barcelona_page_middle_firstteammatches_content_scroller_container').animate({
            left: '-1464'
        }, 250);
        $('.barcelona_page_middle_firstteammatches_content_controller_left').css("background-color", "#cd122d");
        $('.barcelona_page_middle_firstteammatches_content_controller_center').css("background-color", "#cd122d");
        $('.barcelona_page_middle_firstteammatches_content_controller_right').css("background-color", "#d8d8d8");
        site = 2;

        if(site == 0) {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').animate({
                opacity: "0.5"
            });
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').css(
                'background-color', "#f8f8f8"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container svg").css(
                'fill', "#000000"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left").css(
                'cursor', "default"
            );
        } else {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').animate({
                opacity: "1"
            });
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left").css(
                'cursor', "pointer"
            );
        }

        if(site == 2) {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').animate({
                opacity: "0.5"
            });
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').css(
                'background-color', "#f8f8f8"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container svg").css(
                'fill', "#000000"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right").css(
                'cursor', "default"
            );
        } else {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').animate({
                opacity: "1"
            });
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right").css(
                'cursor', "pointer"
            );
        }
    }
);

$('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').hover(
    function() {
        if(site > 0){
            $('.barcelona_page_middle_firstteammatches_content_scroller_container').animate({
                left: '+=20'
            }, 250);
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').css(
                'background-color', "#154284"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container svg").css(
                'fill', "white"
            );
        }
        else {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').css(
                'background-color', "#f8f8f8"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container svg").css(
                'fill', "#000000"
            );
        }
    }, function() {
        if(site > 0){
            $('.barcelona_page_middle_firstteammatches_content_scroller_container').animate({
                left: '-=20'
            }, 250);
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container').css(
                'background-color', "#f8f8f8"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_left_container svg").css(
                'fill', "#000000"
            );
        }
    }
);

$('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').hover(
    function() {
        if(site < 2){
            $('.barcelona_page_middle_firstteammatches_content_scroller_container').animate({
                left: '-=20'
            }, 250);
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').css(
                'background-color', "#154284"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container svg").css(
                'fill', "white"
            );
        }
        else {
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').css(
                'background-color', "#f8f8f8"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container svg").css(
                'fill', "#000000"
            );
        }
    }, function() {
        if(site < 2){
            $('.barcelona_page_middle_firstteammatches_content_scroller_container').animate({
                left: '+=20'
            }, 250);
            $('.barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container').css(
                'background-color', "#f8f8f8"
            );
            $(".barcelona_page_middle_firstteammatches_content_header_scrollercontroller_buttons_right_container svg").css(
                'fill', "#000000"
            );
        }
    }
);