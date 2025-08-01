'use client';

import { useLocalStorage } from "../hooks/useLocalStorage";
import { createContext } from 'react';


export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [userData, setUserData] = useLocalStorage("userData", {});

  const handleChange = (name, value) => {
    setUserData((data) => ({ ...data, [name]: value }));
  };

  const resetForm = () => {
    setUserData({});
  };

  return (
    <FormContext.Provider value={{ userData, setUserData, handleChange, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};
