<?php
    //thư viện
    require "lib/template.php";
    require "lib/componant_connect.php";

    // điều hướng
    $mod = !empty($_GET['mod'])?$_GET['mod']:'home';
    $act = !empty($_GET['act'])?$_GET['act']:'main';
    $path = "modules/{$mod}/{$act}.php";
    
    if (file_exists($path)){
        // require "$path";
        header("Location: $path");
    } else{
        // get_404();
    }
?>
