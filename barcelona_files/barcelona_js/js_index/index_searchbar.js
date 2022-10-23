var counter = 1;
$('.barcelona_page_top_navigation_links_bottom_search').click(
    function() {
        $('.barcelona_page_top_navigation_links_bottom_search_icon').animate({ opacity: "1" }, 0);
        $('.barcelona_page_top_navigation_links_bottom_search_exit_left').animate({ width: '0px' }, 0);
        $('.barcelona_page_top_navigation_links_bottom_search_exit_right').animate({ width: '0px' }, 0);
        counter += 1;
        if ((counter % 2) == 0) {
            $('.barcelona_page_top_other_searchbar').animate({ height: '88px', opacity: '1', display: "block" }, 250);
            $('.barcelona_page_top_navigation_links_bottom_search_icon').animate({ opacity: "0" }, 0);
            $('.barcelona_page_top_navigation_links_bottom_search_exit_left').animate({ width: '2px' }, 0);
            $('.barcelona_page_top_navigation_links_bottom_search_exit_right').animate({ width: '2px' }, 0);
        }
        else {
            $('.barcelona_page_top_other_searchbar').animate({ height: '0', opacity: '0', display: "none" }, 250);
            $('.barcelona_page_top_navigation_links_bottom_search_icon').animate({ opacity: "1" }, 0);
            $('.barcelona_page_top_navigation_links_bottom_search_exit_left').animate({ width: '0px' }, 0);
            $('.barcelona_page_top_navigation_links_bottom_search_exit_right').animate({ width: '0px' }, 0);
        }
    }
);

$('.barcelona_page_top_other_searchbar_submit_container').click(
    function (){
        var input = $(".barcelona_page_top_other_searchbar_input_textbox").val();
        if(input.length != 0){
            alert(input);
        }
        else {
            alert("INVALID INPUT");
        }
    }
)