import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import styles from './Airpay.styles';

const Airpay = ({navigation, route}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
          overflow: 'scroll',
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.push()}>
            <Image
              style={{width: 25, height: 25, marginTop: 7}}
              source={require('../../assets/images/threeLinesDark.png')}
            />
          </TouchableOpacity>
          <Image
            style={{marginLeft: 10, marginRight: 10}}
            source={require('../../assets/images/man1.png')}
          />
          <View style={{flexDirection: 'column'}}>
            <Text>Good Morning </Text>
            {/* <Text>
          {JSON.stringify(route?.params?.firstName)}
          {JSON.stringify(route?.params?.lastName)}
        </Text> */}
            <Text>{JSON.stringify(route?.params?.phoneNumber)}</Text>
            {/* <Text>{phoneNumber}</Text> */}
          </View>
        </View>
        <TouchableOpacity>
          <Image source={require('../../assets/images/bell.png')} />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', overflow: 'scroll', marginLeft: 20}}>
        <Image
          style={{marginRight: 10}}
          source={require('../../assets/images/cardgreen.png')}
        />
        <Image source={require('../../assets/images/cardred.png')} />
      </View>

      <View style={styles.cardDash}>
        <Text style={styles.cardTxt}>
          Touch & hold a card then drag it to this box
        </Text>
      </View>
      <TouchableOpacity style={styles.paynow}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            alignSelf: 'center',
            marginLeft: 140,
            fontWeight: '700',
          }}>
          Pay Now
        </Text>
        <Image
          style={{alignSelf: 'center', marginRight: 20}}
          source={require('../../assets/images/miniprint.png')}
        />
      </TouchableOpacity>

      <View style={styles.footerIcons}>
        <TouchableOpacity
          onPress={() => navigation.navigate('home')}
          style={styles.icon}>
          <Image
            style={{tintColor: 'rgba(183, 183, 183, 1)'}}
            source={require('../../assets/images/home.png')}
          />
          <Text
            style={{
              color: 'rgba(183, 183, 183, 1)',
              fontSize: 10,
              textAlign: 'center',
              paddingBottom: 2,
            }}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <Image source={require('../../assets/images/text.png')} />
          <Text
            style={{
              color: 'rgba(183, 183, 183, 1)',
              fontSize: 10,
              textAlign: 'center',
              paddingBottom: 2,
            }}>
            Transfer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('beneficiary')}
          style={styles.icon}>
          <Image
            style={{marginLeft: 10}}
            source={require('../../assets/images/users.png')}
          />
          <Text
            style={{
              color: 'rgba(183, 183, 183, 1)',
              fontSize: 10,
              textAlign: 'center',
              paddingBottom: 2,
            }}>
            Beneficiaries
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => navigation.navigate('map')}
          style={styles.icon}>
          <Image source={require('../../assets/images/location.png')} />
          <Text
            style={{
              color: 'rgba(183, 183, 183, 1)',
              fontSize: 10,
              textAlign: 'center',
              paddingBottom: 2,
            }}>
            ATM's
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('airpay')}
          style={styles.icon}>
          <Image source={require('../../assets/images/hands.png')} />
          <Text
            style={{
              color: 'rgba(183, 183, 183, 1)',
              fontSize: 10,
              textAlign: 'center',
              paddingBottom: 2,
            }}>
            Air Pay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Airpay;
