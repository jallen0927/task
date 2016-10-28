<?php

define('SERVER_PATH', dirname(__FILE__));

require_once(SERVER_PATH . '/config.php');
require_once(SERVER_PATH . '/model/Database.php');
require_once(SERVER_PATH . '/model/DataModel.php');
require_once(SERVER_PATH . '/model/Sound.php');
require_once(SERVER_PATH . '/model/Letter.php');
require_once(SERVER_PATH . '/model/Word.php');
require_once(SERVER_PATH . '/model/Paragraph.php');

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

Database::bootstrap($databaseConfig);

$paragraph = Paragraph::get_one();