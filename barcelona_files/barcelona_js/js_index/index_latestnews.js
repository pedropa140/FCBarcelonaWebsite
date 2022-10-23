var position = "left";

$('.barcelona_page_middle_latestnews_article_middle_content_text_description').animate({
    display: "none",
    opacity: "0",
    'font-size': "0px",
}, 0);
$('.barcelona_page_middle_latestnews_article_right_content_text_description').animate({
    display: "none",
    opacity: "0",
    'font-size': "0px",
}, 0);

//368.2px
//588.52px

$('.barcelona_page_middle_latestnews_article_left').hover(
    function () {
        if (position != "left" && position == "middle") {
            position = "left";
            $('.barcelona_page_middle_latestnews_article_left').animate({
                width: "60%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_image').animate({
                height: "100%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_content_text_title').animate({
                'font-size': "32px",
                width: "768px",
                'padding-left': "40px",
                'padding-right': "40px",
                'line-height': "35.2px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_content_text_barcatv').animate({
                width: "768px",
                height: "38px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_content_text_description').animate({
                display: "block",
                opacity: "1",
                'font-size': "14px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_effect').animate({
                height: "588.52px",
            });

            $('.barcelona_page_middle_latestnews_article_middle').animate({
                width: "20%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_image').animate({
                height: "91.2089696%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_content_text_title').animate({
                'font-size': "16px",
                width: "384px",
                'padding-left': "20px",
                'padding-right': "20px",
                'line-height': "17.6px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_content_text_barcatv').animate({
                width: "384px",
                height: "19px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_content_text_description').animate({
                display: "none",
                opacity: "0",
                'font-size': "0px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_effect').animate({
                height: "368.2px",
            });
        }
        if (position != "left" && position == "right") {
            position = "left";
            $('.barcelona_page_middle_latestnews_article_left').animate({
                width: "60%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_image').animate({
                height: "100%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_content_text_title').animate({
                'font-size': "32px",
                width: "768px",
                'padding-left': "40px",
                'padding-right': "40px",
                'line-height': "35.2px",
                'line-height': "35.2px",
                'line-height': "35.2px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_content_text_barcatv').animate({
                width: "768px",
                height: "38px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_content_text_description').animate({
                display: "block",
                opacity: "1",
                'font-size': "14px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_effect').animate({
                height: "588.52px",
            });

            $('.barcelona_page_middle_latestnews_article_right').animate({
                width: "20%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_image').animate({
                height: "91.2089696%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_content_text_title').animate({
                'font-size': "16px",
                width: "384px",
                'padding-left': "20px",
                'padding-right': "20px",
                'line-height': "17.6px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_content_text_barcatv').animate({
                width: "384px",
                height: "19px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_content_text_description').animate({
                display: "none",
                opacity: "0",
                'font-size': "0px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_effect').animate({
                height: "368.2px",
            });
        }
    }
);
$('.barcelona_page_middle_latestnews_article_middle').hover(
    function () {
        if (position != "middle" && position == "left") {
            position = "middle";
            $('.barcelona_page_middle_latestnews_article_left').animate({
                width: "20%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_image').animate({
                height: "91.2089696%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_content_text_barcatv').animate({
                width: "384px",
                height: "19px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_content_text_title').animate({
                'font-size': "16px",
                width: "384px",
                'padding-left': "20px",
                'padding-right': "20px",
                'line-height': "17.6px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_content_text_description').animate({
                display: "none",
                opacity: "0",
                'font-size': "0px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_effect').animate({
                height: "368.2px",
            });

            $('.barcelona_page_middle_latestnews_article_middle').animate({
                width: "60%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_image').animate({
                height: "100%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_content_text_title').animate({
                'font-size': "32px",
                width: "768px",
                'padding-left': "40px",
                'padding-right': "40px",
                'line-height': "35.2px",
                'line-height': "35.2px",
                'line-height': "35.2px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_content_text_barcatv').animate({
                width: "768px",
                height: "38px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_content_text_description').animate({
                display: "block",
                opacity: "1",
                'font-size': "14px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_effect').animate({
                height: "588.52px",
            });
        }
        if (position != "middle" && position == "right") {
            position = "middle";
            $('.barcelona_page_middle_latestnews_article_middle').animate({
                width: "60%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_image').animate({
                height: "100%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_content_text_title').animate({
                'font-size': "32px",
                width: "768px",
                'padding-left': "40px",
                'padding-right': "40px",
                'line-height': "35.2px",
                'line-height': "35.2px",
                'line-height': "35.2px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_content_text_barcatv').animate({
                width: "768px",
                height: "38px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_content_text_description').animate({
                display: "block",
                opacity: "1",
                'font-size': "14px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_effect').animate({
                height: "588.52px",
            });

            $('.barcelona_page_middle_latestnews_article_right').animate({
                width: "20%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_image').animate({
                height: "91.2089696%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_content_text_title').animate({
                'font-size': "16px",
                width: "384px",
                'padding-left': "20px",
                'padding-right': "20px",
                'line-height': "17.6px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_content_text_barcatv').animate({
                width: "384px",
                height: "19px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_content_text_description').animate({
                display: "none",
                opacity: "0",
                'font-size': "0px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_effect').animate({
                height: "368.2px",
            });
        }
    }
);
$('.barcelona_page_middle_latestnews_article_right').hover(
    function () {
        if (position != "right" && position == "left") {
            position = "right";
            $('.barcelona_page_middle_latestnews_article_left').animate({
                width: "20%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_image').animate({
                height: "91.2089696%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_content_text_title').animate({
                'font-size': "16px",
                width: "384px",
                'padding-left': "20px",
                'padding-right': "20px",
                'line-height': "17.6px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_content_text_barcatv').animate({
                width: "384px",
                height: "19px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_content_text_description').animate({
                display: "block",
                opacity: "1",
                'font-size': "14px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_effect').animate({
                height: "368.2px",
            });

            $('.barcelona_page_middle_latestnews_article_right').animate({
                width: "60%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_image').animate({
                height: "100%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_content_text_title').animate({
                'font-size': "32px",
                width: "768px",
                'padding-left': "40px",
                'padding-right': "40px",
                'line-height': "35.2px",
                'line-height': "35.2px",
                'line-height': "35.2px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_content_text_barcatv').animate({
                width: "768px",
                height: "38px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_left_content_text_description').animate({
                display: "none",
                opacity: "0",
                'font-size': "0px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_effect').animate({
                height: "588.52px",
            });
        }
        if (position != "right" && position == "middle") {
            position = "right";
            $('.barcelona_page_middle_latestnews_article_middle').animate({
                width: "20%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_image').animate({
                height: "91.2089696%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_content_text_title').animate({
                'font-size': "16px",
                width: "384px",
                'padding-left': "20px",
                'padding-right': "20px",
                'line-height': "17.6px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_content_text_barcatv').animate({
                width: "384px",
                height: "19px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_content_text_description').animate({
                display: "block",
                opacity: "1",
                'font-size': "14px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_effect').animate({
                height: "368.2px",
            });

            $('.barcelona_page_middle_latestnews_article_right').animate({
                width: "60%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_image').animate({
                height: "100%",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_content_text_title').animate({
                'font-size': "32px",
                width: "768px",
                'padding-left': "40px",
                'padding-right': "40px",
                'line-height': "35.2px",
                'line-height': "35.2px",
                'line-height': "35.2px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_content_text_barcatv').animate({
                width: "768px",
                height: "38px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_middle_content_text_description').animate({
                display: "none",
                opacity: "0",
                'font-size': "0px",
            }, 250);
            $('.barcelona_page_middle_latestnews_article_right_effect').animate({
                height: "588.52px",
            });
        }
    }
);