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

    /**
     * @param $query
     * @return resource
     * @throws Exception
     * Handle database query
     */
    public static function query($query) {
        if(!self::check_connection()) {
            throw new Exception('Please establish a valid database connection first.');
        }
        $sanitizedQuery = pg_escape_string($query);
        $result = pg_query(self::$connection, $sanitizedQuery);

        if(!$result) {
            $error = pg_last_error(self::$connection);
            throw new Exception($error);
        }

        return $result;
    }

    /**
     * @return bool
     * Check if there is an OK database connection
     */
    public static function check_connection() {
        if(self::$db && self::$connection && pg_connection_status(self::$connection) === PGSQL_CONNECTION_OK) {
            return true;
        }

        return false;
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