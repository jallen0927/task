<?php

class Letter extends DataModel {

    public $id = 0;

    public $content = '';

    public $sound = 0;

    public $word = 0;

    public $word_index = 0;

    /**
     * @var string
     * Property from sound table
     */
    public $sound_label = '';

    /**
     * @var string
     * Property from sound table
     */
    public $sound_code = 0;

    public static function get_one($id = null) {
        $letter = parent::get_one($id);

        return $letter->assignSound();
    }

    public function assignSound() {
        $sounds = $this->getRelationRecords('Sound', true);
        if(!empty($sounds)) {
            $sound = $sounds[0];
            $this->sound_label = $sound->label;
            $this->sound_code = $sound->code;
        }

        return $this;
    }

}