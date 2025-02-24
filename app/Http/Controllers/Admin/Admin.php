<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class Admin extends Controller
{
    public function show()
    {
        return view('admin');
    }
}
