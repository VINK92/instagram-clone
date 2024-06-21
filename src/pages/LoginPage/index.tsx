import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginPageContent } from '../../components/LoginPage';
import { SignUpProps } from '../SignUpPage';


export const LoginPage: React.FC = () => {
  const auth = getAuth();

  const onLogin = async ({ email, password }: SignUpProps) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log('Log in error', error);
    }
  };
  return <LoginPageContent onLogin={onLogin} />;
};
