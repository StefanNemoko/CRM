<?php

namespace App\Http\Requests;

class UpdateDoctorRequest extends StoreDoctorRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // Or we are an admin, Or the currently logged in user
        if (parent::authorize() || $this->user()->Id === $this->route('doctor')->Id) {
            return true;
        }
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = parent::rules();

        $rules['Id'] = ['required', 'integer', 'exists:doctors,Id'];

        return $rules;
    }
}
