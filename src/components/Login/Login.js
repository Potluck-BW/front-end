import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import './Login.css';

export default function Login() {
  const getEmptyState = () => ({
    userName: '',
    passWord: '',
  });

  const [formState, setFormState] = useState(getEmptyState());

  const [errors, setErrors] = useState({
    userName: '',
    passWord: '',
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const formSubmit = e => {
    e.preventDefault();
    console.log('submitted!');
    axios
      .post('https://reqres.in/api/potluck', formState)
      .then(res => {
        setFormState(getEmptyState());
        console.log('success', formState);
      })
      .catch(err => console.log(err.res));
  };

  const formSchema = yup.object().shape({
    userName: yup
      .string()
      .required('Username required')
      .min(2, 'Username must be at least 2 characters long'),
    passWord: yup
      .string()
      .required('Password required')
      .min(6, 'Password must be at least 6 characters long'),
  });

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      //   console.log(formState);
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const validate = e => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: '',
        });
      })
      .catch(err => {
        console.log(err.message);
        setErrors({
          ...errors,
          [e.target.name]: err.message,
        });
      });
  };

  const textBoxChanges = e => {
    e.persist();
    validate(e);

    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={formSubmit} className="formContainer">
      <h2>Login</h2>
      <label htmlFor="userName">Username</label>
      <input
        name="userName"
        id="userName"
        type="text"
        onChange={textBoxChanges}
        value={formState.userName}
      />
      {errors.userName.length > 0 ? (
        <p className="error">{errors.userName}</p>
      ) : null}

      <label htmlFor="passWord">Password</label>
      <input
        name="passWord"
        id="passWord"
        type="password"
        onChange={textBoxChanges}
        value={formState.passWord}
      />
      {errors.passWord.length > 0 ? (
        <p className="error">{errors.passWord}</p>
      ) : null}
      <button disabled={buttonDisabled}>Login</button>
    </form>
  );
}
