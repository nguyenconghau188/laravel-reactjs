<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginFormRequest;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    // login api
    public function login(LoginFormRequest $request) {
        $credentials = $request->only('username', 'password');
        error_log('login with: '.$credentials['username'].' - password: '.$credentials['password']);
        if (!($token = JWTAuth::attempt($credentials))) {
            return response()->json([
                'status' => 'error',
                'error' => 'invalid.credentials',
                'msg' => 'Invalid credentials.'
            ], Response::HTTP_BAD_REQUEST);
        }
        $user = Auth::user();
        return response()->json(
                [
                    'token' => $token,
                    'user' => $user
                ], Response::HTTP_OK);
    }

    public function user(Request $request)
    {
        $user = Auth::user();

        if ($user) {
            return response([
                'user' => $user
            ], Response::HTTP_OK);
        }

        return response(null, Response::HTTP_BAD_REQUEST);
    }

    public function refresh()
    {
        return response(JWTAuth::getToken(), Response::HTTP_OK);
    }
}
