import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLogin from './src/AppLogin';
import AppCadastro from './src/AppCadastro';
import AppConversas from './src/AppConversas';
import AppChat from './src/AppConversas/AppChat';


const API_URL = 'http://192.168.0.10:8080';
let userData = {};

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

        if (userHash == remoteHash) {
          userData = {
            'userHash': userHash,
            'userID': userID,
          }
          
          navigation.navigate('Main');
        }
        else {
        //  Alert.alert('Falha', 'Usuario nao encontrado!');
          navigation.navigate('Login');
        }

      } else
        navigation.navigate('Login');

    } catch (error) {
      if (error.response && error.response.status === 500) {
        console.error("Usuário não encontrado");
        navigation.navigate('Login');
      } else {
        console.error('Erro ao verificar local storage:', error);
      }

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
      <Text>Verificando dados locais..</Text>
    </View>
  );
};

const LoginScreen = ({ navigation }) => {
  return (
    <AppLogin navigation={navigation}></AppLogin>
  );
};

const MainScreen = ({ navigation }) => {
     
    userID = userData.userID;
   
  return (
    <AppConversas navigation={navigation} userID={userID}></AppConversas>
  );
};

const CadastroScreen = ({ navigation }) => {
  return (
    <AppCadastro navigation={navigation}></AppCadastro>
  );
};

const ConversaScreen = ({ navigation }) => {
  return (
    <AppChat></AppChat>
  );
};

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Main: MainScreen,
    Cadastro: CadastroScreen,
    Chat : ConversaScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
