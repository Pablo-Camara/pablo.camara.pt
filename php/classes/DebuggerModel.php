<?php

namespace Debugger;

class DebuggerModel {

    private $isEnabled;

    function constructor($isEnabled){
        $this->isEnabled = $isEnabled;
    }

    public function isEnabled(){
        return $this->isEnabled;
    }

    public function enable(){
        $this->isEnabled = true;
    }

    public function disable(){
        $this->isEnabled = false;
    }

}