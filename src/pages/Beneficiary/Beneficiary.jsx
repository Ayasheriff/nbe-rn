import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Beneficiary = ({navigation, route}) => {
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

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 20,
        }}>
        <Text style={styles.benefTxt}>Beneficiary</Text>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../assets/images/req1.png')} />
          <Image source={require('../../assets/images/req2.png')} />
        </View>
      </View>
      <View style={styles.beneImg}>
        <Image
          style={styles.img1}
          source={require('../../assets/images/Group11.png')}
        />
        <Image
          style={styles.img2}
          source={require('../../assets/images/Group2.png')}
        />
        <Image
          style={styles.img3}
          source={require('../../assets/images/Group4.png')}
        />
      </View>
      <View style={styles.benefContainer}>
        <Text style={styles.txt1}>No Beneficiaries</Text>
        <Text style={styles.txt2}>
          You don’t have beneficiaries, add some so you can send money
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('addpeople')}
          style={styles.benefBtn}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 4,
              color: 'white',
            }}>
            + Add
          </Text>
        </TouchableOpacity>
      </View>

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
export default Beneficiary;
const styles = StyleSheet.create({
  benefTxt: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  beneImg: {
    backgroundColor: 'rgba(227, 236, 250, 1)',
    borderRadius: 20,
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginTop: 100,
  },
  img1: {
    right: 30,
  },
  img2: {
    left: 20,
  },
  img3: {
    right: 30,
  },
  txt1: {
    fontSize: 18,
    fontWeight: '500',
    color: 'rgba(52, 52, 63, 1)',
    textAlign: 'center',
    margin: 10,
  },
  txt2: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(70, 70, 101, 1)',
    alignSelf: 'center',
    textAlign: 'center',
    width: '65%',
  },
  benefBtn: {
    backgroundColor: 'rgba(0, 114, 54, 1)',
    width: 63,
    height: 30,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 10,
  },
  footerIcons: {
    backgroundColor: 'white',
    width: '100%',
    height: 75,
    position: 'absolute',
    bottom: -235,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  icon: {
    backgroundColor: 'rgba(241, 243, 251, 1)',
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 15,
  },
});
