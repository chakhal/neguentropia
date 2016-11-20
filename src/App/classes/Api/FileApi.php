<?php 
namespace Chakhal\Neguentropia\Api;

use League\Flysystem\Filesystem;
use League\Flysystem\Adapter\Local;

class FileApi extends Api
{
    // protected $User;

    protected $filesystem;


    public function __construct($request, $origin, $root_path) {
        parent::__construct($request);

        // // Abstracted out for example
        // $APIKey = new Models\APIKey();
        // $User = new Models\User();

        // if (!array_key_exists('apiKey', $this->request)) {
        //     throw new Exception('No API Key provided');
        // } else if (!$APIKey->verifyKey($this->request['apiKey'], $origin)) {
        //     throw new Exception('Invalid API Key');
        // } else if (array_key_exists('token', $this->request) &&
        //      !$User->get('token', $this->request['token'])) {

        //     throw new Exception('Invalid User Token');
        // }

        // $this->User = $User;

        $adapter = new Local($root_path);
        $this->filesystem = new Filesystem($adapter);
    }

    /**
     * Example of an Endpoint
     */
     protected function files() {
        if ($this->method == 'GET') {
            $path = '';
            if (isset($this->request['path'])) {
                $path = $this->request['path'];
            }

            return $this->filesystem->listContents($path, true);
        } else {
            return "Only accepts GET requests";
        }
     }
 }
