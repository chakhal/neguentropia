<?php

function get_arrayitem_bypath(array $array, $path)
{
    $key_path = explode('.', $path);

    if (is_array($key_path)) {
        reset($key_path);
        $curr = $array;
        do {
            $curr = $curr[current($key_path)];

        } while (next($key_path) !== false);
    }

    return $curr;
}

function env_get ($key)
{
    global $env;

    return get_arrayitem_bypath($env, $key);
}
