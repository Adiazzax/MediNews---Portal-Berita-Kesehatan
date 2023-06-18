import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation} from '@react-navigation/native';

const Register = ({navigation}) => {
// const navigation = useNavigation();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    // Logika untuk penanganan registrasi
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  const handleSignIn = () => {
    // Navigasi ke halaman login
    navigation.navigate('Login');
  };
  const handleBuatAkun = () => {
    // Navigasi ke halaman login
    navigation.navigate('Login');
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../../Aset/kmbl.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity> */}

      <View style={styles.formContainer}>
        <Text style={styles.heading}>Daftar</Text>

        <View style={styles.inputContainer}>

          <TextInput
            style={styles.input}
            placeholder="Nama Lengkap"
            onChangeText={(text) => setFullName(text)}
            value={fullName}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>

        <View style={styles.inputContainer}>

          <TextInput
            style={styles.input}
            placeholder="Buat Password"
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity
            style={styles.passwordVisibilityButton}
            onPress={togglePasswordVisibility}>
            <Image
              source={require('../../Aset/mata.png')}
              style={styles.passwordVisibilityIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Konfirmasi Password"
            secureTextEntry={!showConfirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
          />
          <TouchableOpacity
            style={styles.passwordVisibilityButton}
            onPress={toggleConfirmPasswordVisibility}
          >
            <Image
              source={require('../../Aset/mata.png')}
              style={styles.passwordVisibilityIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleBuatAkun}
        >
          <Text style={styles.buttonText}>Buat Akun</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInTextContainer} onPress={handleSignIn}>
          <Text style={styles.signInText}>
            Sudah punya akun? <Text style={styles.signInTextYellow}>Masuk</Text>
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
  passwordVisibilityButton: {
    padding: 5,
  },
  passwordVisibilityIcon: {
    width: 20,
    height: 20,
  },
  registerButton: {
    backgroundColor: '#68B984',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInTextContainer: {
    flexDirection: 'row',
  },
  signInText: {
    fontSize: 14,
    color: '#555',
  },
  signInTextYellow: {
    color: '#FFC200',
  },
});

export default Register;
