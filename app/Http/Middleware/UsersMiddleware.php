<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class UsersMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $user_id = (int) $request->user_id;
        $user_status = Session::get('user_status');

        if (!Session::has('user_status') || $user_status === false || $user_id !== Session::get('user_id')) {
            return response()->json([
                'status' => false,
                'message' => 'Bu işlemi yapmaya yetkiniz yok.',
            ], 201);
        }
        return $next($request);
    }
}
