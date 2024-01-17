<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AssessmentPeriodDates extends Model
{
    use HasFactory;

    protected $fillable = ['start_date', 'end_date', 'assessment_period_id', 'academic_course_id'];
    
    /**
     * Get the assessment period that owns the assement_period_date.
     */
    public function assessmentPeriod(): BelongsTo
    {
        return $this->belongsTo(AssessmentPeriod::class);
    }
    /**
     * Get the assement_period_date academic  that belongs the academic course .
     */
    public function academicCourse(): BelongsTo
    {
        return $this->belongsTo(AcademicCourse::class);
    }
}
