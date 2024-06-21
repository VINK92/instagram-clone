import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SignUpProps } from '../../pages/SignUpPage';

type Props = {
  onSignUp: ({ email, password }: SignUpProps) => void;
};

export const SignUpPageContent: React.FC<Props> = ({ onSignUp }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpHandle = () => {
    onSignUp({ email, password });
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={value => setName(value)} />
      <TextInput style={styles.input} value={email} onChangeText={value => setEmail(value)} />
      <TextInput style={styles.input} value={password} onChangeText={value => setPassword(value)} secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={signUpHandle}>
        <Text>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  input: {
    width: 327,
    height: 56,
    borderWidth: 1,
    borderColor: '#a31515',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: { width: 327, height: 56, borderWidth: 1, borderColor: '#a31515' },
});
