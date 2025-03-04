<?php

use App\Http\Controllers\Admin\Admin;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserContreller;

Route::prefix('admin')->group(function () {
    Route::get('/', [Admin::class, 'show'])->name('admin');
    Route::get('/{any}', [Admin::class, 'show'])->where('any', '.*');
});

Route::get('/', function () {
    return view('test');
});


Route::get('/api/users/usercontrol', [UserContreller::class, 'usercontrol']);
Route::post('/api/users/userdetail/{user_id}', [UserContreller::class, 'userdetail'])->middleware('UsersMiddleware');
Route::put('/api/users/update/{user_id}', [UserContreller::class, 'update'])->middleware('UsersMiddleware');




Route::post('/api/users/login', [UserContreller::class, 'login']);
Route::post('/api/users/register', [UserContreller::class, 'register']);
Route::post('/api/users/logout', [UserContreller::class, 'logout']);
Route::post('/api/users/resetpassword/{mail}', [UserContreller::class, 'resetpassword']);
Route::post('/api/users/resetpasswordcontrol/{code}', [UserContreller::class, 'resetpasswordcontrol']);
