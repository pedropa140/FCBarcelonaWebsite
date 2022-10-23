var counter = 1;
$('.barcelona_page_top_navigation_links_top_login_allsites_button').click(function () {

    $('.barcelona_page_top_navigation_links_top_login_allsites_button_icon_close_left').animate({ width: '0px' }, 0);
    $('.barcelona_page_top_navigation_links_top_login_allsites_button_icon_close_right').animate({ width: '0px' }, 0);
    counter += 1;
    if ((counter % 2) == 0) {
        $('.barcelona_page_top_navigation_links_top_login_allsites_panel').animate({ width: '304px' }, 500);
        $('.barcelona_page_top_navigation_links_top_login_allsites_button_icon_svg').animate({ width: '0px' }, 0);
        $('.barcelona_page_top_navigation_links_top_login_allsites_button_icon_close_left').animate({ width: '2px' }, 0);
        $('.barcelona_page_top_navigation_links_top_login_allsites_button_icon_close_right').animate({ width: '2px' }, 0);
    }
    else {
        $('.barcelona_page_top_navigation_links_top_login_allsites_panel').animate({ width: '0' }, 250);
        $('.barcelona_page_top_navigation_links_top_login_allsites_button_icon_svg').animate({ width: "16px" }, 0);
        $('.barcelona_page_top_navigation_links_top_login_allsites_button_icon_close_left').animate({ width: '0px' }, 0);
        $('.barcelona_page_top_navigation_links_top_login_allsites_button_icon_close_right').animate({ width: '0px' }, 0);
    }
});