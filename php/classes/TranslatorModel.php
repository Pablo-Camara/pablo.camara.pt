<?php
namespace Translation;

class Translator {

    private $strings;
    private $language;

    function constructor($defaultLanguage){
        $this->language = new Language($defaultLanguage);
    }

    public function getByKey($stringKey){
        return self::strings[$stringKey][$this->language->getDefaultLanguage()];
    }

    public function setLanguage($languageModel){
        $this->language = $languageModel;
    }

    public function getLanguage(){

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
        
        if($this->isLanguageSupported($_GET['lang']))$lang = 'en'; // Defaults to English

        return $lang;
    }


    public static function wasLanguageSelectedByUser(){
        if(session_status() !== PHP_SESSION_ACTIVE)session_start();
        return isset($_SESSION['lang_selected_by_user']);
    }
  


}