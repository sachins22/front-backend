import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

export default function Log() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
//   const [password, setPassword] = useState('');

  const handleLogin = async () => {
   navigation.navigate('Home',{name:name})
  };

  return (
    <LinearGradient style={styles.gradient} colors={['#E7460CFF', '#15E04FFF', '#B2E117FF']}>
      <View style={styles.container}>
        <Text style={styles.header}>Hlo SS22</Text>
        <Text style={styles.title}>Name</Text>

        <TextInput
          style={styles.input}
          placeholder="name"
          placeholderTextColor='black'
          keyboardType="email-address"
          autoCapitalize="none"
          value={name}
          onChangeText={setName}
        />

       
        <View style={styles.buttonContainer}>
          <Button title="name" onPress={handleLogin} />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    // backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    backgroundColor: ['#E7460CFF', '#15E04FFF', '#B2E117FF'],
  },
  buttonContainer: {
    marginTop: 16,
  },
});
