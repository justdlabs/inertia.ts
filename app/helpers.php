<?php

if (! function_exists('flash')) {
    function flash($message, array $data = [], $type = 'success'): void
    {
        session()->flash('message', $message);
        session()->flash('type', $type);
        if (is_array($data)) {
            session()->flash('data', $data);
        }
    }
}
