import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import Navigation from "../Nav/Navigation";

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../Aset/logo.png')}
            resizeMode="contain"
          />
        </View>

        <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}>TENTANG KAMI</Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            Kami menyediakan informasi terkini dan mendalam tentang kesehatan
            dengan tujuan mempromosikan kesadaran akan gaya hidup sehat. Kami
            adalah sumber terpercaya bagi semua yang mencari informasi kesehatan.
          </Text>
        </View>
        
      </View>
      
      <Navigation />
    </View>
  );
};

var { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
    width: '100%',
    paddingBottom: 80, // Menambahkan padding bawah agar navbar tidak menutupi konten
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center', // Mengatur logo berada di tengah secara vertikal
    alignItems: 'center', // Mengatur logo berada di tengah secara horizontal
  },
  logo: {
    width: width * 0.3,
    height: 150,
  },
  mainHeader: {
    fontSize: 18,
    color: '#344055',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginTop: 50,
    marginBottom: 10,
    fontFamily: 'JosefinSans_700Bold',
    textAlign: 'center',
  },
  paraStyle: {
    fontSize: 18,
    color: '#7d7d7d',
    paddingBottom: 30,
  },
  aboutLayout: {
    backgroundColor: '#68B984',
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginVertical: 15,
    fontFamily: 'JosefinSans_700Bold',
    alignSelf: 'center',
  },
  aboutPara: {
    color: '#fff',
    textAlign: 'justify',
  },
  menuContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonStyle: {
    alignItems: 'center',
  },
  iconStyle: {
    width: '100%',
    height: 50,
    aspectRatio: 1,
  },
});

export default About;