import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLogin from './src/AppLogin';
import AppCadastro from './src/AppCadastro';


const API_URL = 'https://example.com/api'; // Replace with your API URL

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkLocalStorage();
  }, []);

  const checkLocalStorage = async () => {
    try {
      const userHash = await  AsyncStorage.getItem('userHash');
      if (userHash) {
        // User hash exists, check against API
        const response = await axios.get(`${API_URL}/checkHash`, {
          params: { userHash },
        });
        const isValidHash = response.data.isValid;
        if (isValidHash) {
          // Hash is valid, navigate to the main screen
          navigation.navigate('Main');
        } else {
          // Hash is invalid, navigate to the login screen
          navigation.navigate('Login');
        }
      } else {
        // User hash doesn't exist, navigate to the login screen
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Error checking local storage:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Verificando dados locais...</Text>
    </View>
  );
};

const LoginScreen = ({navigation}) => {
  return (
    <AppLogin navigation={navigation}></AppLogin>
  );
};

const MainScreen = () => {
  return (
    <View>
      <Text>Main Screen</Text>
    </View>
  );
};

const CadastroScreen = ({navigation}) => {
    return (
        <AppCadastro navigation={navigation}></AppCadastro>
    );
};

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Main: MainScreen,
    Cadastro: CadastroScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
