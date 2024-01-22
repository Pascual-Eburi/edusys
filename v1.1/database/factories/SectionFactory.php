<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Section>
 */
class SectionFactory extends Factory
{
    private $names = [];
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        do {
            $name = strtoupper(substr(fake()->text(5), 0, 1));
        } while (in_array($name, $this->names));

        // avoid duplicates
        $this->names[] = $name;

        return [
            'name' => $name,
        ];
    }
}
