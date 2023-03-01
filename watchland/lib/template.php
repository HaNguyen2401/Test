<?php


function get_link_all_css(){
    require 'inc/link_all_css.php';
}

function get_link_all_js(){
    require 'inc/link_all_js.php';
}

function get_margin_box($value){
    for ($i=1;$i<=$value;$i++){
        require 'inc/margin_box.php';
    }
}

function get_navi(){
    require 'inc/navigation.php';
}

?>