import * as yup from 'yup';

const RegisterSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email is invalid!')
      .required('Email is necessary!'),
    username: yup
      .string()
      .min(3,'Min. 3 characters!')
      .max(8, 'Max. 8 characters!')
      .required('Username is necessary!'),
    password: yup
      .string()
      .typeError('You can just use: @/./+/-/_ ')
      .min(6, 'Min. 6 characters!')
      .max(12, 'Max. 12 characters!')
      .required('Password is necessary!'),
    passwordConfirm: yup
      .string()
      .typeError('You can just use: @/./+/-/_ ')
      .min(6, 'Min. 6 characters!')
      .max(12, 'Max. 12 characters!')
      .required('Password is necessary!')
      .oneOf([yup.ref('password'), null], 'Password is not the same!'),
   
  })

  export default RegisterSchema;
  