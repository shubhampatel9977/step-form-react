import React from 'react';
import { Controller } from 'react-hook-form';

const Step4 = ({ control, errors, prevStep, onSubmit }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Documentation</h2>

      <div>
        <label htmlFor="jobExperience" className="block text-sm font-medium">Job Experience (Years)</label>
        <Controller
          name="jobExperience"
          control={control}
          render={({ field }) => (
            <input
              id="jobExperience"
              type="number"
              {...field}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          )}
        />
        {errors.jobExperience && <span className="text-red-500 text-sm">{errors.jobExperience.message}</span>}
      </div>

      <div>
        <label htmlFor="document" className="block text-sm font-medium">Upload Document</label>
        <Controller
          name="document"
          control={control}
          render={({ field }) => (
            <input
              id="document"
              type="file"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={(e) => {
                const file = e.target.files[0];
                field.onChange(file);
              }}
            />
          )}
        />
        {errors.document && <span className="text-red-500 text-sm">{errors.document.message}</span>}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium">Description</label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <textarea
              id="description"
              {...field}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
            />
          )}
        />
        {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
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
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-md"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4;
