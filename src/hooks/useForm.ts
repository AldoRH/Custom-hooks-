import { useState, useReducer } from 'react';
import { FormValues  } from '../interface/FormValues';
import { AuthAction } from '../interface/AuthAction';


export const useForm = (initialValues: FormValues) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;
  setValues({ ...values, [name]: value });
  };
  return { values, handleChange };
  };

  export default useForm;