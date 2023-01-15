import React, {useState} from 'react';
import NavLogo from '../components/NavLogo/NavLogo';
import {RadioButton, Checkbox} from 'react-native-paper';
import firebase from '@react-native-firebase/app';

import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {firebaseConfig} from '../../utils/firebase';

import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

import styles from './CreatePW.styles';

const CreatingPw = ({navigation, route}) => {
  const {phoneNUmber} = route.params;
  const [checked, setChecked] = React.useState('first');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  // const userInfo = state => state.userInfo.value;

  const register = async () => {
    if (password) {
      // Create a new user with email and password
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(
          route?.params?.phoneNumber + '@phone.com',
          password,
        );
      response.user.updatePhoneNumber(route?.params?.phoneNumber);

      // Get the user ID
      const uid = response.user.uid;
      console.log('----------------57457456456564555', uid);
      // navigation.navigate('finish', uid);

      // // Add the user ID to the Firestore users collection
      // const userRef = firebase.firestore().collection('users').doc(uid);
      // await userRef.set([
      //   route.params?.phoneNumber,
      //   route.params?.firstName,
      //   route.params?.lastName,
      //   password,
      // ]);
      // navigation.navigate('verification');

      // return response.user;
    } else {
      alert('please enter password');
    }
  };

  return (
    <View style={styles.createContainer}>
      <View>
        <NavLogo />
        <Text style={styles.setPassword}>Set Your Password</Text>
        <Text style={styles.enterStrongPw}>
          Enter a strong password for your online banking account
          {JSON.stringify(route?.params?.phoneNUmber)}
        </Text>
        <TextInput
          style={{
            width: '100%',
            height: 65,
            paddingLeft: 10,
            marginTop: 20,
            alignSelf: 'center',
            color: 'black',
            backgroundColor: 'white',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'rgba(0, 114, 54, 1)',
          }}
          placeholder={'Password'}
          placeholderTextColor={'rgba(0, 114, 54, 1)'}
          keyboardType="numbers-and-punctuation"
          secureTextEntry
          autoFocus
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          style={{
            width: '100%',
            height: 65,
            paddingLeft: 10,
            marginTop: 20,
            alignSelf: 'center',
            color: 'black',
            backgroundColor: 'white',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'rgba(0, 114, 54, 1)',
          }}
          placeholder={'Confirm Password'}
          placeholderTextColor={'rgba(0, 114, 54, 1)'}
          keyboardType="numbers-and-punctuation"
          secureTextEntry
          autoFocus
          value={confirm}
          onChangeText={text => setConfirm(text)}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Text style={styles.radioText}>Lower case letter</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
              <Text style={styles.radioText}>Minimum 8 characters</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="third"
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('third')}
              />
              <Text style={styles.radioText}>Special character</Text>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="fourth"
                status={checked === 'fourth' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('fourth')}
              />
              <Text style={styles.radioText}>Upper case letter</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="fifth"
                status={checked === 'fifth' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('fifth')}
              />
              <Text style={styles.radioText}>Number</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={register} style={styles.nextButton}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 16,
              fontWeight: '700',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CreatingPw;
