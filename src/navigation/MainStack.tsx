import { createStackNavigator } from '@react-navigation/stack';
import { PAGES } from './constants';
import { NewsFeedPage } from '../pages/NewsFeedPage';
import { ProfilePage } from '../pages/ProfilePage';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={PAGES.NewsFeedPage}>
      <Stack.Screen name={PAGES.NewsFeedPage} component={NewsFeedPage} />
      <Stack.Screen name={PAGES.ProfilePage} component={ProfilePage} />
    </Stack.Navigator>
  );
};
