<?php

namespace App\Repositories\Contracts;

interface TaskRepositoryInterface {
    public function all();
    public function find($id);
}