import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const Login = ({navigation}) => {
  // const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleMasuk(){
    navigation.navigate('Home')
  }

  const handleLogin = () => {
    // Logika untuk penanganan login
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleRegister = () => {
    // Navigasi ke halaman registrasi
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../Aset/kmbl.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity> */}

      <View style={styles.formContainer}>
        <Text style={styles.heading}>Selamat Datang</Text>

        <View style={styles.inputContainer}>
          <Image
            source={require('../../Aset/userr.png')}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            source={require('../../Aset/kunci.png')}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>

        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Lupa Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleMasuk}>
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerTextContainer}
          onPress={handleRegister}>
          <Text style={styles.registerText}>
            Tidak Memiliki Akun?{' '}
            <Text style={styles.registerTextYellow}>Daftar</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 70,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#555',
  },
  loginButton: {
    backgroundColor: '#68B984',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerTextContainer: {
    flexDirection: 'row',
  },
  registerText: {
    fontSize: 14,
    color: '#555',
  },
  registerTextYellow: {
    color: 'red',
  },
});

export default Login;
