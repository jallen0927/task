<?php

/**
 * Created by PhpStorm.
 * User: xlin
 * Date: 28/10/16
 * Time: 8:29 PM
 */
class DataModel {

    public $id = 0;

    /**
     * @param null $id
     * @return bool
     * Get one record from database; Get by id if id provided;
     */
    public static function get_one($id = null) {
        $class = get_called_class();
        $obj = new $class();
        $query = 'SELECT * FROM ' . strtolower($class);

        if($id && is_numeric($id)) {
            $query .= " WHERE id = $id";
        }

        $result = Database::query($query);
        $row = pg_fetch_assoc($result);

        return $row ? $obj->update($row) : false;
    }

    /**
     * @param $relation
     * @return array
     * Get relation records of current data object
     */
    public function getRelationRecords($relation) {
        $records = array();
        if(!$this->id) return $records;
        $class = get_called_class();
        $query = "SELECT * FROM " . strtolower($relation) . " AS relation INNER JOIN " . strtolower($class) . " AS self ON self.id = relation." . strtolower($class);
        $result = Database::query($query);
        $rows = pg_fetch_all($result);

        if(empty($rows)) return $records;

        foreach ($rows as $row) {
            $record = new $relation();
            $record->update($row);
            $records[] = $record;
        }

        return $records;
    }

    /**
     * @param array $data
     * @return $this
     * Update object properties with data in given array;
     */
    public function update(array $data) {
        if(empty($data)) return $this;

        foreach ($data as $k => $v) {
            $this->{$k} = $v;
        }

        return $this;
    }

}