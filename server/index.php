<?php
/**
 * @todo Handle router for different api call
 * @todo Trim unused properties data for json response to optimize data size sent to client end
 * @todo Unit Test
 */

define('SERVER_PATH', dirname(__FILE__));

require_once(SERVER_PATH . '/config.php');
require_once(SERVER_PATH . '/utils/Response.php');
require_once(SERVER_PATH . '/utils/Database.php');
require_once(SERVER_PATH . '/models/DataModel.php');
require_once(SERVER_PATH . '/models/Sound.php');
require_once(SERVER_PATH . '/models/Letter.php');
require_once(SERVER_PATH . '/models/Word.php');
require_once(SERVER_PATH . '/models/Paragraph.php');

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

$paragraph = Paragraph::get();
Response::json_response($paragraph);