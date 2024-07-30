<?php

if (! function_exists('flashMessage')) {
    function flashMessage($type, $message): void
    {
        session()->flash('type', $type);
        session()->flash('message', $message);
    }
}
