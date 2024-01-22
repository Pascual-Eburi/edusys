<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $adminRole = Role::create(['name' => 'admin']);
        $permissions = ['create', 'read', 'update', 'delete'];
        $models = ['roles', 'permissions', 'academic courses', 'education levels', 'people', 'students', 'teachers', 'enrolment', 'assessment periods', 'assessment period dates', 'course levels', 'course sections', 'contacts', 'enrolment payments'];
        
        foreach ($models as $model) {
            # create models permisions
            foreach ($permissions as $permissionName) {
                $permission= Permission::create([
                    'name' => $permissionName.' '. $model
                ]);
                $adminRole->givePermissionTo($permission);
            }
        }
    }
}
