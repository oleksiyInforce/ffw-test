import React from 'react';

import { Input } from 'components/ui/Input/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

import styles from './Form.module.scss';
import { Button } from 'components/ui/Button/Button';

const scheme = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required')
    .max(50, 'Email is too long')
    .trim(),
  name: yup.string().required('Name is required').max(50, 'Name is too long').trim(),
});

const apiUrl = process.env.REACT_APP_MAILCHIMP_URL;
const listId = process.env.REACT_APP_MAILCHIMP_LIST_ID;
const apiKey = process.env.REACT_APP_MAILCHIMP_API_KEY;

const url = `${apiUrl}/lists/${listId}/members?skip_merge_validation=true`;

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
      const response = await axios.post(
        url,
        {
          email_address: data.email,
          status: 'pending',
        },
        { headers: { Authorization: `Bearer ${apiKey}` } },
      );
      console.log(response);
    } catch (error) {
      console.error(error);
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
