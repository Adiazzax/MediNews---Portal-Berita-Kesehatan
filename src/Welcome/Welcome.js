// import React from 'react';
// import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Welcome = (props) => {
//   const navigation = useNavigation();

//   const handleLogin = () => {
//     navigation.navigate('Login');
//   };

//   const handleRegister = () => {
//     navigation.navigate('Register');
//   };

//   return (
    // <View style={styles.mainContainer}>
    //   <View style={styles.homeTop}>
    //     <Image
    //       style={styles.headerImage}
    //       resizeMode="contain"
    //       source={require('../../Aset/hape.png')}
    //     />
    //     <Image
    //       style={styles.secondImage}
    //       resizeMode="contain"
    //       source={require('../../Aset/welcome.png')}
    //     />

    //     <TouchableOpacity
    //       style={[styles.button, { width: '100%' }]}
    //       onPress={handleLogin}>
    //       <Text style={styles.buttonText}>Login</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity
    //       style={[styles.button1, { width: '100%' }]}
    //       onPress={handleRegister}>
    //       <Text style={styles.buttonText1}>Registrasi</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
//   );
// };

import React from "react";
// import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native'; 
import { useNavigation } from '@react-navigation/native';

export function Welcome(){

  // Deklarasi variabel navigasi
  const navigation = useNavigation();

  function handleLogin(){
    navigation.navigate('Login')
  }

  function handleRegister(){
    navigation.navigate('Register')
  }

  return(
    <View style={styles.mainContainer}>
    <View style={styles.homeTop}>
      <Image
        style={styles.headerImage}
        resizeMode="contain"
        source={require('../../Aset/hape.png')}
      />
      <Image
        style={styles.secondImage}
        resizeMode="contain"
        source={require('../../Aset/welcome.png')}
      />

      <TouchableOpacity
        style={[styles.button, { width: '100%' }]}
        onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button1, { width: '100%' }]}
        onPress={handleRegister}>
        <Text style={styles.buttonText1}>Registrasi</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },

  homeTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: 50,
  },

  button: {
    backgroundColor: '#68B984',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 20,
  },
  button1: {
    backgroundColor: '#ADB3BC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Nunito_600SemiBold',
    textAlign: 'center',
  },
  buttonText1: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Nunito_600SemiBold',
    textAlign: 'center',
  },

  secondImage: {
    marginTop: 12,
  },

  mainHeader: {
    fontSize: 30,
    color: '#344055',
    textTransform: 'uppercase',
    fontFamily: 'Nunito_600SemiBold',
  },

  paraStyle: {
    textAlign: 'left',
    fontSize: 19,
    color: '#7d7d7d',
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
    fontFamily: 'JosefinSans_400Regular',
  },
});

