<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AcademicCourse>
 */
class AcademicCourseFactory extends Factory
{
    private $startYears = [];
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        
        do {
            $startYear = $this->faker->numberBetween(2000, date('Y'));
        } while (in_array($startYear, $this->startYears));

        // avoid duplicates
        $this->startYears[] = $startYear;

        $endYear = $startYear + 1;

        $startDay = $this->faker->numberBetween(1, 30);
        $endDay = $this->faker->numberBetween(15, 30);


        // Generate name
        $name = "{$startYear}/{$endYear}";
        // Generate start date
        $startDate = "{$startYear}/09/{$startDay}";
        // Generate end date
        $endDate = "{$endYear}/06/{$endDay}";


        return [
            'name' => $name,
            'start_date' => date($startDate),
            'end_date' => date($endDate),
            'enrolment_price' =>$this->faker->numberBetween(100000, 250000)
        ];
    }
}
