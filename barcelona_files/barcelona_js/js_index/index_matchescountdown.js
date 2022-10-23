function countDownTimer() {
    var target = new Date("24 July 2022 5:00:00 GMT+2:00");
    target = (Date.parse(target) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = target - now;
    if (timeLeft < 0) {
        $(".barcelona_page_middle_firstteammatches_content_header_countdown_timer_day_timer").html("00");
        $(".barcelona_page_middle_firstteammatches_content_header_countdown_timer_day_timer").css(
            'font-family',
            "fcb-light"
        )
        $(".barcelona_page_middle_firstteammatches_content_header_countdown_timer_hour_timer").html("00");
        $(".barcelona_page_middle_firstteammatches_content_header_countdown_timer_hour_timer").css(
            'font-family',
            "fcb-light"
        )
        $(".barcelona_page_middle_firstteammatches_content_header_countdown_timer_minute_timer").html("00");
        $(".barcelona_page_middle_firstteammatches_content_header_countdown_timer_minute_timer").css(
            'font-family',
            "fcb-light"
        )
        $(".barcelona_page_middle_firstteammatches_content_header_countdown_timer_second_timer").html("00");
        $(".barcelona_page_middle_firstteammatches_content_header_countdown_timer_second_timer").css(
            'font-family',
            "fcb-light"
        )
    }
    else {
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (days < "10") {
            days = "0" + days;
        }
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }

        if (days == "00") {
            $(".barcelona_page_middle_firstteammatches_content_header_countdown_timer_day_timer").css(
                'font-family',
                "fcb-light"
            )
        } else {
            $(".barcelona_page_middle_firstteammatches_content_header_countdown_timer_day_timer").css(
                'font-family',
                "fcb-extra-bold"
            )
        }
        if (hours == "00") {
            $(".barcelona_page_middle_firstteammatches_content_header_countdown_timer_hour_timer").css(
                'font-family',
                "fcb-light"
            )
        } else {
            $(".barcelona_page_middle_firstteammatches_content_header_countdown_timer_hour_timer").css(
                'font-family',
                "fcb-extra-bold"
            )
        }
        if (minutes == "00") {
            $(".barcelona_page_middle_firstteammatches_content_header_countdown_timer_minute_timer").css(
                'font-family',
                "fcb-light"
            )
        } else {
            $(".barcelona_page_middle_firstteammatches_content_header_countdown_timer_minute_timer").css(
                'font-family',
                "fcb-extra-bold"
            )
        }

        $(".barcelona_page_middle_firstteammatches_content_header_countdown_timer_day_timer").html(days);
        $(".barcelona_page_middle_firstteammatches_content_header_countdown_timer_hour_timer").html(hours);
        $(".barcelona_page_middle_firstteammatches_content_header_countdown_timer_minute_timer").html(minutes);
        $(".barcelona_page_middle_firstteammatches_content_header_countdown_timer_second_timer").html(seconds);
    }
}

setInterval(
    function () {
        countDownTimer()
    }, 1000
);