import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
  username: yup.string().required('Username is a required field.'),
  password: yup.string().required('Must include password.'),
  passwordVerification: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match.'),
});

export default function Form() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    passwordVerification: '',
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    formSchema.isValid(form).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [form]);

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    passwordVerification: '',
  });

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
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = e => {
    e.persist();
    validate(e);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formSubmit = e => {
    e.preventDefault();
    console.log('form submitted!');
    axios
      .post('https://reqres.in/api/users', form)
      .then(response => console.log(response))
      .catch(err => console.log(err));

    console.log('data', form);
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="username">
        Username:
        <input
          type="text"
          name="username"
          id="username"
          value={form.username}
          onChange={inputChange}
        />
      </label>
      {errors.username.length > 0 ? (
        <p className="error">{errors.username}</p>
      ) : null}
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={inputChange}
        />
      </label>
      {errors.password.length > 0 ? (
        <p className="error">{errors.password}</p>
      ) : null}
      <label htmlFor="passwordVerification">
        Verify Password:
        <input
          type="password"
          name="passwordVerification"
          id="passwordVerification"
          value={form.passwordVerification}
          onChange={inputChange}
        />
      </label>
      {errors.passwordVerification.length > 0 ? (
        <p className="error">{errors.passwordVerification}</p>
      ) : null}
      <button disabled={buttonDisabled}>Submit</button>
    </form>
  );
}
