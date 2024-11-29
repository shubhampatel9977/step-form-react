import * as Yup from 'yup';

const skillSchema = Yup.object({
    value: Yup.string(),
    label: Yup.string(),
  });

const validationSchema = Yup.object({
    firstName: Yup.string()
        .required('First name is required')
        .max(50, 'First name cannot exceed 50 characters'),

    lastName: Yup.string()
        .required('Last name is required')
        .max(50, 'Last name cannot exceed 50 characters'),

    email: Yup.string()
        .required('Email is required')
        .email('Invalid email format'),

    phone: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),

    gender: Yup.string()
        .required('Gender is required'),

    dob: Yup.date()
        .required('Date of birth is required')
        .max(new Date(), 'Date of birth cannot be in the future'),

    university: Yup.string()
        .required('University is required'),

    skills: Yup.array()
        .of(skillSchema)
        .min(1, 'At least one skill is required'),

    salaryExpectation: Yup.number()
        .required('Salary expectation is required')
        .min(10000, 'Salary must be at least $10,000')
        .max(1000000, 'Salary cannot exceed $10,00,000'),

    languages: Yup.array()
        .of(Yup.string().required('Language is required'))
        .min(1, 'At least one language is required'),

    interests: Yup.array()
        .of(Yup.object({ value: Yup.string().required('Interest is required')}))
        .min(1, 'At least one interest is required'),

    companies: Yup.array()
        .of(
            Yup.object({
                company: Yup.string().required('Company name is required'),
                years: Yup.number()
                    .required('Years of work is required')
                    .min(1, 'Minimum 1 year is required')
                    .max(50, 'Years cannot exceed 50'),
            })
        )
        .min(1, 'At least one previous company is required'),

    jobExperience: Yup.string()
        .required('Job experience is required')
        .max(500, 'Job experience description cannot exceed 500 characters'),

    document: Yup.mixed()
        .required('Document is required'),

    description: Yup.string()
        .required('Description is required')
        .max(1000, 'Description cannot exceed 1000 characters'),
});

export default validationSchema;
