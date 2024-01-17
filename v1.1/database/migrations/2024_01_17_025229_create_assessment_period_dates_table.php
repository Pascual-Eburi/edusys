<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('assessment_period_dates', function (Blueprint $table) {
            $table->id();
            $table->date('start_date');
            $table->date('end_date');
            $table->foreignId('assessment_period_id')->references('id')->on('assessment_periods');
            $table->foreignId('academic_course_id')->references('id')->on('academic_courses');
            $table->timestamps();

            // AAdd unique restriction to avoid duplicate pairs
            $table->unique(['academic_course_id', 'assessment_period_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assessment_period_dates');
    }
};
