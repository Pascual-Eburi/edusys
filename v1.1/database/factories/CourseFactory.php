<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    private $names = [];
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = \Faker\Factory::create();
        $faker->addProvider(new \Bezhanov\Faker\Provider\Educator($faker));

        do {
            $name = substr($faker->course, 0, 30);
        } while (in_array($name, $this->names));

        // Agregar el nombre actual al array de nombres
        $this->names[] = $name;

        return [
            'name' => $name,
        ];
    } 
}
