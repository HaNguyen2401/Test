<?php

function link_all_css()
{
    $directory = "componant";

    $files = scandir($directory);

    foreach ($files as $file) {
        if ($file == "." || $file == "..") continue;
        $direct_item = "componant/$file";
        $files_item = scandir($direct_item);
        foreach ($files_item as $file_item) {
            if ($file_item == "." || $file_item == "..") continue;
            if (strpos($file_item, ".css") == false) continue;
            echo "<link rel='stylesheet' href='componant/{$file}/{$file_item}'' type='text/css'>" . "\n";
        }
    }
}


function link_all_js()
{
    $directory = "componant";

    $files = scandir($directory);

    foreach ($files as $file) {
        if ($file == "." || $file == "..") continue;
        $direct_item = "componant/$file";
        $files_item = scandir($direct_item);
        foreach ($files_item as $file_item) {
            if ($file_item == "." || $file_item == "..") continue;
            if (strpos($file_item, ".js") == false) continue;
            echo "<script src='componant/{$file}/{$file_item}'></script>"."\n" ;
        }
    }
}


function get_componant($componant){
    require "componant/{$componant}/{$componant}.php";
}