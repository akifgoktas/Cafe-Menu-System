<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Session;
use App\Http\Requests\UsersRegisterRequest;
use App\Http\Requests\UsersLoginRequest;
use App\Models\UsersModel;

class UserContreller extends Controller
{

    private function mailControl($user_email)
    {
        $exists = UsersModel::where('email', $user_email)->exists();
        return $exists;
    }

    private function phoneNumberControl($user_phone_number)
    {
        $exists = UsersModel::where('phone_number', $user_phone_number)->exists();
        return $exists;
    }

    public function usercontrol()
    {
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

    public function login(UsersLoginRequest $request)
    {
        try {
            $user_login = UsersModel::where('email', $request->email)->where('password', $request->password)->first();
            if ($user_login) {
                Session::put([
                    'user_status'   => true,
                    'user_id'       => $user_login->id
                ]);
                $response = response()->json([
                    'status'    => true,
                    'user_status'   => true,
                    'message'   => 'Giriş yapıldı: ',
                ], 201);
            } else {
                $response = response()->json([
                    'status'    => false,
                    'message'   => 'Mail veya şifreniz hatalı'
                ], 201);
            }
        } catch (\Throwable $th) {
            $response = response()->json([
                'status'    => false,
                'message'   => 'Giriş yaparken bir hata meydana geldi: ' . $th->getMessage()
            ], 201);
        }
        return $response;
    }

    public function register(UsersRegisterRequest $request)
    {
        $user_email        = $this->mailControl($request->email);
        $user_phone_number = $this->phoneNumberControl($request->phone_number);

        if ($user_email === true || $user_phone_number === true) {
            $message = ($user_email === true)
                ? 'Bu mail ile daha önce kayıt yaptırılmış.'
                : 'Bu telefon numarası ile daha önce kayıt yaptırılmış.';

            return response()->json([
                'status'  => false,
                'message' => 'Kullanıcı Eklenemedi: ' . $message
            ], 201);
        }

        try {
            $validated_data = $request->validated();
            $validated_data['slug'] = Str::slug($validated_data['cafe_name']);
            $user_save = UsersModel::create($validated_data);
            if ($user_save) {
                return response()->json([
                    'status'  => true,
                    'message' => 'Kaydınız başarılı bir şekilde yapılmıştır.'
                ], 201);
            } else {
                return response()->json([
                    'status'  => false,
                    'message' => 'Kullanıcı kaydı yapılamadı.'
                ], 201);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status'  => false,
                'message' => 'Kullanıcı Eklenemedi: ' . $th->getMessage()
            ], 201);
        }
    }

    public function resetpassword($mail)
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

    public function resetpasswordcontrol($code)
    {
        $confirmation_code = Session::get('confirmation_code');
        $response = response()->json([
            'status'    => false,
            'message'   => 'şifreniz otomatik olarak değiştirilmiş ve mailnize gönderilmiştir: ' . $code
        ], 201);

        return $response;
    }
}
