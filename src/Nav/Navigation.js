import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavigationBar = () => {
  const navigation = useNavigation();

  const AboutButton = () => {
    navigation.navigate('About');
  };

  const HomeButton = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity onPress={HomeButton}>
        <Image style={styles.iconStyle} source={require('../../Aset/RumahIcon.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={AboutButton}>
        <Image style={styles.iconStyle} source={require('../../Aset/orang.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 100,
    paddingVertical: 8,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
});

export default NavigationBar;
