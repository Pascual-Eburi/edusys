<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // create default admin user
        $adminUser = User::create([
            'name' => 'admin',
            'email' => 'eburi.dev@gmail.com',
            'password' => Hash::make('admin')
        ]);
        
        $adminUser->assignRole('admin');
    }
}
