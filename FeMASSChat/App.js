import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLogin from './src/AppLogin';
import AppCadastro from './src/AppCadastro';


const API_URL = 'http://192.168.179.61:8080';

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkLocalStorage();
  }, []);

  const checkLocalStorage = async () => {
    try {
      const userHash = await AsyncStorage.getItem('userHash');
      const userID = await AsyncStorage.getItem('userID');

      if (userHash) {

        const remoteHash = (await axios.get(`${API_URL}/user/${userID}`)).data;

        if (userHash == remoteHash)
          navigation.navigate('Main');
        else
          navigation.navigate('Login');

      } else
        navigation.navigate('Login');

    } catch (error) {
      console.error('Erro ao verificar local storage:', error);
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

const LoginScreen = ({ navigation }) => {
  return (
    <AppLogin navigation={navigation}></AppLogin>
  );
};

const MainScreen = () => {
  return (
    <View>
      <Text>Bem-Vindo</Text>
    </View>
  );
};

const CadastroScreen = ({ navigation }) => {
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
