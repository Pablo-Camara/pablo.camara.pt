<?php

class Caching {

    private $isEnabled;
    private $cacheDate;

    function constructor($isEnabled,$defaultCacheDate){
        $this->isEnabled = $isEnabled;
        $this->setDefaultCacheDate($defaultCacheDate);
        $this->getCacheDate();
    }

    public function setDefaultCacheDate($defaultCacheDate){
        $this->cacheDate = $defaultCacheDate;
    }

    public function getCacheDate(){

        if($this->isEnabled === false){
            $this->cacheDate = date('Y-m-d H:i:s');
        }
        return $this->cacheDate;
    }

    public function isEnabled(){
        return $this->isEnabled;
    }

    public function disable(){
        $this->cacheDate = $this->getDefaultCacheData();
        $this->isEnabled = false;
    }
}