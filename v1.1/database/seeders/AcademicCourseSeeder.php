<?php

namespace Database\Seeders;

use App\Models\AcademicCourse;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AcademicCourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        AcademicCourse::factory(4)->create();
    }
}
