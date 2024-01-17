<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Course extends Model
{
    use HasFactory;
    protected $fillable = ['name'];

    /**
     * The sections that belong to the course.
     */
    public function sections(): BelongsToMany
    {
        return $this->belongsToMany(Section::class);
    }
}
