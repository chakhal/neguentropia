<?php

// no dot in array keys

return [
    'path' => [
        'dropzone'      => ($dropzone = __DIR__.'/_DROPZONE'),
        'root'          => ($root = __DIR__.'/_STORAGE'),
        'metas'         => ($metas = __DIR__.'/_METAS'),
        'classified'   => $root.'/_classified',
        'unclassified'   => $root.'/_unclassified',
    ],
    'deep' => [
        'deeper' => [
            'deepest' => 'azerty'
        ]
    ]
];


