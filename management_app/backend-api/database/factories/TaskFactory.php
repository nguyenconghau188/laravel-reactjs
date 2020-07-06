<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Task;
use Faker\Generator as Faker;

$factory->define(Task::class, function (Faker $faker) {
    return [
        'name' => $faker->jobTitle,
        'description' => $faker->realText(100),
        'status' => rand(0,2),
        'created_user' => 'a91a4d6232ffa75d7a1bf7d81ad1f598',
        'created_at' => $faker->dateTime
    ];
});
