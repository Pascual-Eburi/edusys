<?php

namespace Database\Seeders;

use App\Models\AssessmentPeriod;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AssessmentPeriodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $names = [
            ['name' => '1ª Evaluación'],
            ['name' => '2ª Evaluación'],
            ['name' => '3ª Evaluación'],
            ['name' => 'Junio'],
        ];
        AssessmentPeriod::insert($names);
    }
}
