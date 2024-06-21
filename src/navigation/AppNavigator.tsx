import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { AuthStack } from './AuthStack';
import { MainStack } from './MainStack';
import { app } from '../../App';

export const AppNavigator = () => {
  const [user, setUser] = useState(false);
  const auth = getAuth(app);
  auth.onAuthStateChanged(u => {
    if (u) {
      setUser(true);
    }
  });
  return user ? <MainStack /> : <AuthStack />;
};
