<?php

use Illuminate\Database\Seeder;
use App\Models\Role;

class RolesTableSeeder extends Seeder
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
        DB::table('roles')->truncate();
 
        $roles = [
            'guest',
            'admin',
            'staff',
            'customer'
        ];

        $rolename = [
            'User Guest',
            'User Admin',
            'User Staff',
            'User Customer'
        ];
 
        foreach ($roles as $index => $role) {
            Role::create([
                'role' => $role,
                'rolename'=> $rolename[$index]
            ]);
        }
 
        Schema::enableForeignKeyConstraints();
    }
}
