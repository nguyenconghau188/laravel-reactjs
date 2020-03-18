<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Commons\CommonFunctions;

class CreateUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Schema::disableForeignKeyConstraints();
        DB::table('users')->truncate();
 
        $user = [CommonFunctions::generateUuid(), 'Nguyen Cong Hau', bcrypt('123456'), 'nguyenconghau188@gmail.com', '2', '2'];
 
        User::create([
            'uuid' => $user[0],
            'name' => $user[1],
            'password' => $user[2],
            'email' => $user[3],
            'role' => $user[4],
            'status' => $user[5],
            'email_verified_at' => now(),
            'phone_number' => '0358949152',
        ]);

        factory(User::class, 999)->create();
 
        Schema::enableForeignKeyConstraints();
    }
}
