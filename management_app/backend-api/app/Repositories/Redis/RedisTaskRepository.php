<?php

namespace App\Repositories\Redis;

use App\Repositories\Contracts\TaskRepositoryInterface;
// use App\Models\Task;

class RedisTaskRepository implements TaskRepositoryInterface {
    
    public function all() {
        return "Get all tasks";
    }

    public function find($id) {
        return "Get task with id ".$id;
    }

}