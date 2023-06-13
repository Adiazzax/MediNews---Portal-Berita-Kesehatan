import React from 'react';
import { View, Image, TouchableOpacity, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  const handleMasukButton = () => {
    navigation.navigate('Welcome');
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../Aset/logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Image
          source={require('../../Aset/medinews.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity style={styles.masukButton} onPress={handleMasukButton}>
        <Text style={styles.masukButtonText}>Mulai</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  logoImage: {
    width: '40%', // Ubah ukuran sesuai kebutuhan
    aspectRatio: 4 / 1, // Ubah ukuran sesuai kebutuhan
    marginBottom: 20, // Ubah jarak dengan gambar berikutnya jika diperlukan
  },
  masukButton: {
    backgroundColor: '#68B984',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  masukButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
};

export default SplashScreen;
