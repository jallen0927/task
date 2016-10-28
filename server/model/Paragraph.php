<?php

class Paragraph extends DataModel {

    public $id = 0;

    public $content = '';

    public $words = array();

    public static function get_one($id = null) {
        $paragraph = parent::get_one($id);

        $words = $paragraph->getRelationRecords('word');

        if(!empty($words)) {
            foreach ($words as $word) {
                $letters = $word->getRelationRecords('letter');
                if(!empty($letters)) {
                    foreach ($letters as $letter) {
                        $letter->assignSound();
                    }
                }

                $word->letters = $letters;
            }
        }

        $paragraph->words = $words;
        return $paragraph;
    }

}