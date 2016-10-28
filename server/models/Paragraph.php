<?php

class Paragraph extends DataModel {

    public $id = 0;

    public $content = '';

    public $words = array();

    /**
     * @param null $id
     * @return bool
     * Get one Paragraph along with it's full data
     */
    public static function get_one($id = null) {
        $paragraph = parent::get_one($id);
        $paragraph->getFullData();

        return $paragraph;
    }

    public static function get() {
        $paragraphs = array();
        $class = get_called_class();
        $query = 'SELECT * FROM ' . strtolower($class);
        $result = Database::query($query);
        $rows = pg_fetch_all($result);
        if(!empty($rows)) {
            foreach ($rows as $row) {
                $paragraph = new Paragraph();
                $paragraph->update($row);
                $paragraph->getFullData();
                $paragraphs[] = $paragraph;
            }
        }

        return $paragraphs;
    }

    /**
     * @return $this
     * Get full data for the Paragraph
     */
    public function getFullData() {
        $words = $this->getRelationRecords('word');

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

        $this->words = $words;
        return $this;
    }

}