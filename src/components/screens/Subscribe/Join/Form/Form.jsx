import React, { useState } from 'react';

import { Input } from 'components/ui/Input/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from './Form.module.scss';
import { Button } from 'components/ui/Button/Button';

const scheme = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required')
    .max(50, 'Email is too long'),
  name: yup.string().required('Name is required').max(50, 'Name is too long'),
});

export const Form = ({ setStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(scheme),
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    // add mailchimp/zoho integration here
    setIsLoading(true);
    console.log(data);
    setStep('completed');
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder={'enter your name'} {...register('name')} error={errors['name']} />
        <Input placeholder={'enter your email'} {...register('email')} error={errors['email']} />
        <div className={styles.buttons}>
          <Button variant='secondary' href={'/'} mw={200}>
            Cancel
          </Button>
          <Button mw={200} type={'submit'}>
            register
          </Button>
        </div>
      </form>
      <p className={styles.gdpr}>
        We respect your privacy rights. Our compliance with GDPR ensures the security and
        confidentiality of your information.
      </p>
    </div>
  );
};
