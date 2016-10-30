<?php

class Response {

    /**
     * @param $data
     * Handle json response from given data
     */
    public static function json_response($data) {
        $json = json_encode($data);
        header("Access-Control-Allow-Origin: *");
        header('Content-Type: application/json');
        echo $json;
    }
}