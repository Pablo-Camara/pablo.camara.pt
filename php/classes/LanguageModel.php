<?php

namespace Translation;

class Language {

    private $defaultLanguage;

    
    function construct($defaultLanguage){

        if(!empty($defaultLanguage)){
            $this->defaultLanguage = $defaultLanguage;
        } else {
            $this->defaultLanguage = $this->getDefaultLanguage();
        }

    }

    public function isLanguageSupported($lang){
        return in_array($lang,$this->getSupportedLanguages());
    }

    private function getSupportedLanguages(){
        return ['pt','es','en'];
    }

    public function setDefaultLanguage($lang){
        if($this->isLanguageSupported($lang)){
            $this->defaultLanguage = $lang;
            return true;
        }
        return false;
    }

    public function getDefaultLanguage(){
        return $this->defaultLanguage;
    }



}