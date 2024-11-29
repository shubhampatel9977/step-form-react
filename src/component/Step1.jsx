import React from 'react';
import { Controller } from 'react-hook-form';

const Step1 = ({ control, errors, nextStep }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Personal Info</h2>

            <div className="flex gap-4">
                <div className="flex-1">
                    <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                            <input
                                id="firstName"
                                type="text"
                                {...field}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        )}
                    />
                    {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
                </div>
                <div className="flex-1">
                    <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                            <input
                                id="lastName"
                                type="text"
                                {...field}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        )}
                    />
                    {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <input
                            id="email"
                            type="email"
                            {...field}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    )}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                        <input
                            id="phone"
                            type="tel"
                            {...field}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    )}
                />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
            </div>

            <div>
                <label htmlFor="gender" className="block text-sm font-medium">Gender</label>
                <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                        <div className="flex gap-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="male"
                                    checked={field.value === "male"} // Explicitly check if the value matches
                                    onChange={(e) => field.onChange(e.target.value)} // Update value on change
                                    className="mr-2"
                                />
                                Male
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="female"
                                    checked={field.value === "female"}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    className="mr-2"
                                />
                                Female
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="other"
                                    checked={field.value === "other"}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    className="mr-2"
                                />
                                Other
                            </label>
                        </div>
                    )}
                />
                {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}
            </div>

            <div>
                <label htmlFor="dob" className="block text-sm font-medium">Date of Birth</label>
                <Controller
                    name="dob"
                    control={control}
                    render={({ field }) => (
                        <input
                            id="dob"
                            type="date"
                            {...field}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    )}
                />
                {errors.dob && <span className="text-red-500 text-sm">{errors.dob.message}</span>}
            </div>

            <div className="flex justify-between">
                <button
                    type="button"
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
                    onClick={nextStep}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Step1;
