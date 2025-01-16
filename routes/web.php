<?php

use Illuminate\Support\Facades\Route;

Route::get('/doctor/create', [\App\Http\Controllers\DoctorController::class, 'create']);

Route::inertia('/login', 'Authentication/Login');
