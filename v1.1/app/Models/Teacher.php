<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Teacher extends Model
{
    use HasFactory;
    protected $fillable = ['people_id', 'user_id'];
    // People data
    public function people(): HasOne
    {
        return $this->hasOne(Person::class);
    }

    // User data
    public function user(): HasOne
    {
        return $this->hasOne(User::class);
    }
}
