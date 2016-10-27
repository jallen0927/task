<?php

define('SERVER_PATH', dirname(__FILE__) . '/server');
define('CLIENT_PATH', dirname(__FILE__) . '/client');

require_once(SERVER_PATH . '/config.php');
require_once(SERVER_PATH . '/database.php');

foreach (array(
    'DATABASE_NAME',
    'DATABASE_USERNAME',
    'DATABASE_PASSWORD') as $parameter) {
    if(!defined($parameter)) {
        user_error('Please define ' . $parameter . ' in config.php');
    }
}

$databaseConfig['dbname'] = DATABASE_NAME;
$databaseConfig['user'] = DATABASE_USERNAME;
$databaseConfig['password'] = DATABASE_PASSWORD;
$databaseConfig['host'] = defined('DATABASE_HOST') ? DATABASE_HOST : 'localhost';
$databaseConfig['port'] = defined('DATABASE_PORT') ? DATABASE_PORT : '5432';

$database = new Database($databaseConfig);

var_dump($database->getConnection()); die;