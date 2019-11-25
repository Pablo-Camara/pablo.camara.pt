<?php

class Translation {

    private $strings;
    private $lang;

    function __construct($stringsArr,$defaultLang) {
        $this->strings = $stringsArr;
        $this->lang = $defaultLang;
    }

    public function get($string_key){
        return $this->strings[$string_key][$this->lang];
    }

    public static function getLanguage(){
        if(session_status() !== PHP_SESSION_ACTIVE)session_start();
        $lang = !empty($_GET['lang']) ? $_GET['lang'] : null;

        if(!empty($lang)){
            $_SESSION['lang'] = $lang;
            $_SESSION['lang_selected_by_user'] = true;
        } else {
            if(!empty($_SESSION['lang'])){
                $lang = $_SESSION['lang'];
            } 
        }
        
        if(empty($lang) || !in_array($lang,['pt','en','es']))$lang = 'en'; // Defaults to English

        return $lang;
    }


    public static function wasLanguageSelectedByUser(){
        if(session_status() !== PHP_SESSION_ACTIVE)session_start();
        return isset($_SESSION['lang_selected_by_user']);
    }
  


}