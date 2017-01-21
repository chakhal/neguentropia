<?php

// Same as error_reporting(E_ALL);
ini_set('error_reporting', E_ALL);

require_once __DIR__.'/../../vendor/autoload.php';

require_once __DIR__.'/../helpers.php';
$env = include __DIR__.'/../env.php';


// $fly = new League\Flysystem\File();

// Requests from the same server don't have a HTTP_ORIGIN header
if (!array_key_exists('HTTP_ORIGIN', $_SERVER)) {
    $_SERVER['HTTP_ORIGIN'] = $_SERVER['SERVER_NAME'];
}


// var_dump($_SERVER);
// echo '---';
// die;


try {
    $API = new Chakhal\Neguentropia\Api\FileApi(
                ltrim($_SERVER['REQUEST_URI'],'/'),
                $_SERVER['HTTP_ORIGIN'],
                env_get('path.root'
            )
    );

    echo $API->processAPI();
} catch (Exception $e) {
    echo json_encode(Array('error' => $e->getMessage()));
}
