import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, addDoc, collection } from 'firebase/firestore/lite';
import { SignUpPageContent } from '../../components/SignUpPage';
import { app } from '../../../App';

export type SignUpProps = {
  email: string;
  password: string;
};

type Props = {};

export const SignUpPage: React.FC<Props> = () => {
  const auth = getAuth(app);
  const db = getFirestore(app);

  const onSignUp = async ({ email, password }: SignUpProps) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(collection(db, 'users'), {
        email,
        password,
      });
    } catch (error) {
      console.log('Sign up error', error);
    }
  };

  return <SignUpPageContent onSignUp={onSignUp} />;
};
