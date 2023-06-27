import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLogin from './src/AppLogin';
import AppCadastro from './src/AppCadastro';
import AppConversas from './src/AppConversas';
import AppChat from './src/AppConversas/AppChat';
import { useRoute } from '@react-navigation/native';
import AppContatos from './src/AppContatos';
import { AppContext, AppProvider } from './AppContext';


const API_URL = 'http://192.168.0.10:8080';
//const API_URL = 'http://192.168.70.61:8080';





const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dadosLS, setDadosLS] = useContext(AppContext);
  


  const carregarDados = async () => {
    try {
      const userHash = await AsyncStorage.getItem('userHash');
      const userID = await AsyncStorage.getItem('userID');
      const login = await AsyncStorage.getItem('login');

      const dados = {
        'userHash': userHash,
        'userID': userID,
        'login': login,
      }

      return dados;

    } catch (error) {
      console.error('Erro ao carregar dados da loja local: ', error);
    }
  }


  useEffect(() => {
    const pegarDadosAsync = async () => {
      const dado = await carregarDados();
      setDadosLS(dado);
     
      console.log(dadosLS);
    }
    pegarDadosAsync();

    checkLocalStorage();
  }, []);

  const checkLocalStorage = async () => {
    try {


      if (dadosLS.userHash) {

        const remoteHash = (await axios.get(`${API_URL}/user/${userID}`)).data;

        if (dadosLS.userHash == remoteHash) {
          userData = {
            'userHash': userHash,
            'userID': userID,
            'login': login,
          }

          navigation.navigate('Conversas');
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


  return dadosLS.userID ? (
    <AppConversas navigation={navigation} userID={dadosLS.userID}></AppConversas>
  ) : null;
};

const CadastroScreen = ({ navigation }) => {
  return (
    <AppCadastro navigation={navigation}></AppCadastro>
  );
};

const ConversaScreen = ({ navigation }) => {
  const { params } = navigation.state;
  const otherUserID = params ? params.otherUserID : null;

  return (
    <AppChat navigation={navigation} userID={dadosLS.userID} otherUserID={otherUserID}></AppChat>
  );
};

const ContatosScreen = ({ navigation }) => {
  const userID = dadosLS.userID;
  const login = dadosLS.login;

  return (
    <AppContatos navigation={navigation} userID={userID} login={login}></AppContatos>
  );
};

const AppNavigator = createStackNavigator(

  {
    Home: HomeScreen,
    Login: LoginScreen,
    Conversas: MainScreen,
    Cadastro: CadastroScreen,
    Chat: ConversaScreen,
    Contatos: ContatosScreen,
  },
  {
    initialRouteName: 'Home',
  }

);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {

  return (
    <AppProvider>
      <AppContainer />
    </AppProvider>
  );
}
