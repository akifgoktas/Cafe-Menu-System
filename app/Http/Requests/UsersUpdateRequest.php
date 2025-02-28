<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class UsersUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules()
    {
        return [
            'full_name'     => 'max:255',
            'email'         => 'email',
            'phone_number'  => 'regex:/^\d{10,11}$/',
            'password'      => 'min:8|max:16',
            'address'       => 'max:255',
            'cafe_name'     => 'max:255',
        ];
    }

    public function messages()
    {
        return [
            'email.email'                   => 'Lütfen geçerli bir e-posta adresi girin.',
            'phone_number.regex'            => 'Telefon numarası sadece rakamlardan oluşmalıdır.',
            'phone_number.digits_between'   => 'Telefon numarası 10 ile 11 basamak arasında olmalıdır.',
            'password.min'                  => 'Parola en az 8 karakter uzunluğunda olmalıdır.',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                'status'  => false,
                'message' => 'Girilen alanlar doğru formatta olmalıdır',
                'errors'  => $validator->errors()
            ], 201)
        );
    }
}
