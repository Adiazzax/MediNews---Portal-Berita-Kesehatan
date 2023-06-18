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
        <Text style={styles.subTitle}>MediNews</Text>
        
        <View style={styles.aboutLayout}>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            <Text style={styles.medInews}></Text>MediNews berdedikasi untuk menyajikan informasi kesehatan terbaru dan terpercaya kepada Anda. Dalam dunia yang terus berkembang ini, kami menyadari pentingnya memiliki sumber berita yang dapat dipercaya untuk menjaga kesehatan dan kesejahteraan kita.
          </Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            Visi kami adalah memberikan akses mudah dan cepat kepada semua orang untuk informasi kesehatan yang akurat dan terkini. Kami berkomitmen untuk memberikan berita yang terpercaya dan berbasis bukti ilmiah sehingga Anda dapat membuat keputusan yang tepat untuk hidup sehat.
          </Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            MediNews menyajikan berita dalam berbagai kategori, termasuk pencegahan, pengobatan, gaya hidup sehat, penelitian medis terbaru, dan banyak lagi. Kami juga menghadirkan wawancara dengan ahli kesehatan, artikel informatif, dan tips praktis untuk membantu Anda menjaga kesehatan Anda.
          </Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            Kami sangat menghargai umpan balik dari pengguna kami. Jika Anda memiliki pertanyaan, saran, atau ingin berbagi pengalaman Anda, jangan ragu untuk menghubungi kami. Kami berusaha untuk terus meningkatkan layanan kami dan memberikan konten yang relevan dan bermanfaat bagi Anda.
          </Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            Terima kasih telah menggunakan MediNews. Kami berharap aplikasi ini memberikan manfaat dan inspirasi bagi Anda dalam perjalanan hidup sehat Anda.
          </Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            <Text style={styles.salamSehat}>Salam Sehat, <Text style={[styles.sumputkeun]}>telah menggunakan MediNews. Kami </Text>MediNews!</Text> 
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
    backgroundColor: "white",
  },
  sumputkeun: {
    color: 'white',
  },
  content: {
    flex: 1,
    width: '100%',
    paddingBottom: 80, // Menambahkan padding bawah agar navbar tidak menutupi konten
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 20,
    marginBottom: -17,
    color: 'black',
    marginLeft: 12,
  },
  aboutLayout: {
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutPara: {
    color: '#68B984',
    textAlign: 'justify',
    marginBottom: 10,
  },
  medInews: {
    color: 'black',
    textAlign: 'left',
  },
  salamSehat: {
    color: '#68B984',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});

export default About;
