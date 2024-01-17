<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class EducationLevel extends Model
{
    use HasFactory;
    protected $fillable = ['name'];

    public function courses(): BelongsToMany
    {
        return $this->belongsToMany(Course::class, 'course_levels');
    }
}
