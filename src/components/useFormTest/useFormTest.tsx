import React, { useReducer } from 'react';
import { FormEvent } from 'react';
import useForm from '../../hooks/useForm';
import { AuthState } from '../../interface/AuthState';
import { authReducer } from '../ReducerTest/ReducerTest';

const initialValues = { username: '', password: '' };
const defaultAuthState: AuthState = { username: null, password: null, token: null, isLoggedIn: false };

export const LoginForm = () => {
 const { values, handleChange } = useForm(initialValues);
 const [authState, dispatch] = useReducer(authReducer, defaultAuthState);   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
 event.preventDefault(); 
if (values.username === 'admin' && values.password === '12345') {
 dispatch({
 type: 'LOGIN',
 payload: { username: values.username, password: values.password, token: 'fake_token' },
 });
 }
 };
const handleLogout = () => {
 dispatch({ type: 'LOGOUT' });
};
return (
  <div className="login-form">
    {authState.isLoggedIn ? (
      <div>
        <h1>Welcome, {authState.username}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    ) : (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password: 
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    )}
  </div>
);
};

export default LoginForm;
