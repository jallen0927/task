<?php

class Paragraph {

    public function getWords() {

    }

    public static function get_one() {
        $query = 'SELECT l.id AS lid, s.id AS sid FROM letter AS l INNER JOIN sound AS s ON l.sound = s.id WHERE l.id = 1';
        return Database::query($query);
    }
}