import * as yup from 'yup';

const RegisterSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email adresi geçersiz!')
      .required('Email adresi zorunludur!'),
    username: yup
      .string()
      .min(3,'Min. 3 karakter olmalıdır!')
      .max(8, 'Max. 8 karakter olabilir!')
      .required('Kullanıcı adı zorunludur!'),
    password: yup
      .string()
      .typeError('Sadece @/./+/-/_ kullanabilirsin')
      .min(6, 'Min. 6 karakter olmalı!')
      .max(12, 'Max. 12 karakter olabilir!')
      .required('Şifre alanı zorunludur!'),
    passwordConfirm: yup
      .string()
      .typeError('Sadece @/./+/-/_ kullanabilirsin')
      .min(6, 'Min. 6 karakter olmalı!')
      .max(12, 'Max. 12 karakter olabilir!')
      .required('Şifre alanı zorunludur!')
      .oneOf([yup.ref('password'), null], 'Şifreniz aynı değil!'),
   
  })

  export default RegisterSchema;
  