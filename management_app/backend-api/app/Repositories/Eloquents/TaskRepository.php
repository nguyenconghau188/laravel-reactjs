<?php

namespace App\Repositories\Eloquents;

use App\Repositories\Contracts\TaskRepositoryInterface;
use App\Models\Task;

class TaskRepository implements TaskRepositoryInterface {
    
    public function all() {
        return Task::all();
    }

    public function find($id) {
        return Task::find($id);
    }
}