<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Person extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'last_name', 'dob', 'avatar', 'gender'];

    /**
     * Get the person`s contacts.
     */
    public function contacts() : HasMany {
        return $this->hasMany(Contact::class);
    }
}
