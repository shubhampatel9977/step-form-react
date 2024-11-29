import React from 'react';
import { Controller, useFieldArray } from 'react-hook-form';

const Step3 = ({ control, errors, prevStep, nextStep }) => {

  const { fields: interestFields, append: appendInterest, remove: removeInterest } = useFieldArray({
    control,
    name: "interests",
  });

  const { fields: companyFields, append: appendCompany, remove: removeCompany } = useFieldArray({
    control,
    name: "companies",
  });

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Documentation</h2>

      {/* Interest Fields */}
      <div>
        <label className="block text-sm font-medium">Interests</label>
        {interestFields.map((interest, index) => (
          <div key={interest.id} className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <Controller
                name={`interests[${index}].value`}
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter Interest"
                  />
                )}
              />
              <button
                type="button"
                className="px-2 py-1 bg-red-500 text-white rounded-md"
                onClick={() => removeInterest(index)}
              >
                Remove
              </button>
            </div>
            {errors.interests?.[index]?.value && (
              <p className="text-red-500 text-sm">
                {errors.interests[index].value.message}
              </p>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendInterest({ value: "" })}
          className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2"
        >
          Add More Interests
        </button>
        {errors.interests?.message && (
          <p className="text-red-500 text-sm">{errors.interests.message}</p>
        )}
      </div>

      {/* Previous Companies Fields */}
      <div>
        <label className="block text-sm font-medium">Previous Companies</label>
        {companyFields.map((company, index) => (
          <div key={company.id} className="flex flex-col gap-1">
            <div className="flex gap-4 items-center">
              <Controller
                name={`companies[${index}].company`}
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Company Name"
                  />
                )}
              />
              <Controller
                name={`companies[${index}].years`}
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    min="0"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Years Worked"
                  />
                )}
              />
              <button
                type="button"
                className="px-2 py-1 bg-red-500 text-white rounded-md"
                onClick={() => removeCompany(index)}
              >
                Remove
              </button>
            </div>
            {errors.companies?.[index]?.company && (
              <p className="text-red-500 text-sm">
                {errors.companies[index].company.message}
              </p>
            )}
            {errors.companies?.[index]?.years && (
              <p className="text-red-500 text-sm">
                {errors.companies[index].years.message}
              </p>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendCompany({ company: "", years: "" })}
          className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2"
        >
          Add More Companies
        </button>
        {errors.companies?.message && (
          <p className="text-red-500 text-sm">{errors.companies.message}</p>
        )}
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

export default Step3;

