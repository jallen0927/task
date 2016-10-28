<?php

class Database {

    /**
     * @var
     * Database connection resource;
     */
    private static $connection;

    /**
     * @var
     * Singleton Database instance
     */
    private static $db;

    /**
     * Database constructor.
     * Database should always be singleton and cannot be created outside, please use Database::get() to get a Database instance
     */
    private function __construct() { }

    /**
     * @return Database
     * Get a singleton Database instance
     */
    public static function get() {

        if(!self::$db) {

            self::$db = new self();

        }

        return self::$db;
    }

    /**
     * @param array $parameter
     * @return Database|null
     * Bootstrap and connect to database
     */
    public static function bootstrap(array $parameter) {
        $db = self::get();
        $db->connect($parameter);

        return $db;
    }

    /**
     * @return mixed
     * Get current connection resource
     */
    public static function get_connection() {
        return self::$connection;
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

        self::$connection = $connection;
    }

    public static function query($query) {
        $sanitizedQuery = pg_escape_string($query);
        $result = pg_query(self::$connection, $sanitizedQuery);
        var_dump($result);
        $row = pg_fetch_object($result);
        $rows = pg_fetch_assoc($result);
        var_dump($row); die;
    }

    /**
     * Close connection if necessary. Normally we don't need this unless connection is a persistent connection.
     */
    public static function close() {
        if(self::$connection) {
            pg_close(self::$connection);
        }
    }

}