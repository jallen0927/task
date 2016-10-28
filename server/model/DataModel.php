<?php

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
     * @param bool $reverse
     * @return array
     * Get relation records of current data object;
     */
    public function getRelationRecords($relation, $reverse = false) {
        $records = array();
        if(!$this->id) return $records;
        $class = get_called_class();
        if($reverse) {
            $query = "SELECT relation.* FROM " . strtolower($relation) . " AS relation INNER JOIN " . strtolower($class) . " AS self ON self." . strtolower($relation) . " = relation.id WHERE self.id = " . $this->id;
        } else {
            $query = "SELECT relation.* FROM " . strtolower($relation) . " AS relation INNER JOIN " . strtolower($class) . " AS self ON self.id = relation." . strtolower($class) . " WHERE self.id = " . $this->id;
        }
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