<?php

class Request {


    /**
     * @return bool
     * @todo Check if the request is ajax
     */
    public static function isAjax() {
        $headers = getallheaders();

        return true;
    }
}