<?php

class Database {

    /**
     * @var
     * Database connection resource;
     */
    private $connection;

    /**
     * Database constructor.
     * @param array $parameters
     * Connect to database on construct
     */
    public function __construct(array $parameters) {
        $this->connect($parameters);
    }

    /**
     * @return mixed
     * Get current connection resource
     */
    public function getConnection() {
        return $this->connection;
    }

    /**
     * @param array $parameters
     * Connect to database and set connection resource
     */
    private function connect(array $parameters) {
        $parametersProcessed = array();
        foreach ($parameters as $k => $v) {
            $parametersProcessed[] = $k . '=' . $v;
        }
        $parametersString = join(' ', $parametersProcessed);
        $connection = pg_connect($parametersString);

        if(!$connection) {
            user_error('Database connection failed', E_USER_ERROR);
        }

        $this->connection = $connection;
    }

    public function query($query) {

    }

    /**
     * Close connection if necessary. Normally we don't need this unless connection is a persistent connection.
     */
    public function close() {
        if($this->connection) {
            pg_close($this->connection);
        }
    }

}