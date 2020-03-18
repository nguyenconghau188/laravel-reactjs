<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;
use App\Commons\CommonFunctions;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    $status = rand(1, 4);
    $role = rand(1,5);
    return [
        'uuid' => CommonFunctions::generateUuid(),
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => $status !== 1 ? now() : null,
        'password' => bcrypt('123456'), // password
        'role' => $role,
        'status' => $status,
        'phone_number' => $faker->unique()->phoneNumber,
    ];
});
