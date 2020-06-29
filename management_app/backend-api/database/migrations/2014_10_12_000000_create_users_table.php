<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id')->unique();
            $table->string('username')->unique();
            $table->string('password');
            $table->string('fullname')->nullable();
            $table->string('email')->unique();
            $table->string('phone_number')->unique();
            $table->timestamp('birthday')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->tinyInteger('role')->default('1');
            $table->tinyInteger('status')->default('1')->comment('1: inactived; 2: actived; 3: banned');
            $table->uuid('created_user')->nullable();
            $table->uuid('updated_user')->nullable();
            $table->timestamps();
            $table->primary('id');
            $table->index(['id', 'email']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
