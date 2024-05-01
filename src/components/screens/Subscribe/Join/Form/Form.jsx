import React from 'react';

import { Input } from 'components/ui/Input/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

import styles from './Form.module.scss';
import { Button } from 'components/ui/Button/Button';
import { Checkbox } from 'components/ui/Checkbox/Checkbox';

const scheme = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required')
    .max(50, 'Email is too long')
    .trim(),
  name: yup.string().required('Name is required').max(50, 'Name is too long').trim(),
  tos: yup.bool().oneOf([true], 'You must accept the terms and conditions'),
});

const url = process.env.REACT_APP_MAIL_API;

const headers = {
  'Content-Type': 'application/json',
};

export const Form = ({ setStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(scheme),
  });

  const subscribeMail = async (data) => {
    try {
      await axios.post(
        `${url}/subscribe`,
        {
          email: data.email,
          name: data.name,
        },
        { headers },
      );
    } catch (error) {
      setStep('completed');
    }
  };

  const onSubmit = async (data) => {
    await subscribeMail(data);
    setStep('completed');
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder={'enter your name'} {...register('name')} error={errors['name']} />
        <Input placeholder={'enter your email'} {...register('email')} error={errors['email']} />
        <Checkbox {...register('tos')} error={errors['tos']}>
          I accept the Terms & Conditions. For more details please review our{' '}
          <a href='/'>Privacy policy</a> .
        </Checkbox>
        <div className={styles.buttons}>
          <Button variant='secondary' href={'/'} mw={200}>
            Cancel
          </Button>
          <Button mw={200} type={'submit'}>
            subscribe
          </Button>
        </div>
      </form>
    </div>
  );
};
