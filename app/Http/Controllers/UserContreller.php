<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class UserContreller extends Controller
{
    public function index()
    {
        Session::put([
            'user_status'   => false,
            'user_id'       => 1
        ]);
        if (Session::get('user_status') === true) {
            $response = response()->json([
                'status'        => true,
                'user_status'   => true,
                'message'       => 'Kullanıcı oturumu açık'
            ], 201);
        } else {
            $response = response()->json([
                'status'        => false,
                'user_status'   => false,
                'message'       => 'Kullanıcı oturumu kapalı'
            ], 201);
        }
        return $response;
    }

    public function login()
    {
        return "login";
    }

    public function resetpassword(Request $request, $mail)
    {
        Session::put([
            'confirmation_code'   => 452323,
        ]);
        $response = response()->json([
            'status'        => true,
            'user_status'   => false,
            'message'       => 'şifre sıfırlama için mailinize onay kodu gönderilmiştir mail: ' . $mail,
        ], 201);

        return $response;
    }


    public function resetpasswordcontrol(Request $request, $code)
    {
        $confirmation_code = Session::get('confirmation_code');
        $response = response()->json([
            'status'    => false,
            'message'   => 'şifreniz otomatik olarak değiştirilmiş ve mailnize gönderilmiştir: ' . $code
        ], 201);

        return $response;
    }
}
