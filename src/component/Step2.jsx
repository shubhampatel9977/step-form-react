import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

const Step2 = ({ control, watch, errors, prevStep, nextStep }) => {
    const skillsOptions = [
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'React', label: 'React' },
        { value: 'Node.js', label: 'Node.js' },
        { value: 'Python', label: 'Python' },
    ];

    const salary = watch("salaryExpectation");

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Education</h2>

            <div>
                <label htmlFor="university" className="block text-sm font-medium">University Name</label>
                <Controller
                    name="university"
                    control={control}
                    render={({ field }) => (
                        <select
                            id="university"
                            {...field}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select University</option>
                            <option value="Harvard">Harvard</option>
                            <option value="Stanford">Stanford</option>
                            <option value="MIT">MIT</option>
                            <option value="Cambridge">Cambridge</option>
                        </select>
                    )}
                />
                {errors.university && <span className="text-red-500 text-sm">{errors.university.message}</span>}
            </div>

            <div>
                <label htmlFor="skills" className="block text-sm font-medium">Skills</label>
                <Controller
                    name="skills"
                    control={control}
                    render={({ field: { value, onChange} }) => (
                        <Select
                            // {...field}
                            id="skills"
                            isMulti
                            options={skillsOptions}
                            // closeMenuOnSelect={false}
                            value={value}
                            onChange={onChange}
                            className="w-full"
                            classNamePrefix="select"
                        />
                    )}
                />
                {errors.skills && <span className="text-red-500 text-sm">{errors.skills.message}</span>}
            </div>

            {/* Salary Expectation Range */}
            <div>
                <label className="block text-sm font-medium">Salary Expectation</label>
                <div className="flex items-center gap-4">
                    <span>Min: $10000</span>
                    <Controller
                        name="salaryExpectation"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <input
                                type="range"
                                min="10000"
                                max="1000000"
                                step="1000"
                                value={value}
                                onChange={(e) => onChange(Number(e.target.value))}
                                className="w-full"
                            />
                        )}
                    />
                    <span>Max: $1,000,000</span>
                </div>
                <div>
                    <p>Salary:- {salary}</p>
                </div>
                {errors.salaryExpectation && (
                    <span className="text-red-500 text-sm">{errors.salaryExpectation.message}</span>
                )}
            </div>

            {/* Languages */}
            <div>
                <label className="block text-sm font-medium">Languages</label>
                <Controller
                    name="languages"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <div className="flex gap-4">
                            {['English', 'Spanish', 'French'].map((language) => (
                                <label key={language} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value={language}
                                        checked={value?.includes(language)}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                onChange([...value, language]);
                                            } else {
                                                onChange(value.filter((item) => item !== language));
                                            }
                                        }}
                                        className="mr-2"
                                    />
                                    {language}
                                </label>
                            ))}
                        </div>
                    )}
                />
                {errors.languages && <span className="text-red-500 text-sm">{errors.languages.message}</span>}
            </div>

            <div className="flex justify-between">
                <button
                    type="button"
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
                    onClick={prevStep}
                >
                    Back
                </button>
                <button
                    type="button"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    onClick={nextStep}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Step2;

