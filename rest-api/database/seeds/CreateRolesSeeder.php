<?php

use Illuminate\Database\Seeder;
use App\Models\Role;

class CreateRolesSeeder extends Seeder
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
            'no_roles',
            'admin',
            'staff',
            'customer',
            'guest',
        ];
 
        foreach ($roles as $role) {
            Role::create([
                'role_name' => $role
            ]);
        }
    }
}
