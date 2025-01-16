<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create permissions
        Permission::create(['name' => 'manage_doctors']);
        Permission::create(['name' => 'manage_patients']);

        // Admin role and permissions
        $admin = Role::Create(['name' => 'admin']);
        $admin->givePermissionTo('manage_doctors');

        $doctor = Role::Create(['name' => 'doctor']);
        $doctor->givePermissionTo('manage_patients');
    }
}
