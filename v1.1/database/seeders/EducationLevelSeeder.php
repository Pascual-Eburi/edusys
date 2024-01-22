<?php

namespace Database\Seeders;

use App\Models\EducationLevel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EducationLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $levels = [
            ['name' => 'Primaria', ],
            ['name' => 'ESBA', ],
            ['name' => 'Bachillerato', ],
        ];
        EducationLevel::insert($levels);
    }
}
