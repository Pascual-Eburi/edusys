<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Student extends Model
{
    use HasFactory;
    protected $fillable = [];

    // People data
    public function people() : HasOne {
        return $this->hasOne(Person::class);
    }

    // Enrollments
    public function enrolments() : HasMany {
        return $this->hasMany(Enrolment::class);
    }
}
