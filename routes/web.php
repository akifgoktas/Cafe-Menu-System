<?php

use App\Http\Controllers\Admin\Admin;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserContreller;

Route::prefix('admin')->group(function () {
    Route::get('/', [Admin::class, 'show']);
    Route::get('/{any}', [Admin::class, 'show'])->where('any', '.*');
});

Route::get('/', function () {
    return view('test');
});


Route::get('/api/usercontrol', [UserContreller::class, 'index']);

Route::post('/api/users/login', [UserContreller::class, 'login'])->middleware('UsersMiddleware');
Route::post('/api/users/resetpassword/{mail}', [UserContreller::class, 'resetpassword'])->middleware('UsersMiddleware');
Route::post('/api/users/resetpasswordcontrol/{code}', [UserContreller::class, 'resetpasswordcontrol'])->middleware('UsersMiddleware');



Route::get('/csrf-token', function () {
    $response = response()->json([
        'csrf_token' => csrf_token(),
    ], 201);
    return $response;
});
