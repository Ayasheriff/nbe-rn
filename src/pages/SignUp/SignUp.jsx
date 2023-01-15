import React, {useState} from 'react';
// import {useDispatch} from 'react-redux';
import NavLogo from '../components/NavLogo/NavLogo';
// import firebase from '@react-native-firebase/app';
// import {
//   getAuth,
//   signInWithPhoneNumber,
//   //   RecaptchaVerifier,
// } from '@firebase/auth';

// import firestore from '../../utils/firebase';
// import userInfo from '../../utils/redux/userSlice';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import firebase from '@react-native-firebase/app';
// import {signInWithPhoneNumber, getAuth} from '@firebase/auth';
// import reactDom from 'react-dom';

const SignUp = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <View style={styles.signContainer}>
      <View>
        <NavLogo />
        <Text style={styles.mobileNumber}>Mobile number</Text>
        <Text style={styles.enterMobile}>
          Enter the mobile number registred in the bank
        </Text>
        <TextInput
          style={{
            width: '100%',
            height: 65,
            marginTop: 20,
            alignSelf: 'center',
            color: 'black',
            backgroundColor: 'white',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#007236',
          }}
          placeholder={'First Name'}
          placeholderTextColor={'#007236'}
          keyboardType="text"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />

        <TextInput
          style={{
            width: '100%',
            height: 65,
            marginTop: 20,
            alignSelf: 'center',
            color: 'black',
            backgroundColor: 'white',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#007236',
          }}
          placeholder={'Last Name'}
          placeholderTextColor={'#007236'}
          keyboardType="text"
          value={lastName}
          onChangeText={text => setLastName(text)}
        />

        <TextInput
          style={{
            width: '100%',
            height: 65,
            marginTop: 20,
            alignSelf: 'center',
            color: 'black',
            backgroundColor: 'white',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#007236',
          }}
          placeholder={'Mobile number'}
          placeholderTextColor={'#007236'}
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
        />
      </View>

      <View style={styles.nextFooter}>
        <TouchableOpacity
          // onPress={()=> navigation.navigate('createPW')}
          onPress={() =>
            phoneNumber
              ? navigation.navigate('createpw', {
                  phoneNumber: phoneNumber,
                  firstName: firstName,
                  lastName: lastName,
                })
              : alert('enter your firstname,lastname and phonenumber')
          }
          style={styles.nextButton}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 16,
              fontWeight: '700',
            }}>
            Next
          </Text>
        </TouchableOpacity>
        <Text style={styles.textNext}>
          By signing up, you agree to our
          <Text style={{color: 'rgba(28, 36, 55, 1)'}}>Terms of Service </Text>
          and a knowledge that you have read our
          <Text style={{color: 'rgba(28, 36, 55, 1)'}}> Privacy Policy.</Text>
        </Text>
      </View>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  signContainer: {
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '100%',
    padding: 26,
    justifyContent: 'space-between',
  },
  mobileNumber: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
    color: 'black',
  },
  enterMobile: {
    color: 'rgba(183, 183, 183, 1)',
    fontSize: 16,
    fontWeight: '400',
  },
  nextButton: {
    padding: 10,
    backgroundColor: 'rgba(0, 114, 54, 1)',
    height: 50,
    borderRadius: 10,
    width: '100%',
    marginTop: 20,
  },
  nextFooter: {
    justifyContent: 'center',
  },
  textNext: {
    color: 'rgba(128, 128, 128, 1)',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 10,
  },
});
