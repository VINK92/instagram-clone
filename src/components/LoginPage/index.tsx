import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SignUpProps } from '../../pages/SignUpPage';

type Props = {
  onLogin: ({ email, password }: SignUpProps) => void;
};

export const LoginPageContent: React.FC<Props> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const loginHandle = () => {
      onLogin({ email, password });
    };


  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={email} onChangeText={value => setEmail(value)} />
      <TextInput style={styles.input} value={password} onChangeText={value => setPassword(value)} secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={loginHandle}>
        <Text>Login</Text>
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
