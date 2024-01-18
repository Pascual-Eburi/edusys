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
        Schema::create('enrolments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('academic_course_id');
            $table->unsignedBigInteger('student_id');
            $table->date('enrolment_date');
            $table->double('price');
            $table->timestamps();

            $table->foreign('academic_course_id')->references('id')->on('academic_courses');

            $table->foreign('student_id')->references('id')->on('students');


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enrolments');
    }
};
