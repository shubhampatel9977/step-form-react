import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { fakeFormData } from "./store/fakeData";
import validationSchema from './validation/formValidation';
import Step1 from './component/Step1';
import Step2 from './component/Step2';
import Step3 from './component/Step3';
import Step4 from './component/Step4';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const { control, watch, handleSubmit, reset, formState: { errors }, trigger } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      gender: '',
      dob: '',
      university: '',
      skills: [],
      salaryExpectation: 10000,
      languages: [],
      interests: [{ value: '' }],
      companies: [{ company: '', years: '' }],
      jobExperience: '',
      document: null,
      description: '',
    }
  });

  // useEffect(()=> {
  //   if(fakeFormData) {
  //     reset({...fakeFormData});
  //   }
  // }, [fakeFormData]);

  const nextStep = async () => {
    const fieldsToValidate = {
      1: ['firstName', 'lastName', 'email', 'phone', 'gender', 'dob'],
      2: ['university', 'skills', 'salaryExpectation', 'languages'],
      3: ['interests', 'companies'],
      4: ['jobExperience', 'document', 'description']
    };

    const isValid = await trigger(fieldsToValidate[currentStep]);
    if (isValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const onSubmit = (data) => {

    console.log('onSubmit-data',data)
    
    if(data){
      console.log('onSubmit-data-222',data)
    }
    // reset();
    // setCurrentStep(1);
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 1 && (
          <Step1 control={control} errors={errors} nextStep={nextStep} />
        )}
        {currentStep === 2 && (
          <Step2 control={control} watch={watch} errors={errors} prevStep={prevStep} nextStep={nextStep} />
        )}
        {currentStep === 3 && (
          <Step3 control={control} errors={errors} prevStep={prevStep} nextStep={nextStep} />
        )}
        {currentStep === 4 && (
          <Step4 control={control} errors={errors} prevStep={prevStep} onSubmit={onSubmit} />
        )}
      </form> 

       {/* set up the dev tool */}
      <DevTool control={control} />
    </div>
  );
}

export default App
