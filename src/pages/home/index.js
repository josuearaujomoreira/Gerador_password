import { StatusBar } from 'expo-status-bar';

//Importando lib nativas o react
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import { ModalPassword } from './../../components/modal/index.js';

//Let para usar como base para gera password
let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

//Função man do APP para retornar
export function Home() {


  const [size, setSize] = useState(10) //Criando estado mutável para o Tamanha Defaut da senha (Tipo um array)
  const [passwordValue, setPassValue] = useState("") //Criando senha vazio para receber senha gerada
  const [modalVisible, setModalVisible] = useState(false) //Setando false para abertura do modal

  function GeneratePassword() {
    console.log('---------------');
    console.log('Gerando Nova Senha...')

    let password = "";

    for (let i = 0, n = charset.length; i < size; i++) {

      password += charset.charAt(Math.floor(Math.random() * n)) //Número aleratório no máximo do tamanho da Let Chaset  

    }

    console.log('Senha Gerada: ' + password)
    console.log('---------------');

    setPassValue(password) //Setando senha para var para mostrar no front
    setModalVisible(true)//Abrindo modal
  }

  return (
    <View style={styles.container}>


      <Image
        source={require("./../../assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>{size} Caracteres </Text>

      <View style={styles.area}>

        {/*  Barra rolagem horizontal */}

        <Slider style={{ height: 50 }}
          minimumValue={8}
          maximumValue={20}
          maximumTrackTintColor="#FF0000"
          minimumTrackTintColor='#000' //Fundo 
          thumbTintColor='#392de9' //Bolinha
          value={size}// setando valor padrão
          onValueChange={(value) => setSize(value.toFixed(0))} //Ao alterar a barrata vai setando é nossa variável
        />

      </View>

      <TouchableOpacity style={styles.button_gerar_senha} onPress={GeneratePassword}>
        <Text style={styles.Text_gerar_senha}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>

        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)} />

      </Modal>
    </View>
  );
}


//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    marginBottom: 60,
  },

  area: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 2
  },

  button_gerar_senha: {
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18

  },
  Text_gerar_senha: {
    color: '#FFF',
    fontWeight: 'bold'
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Arial-black'
  }




});
