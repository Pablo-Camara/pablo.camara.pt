<?php

namespace SessionManager;

class Session {

    private $isEnabled;
    function contructor($isEnabled){
        $this->isEnabled = $isEnabled;
        
        if($isEnabled) {
            $this->enable();
        } else {
            $this->disable();
        }
    }

    public function isEnabled(){
        return $isEnabled;
    }

    public function enable(){
        if(session_status() !== PHP_SESSION_ACTIVE)session_start();
        $this->isEnabled = true;
    }

    public function disable(){
        if(session_status() !== PHP_SESSION_ACTIVE)session_start();
        session_unset();
        session_destroy();
        $this->isEnabled = false;
    }


}