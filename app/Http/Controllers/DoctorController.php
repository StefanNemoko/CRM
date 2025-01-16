<?php

namespace App\Http\Controllers;

use App\Mail\DoctorCreated;
use App\Models\User;
use App\Http\Requests\StoreDoctorRequest;
use App\Http\Requests\UpdateDoctorRequest;
use Inertia\Inertia;
use PhpParser\Comment\Doc;

class DoctorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    private function manage(User $doctor): \Inertia\Response
    {
        return Inertia::render('Doctor/Create', [
            'doctor' => $doctor,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): \Inertia\Response
    {
        $doctor = new User();
        $doctor->assignRole('doctor');

        return $this->manage($doctor);
    }

    private function setFromRequest(StoreDoctorRequest $request): User
    {
        $doctor = User::findOrNew($request->Id);
        $doctor->fill($request->validated());
        return $doctor;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDoctorRequest $request)
    {
        // Create from request
        $doctor = $this->setFromRequest($request);

        // If the doctor is new, enqueue mail to the doctor.
        $sendMail = false;
        if (!$doctor->exists) {
            $sendMail = true;
        }

        // Save into database
        $doctor->save();

        if ($sendMail) {
            (new DoctorCreated($doctor))->send();
        }

        return to_route('doctor.create');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $doctor)
    {
        return $this->manage($doctor);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDoctorRequest $request, User $user)
    {

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
