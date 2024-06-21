// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { PAGES } from './constants';
import { LoginPage } from '../pages/LoginPage';
import { SignUpPage } from '../pages/SignUpPage';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={PAGES.SignUpPage}>
      <Stack.Screen name={PAGES.SignUpPage} component={SignUpPage} />
      <Stack.Screen name={PAGES.LoginPage} component={LoginPage} />
    </Stack.Navigator>
  );
};
