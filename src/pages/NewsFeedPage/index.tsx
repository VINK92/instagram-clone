import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PAGES } from '../../navigation/constants';

export const NewsFeedPage = () => {
  const navigation = useNavigation();
  return (
    <>
      <Text>NewsFeedPage</Text>
      <Text>NewsFeedPage</Text>
      <Text>NewsFeedPage</Text>
      <Text>NewsFeedPage</Text>
      <Text>NewsFeedPage</Text>
      <Text>NewsFeedPage</Text>
      <Text>NewsFeedPage</Text>
      <Text>NewsFeedPage</Text>
      <Text>NewsFeedPage</Text>
      <Text>NewsFeedPage</Text>
      <Text>NewsFeedPage</Text>
      <Text>NewsFeedPage</Text>
      <Text>NewsFeedPage</Text>
      <TouchableOpacity onPress={() => navigation.navigate(PAGES.ProfilePage as never)}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </>
  );
};
