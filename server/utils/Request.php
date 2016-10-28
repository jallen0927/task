<?php

class Request {

    public static function isAjax() {
        $headers = getallheaders();
    }
}