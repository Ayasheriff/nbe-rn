import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const BenefPeople = ({navigation, route}) => {
  return (
    <View style={{justifyContent: 'space-between', flexDirection: 'column'}}>
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

      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('history')}
          style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene1.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene2.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene3.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene4.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene5.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene6.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene7.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene8.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene9.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene10.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene11.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene12.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene13.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene14.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene15.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene16.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene17.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene18.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene19.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene20.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene21.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene22.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene23.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene24.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: -10, marginTop: -10}}>
          <Image source={require('../../assets/images/bene25.png')} />
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
export default BenefPeople;

const styles = StyleSheet.create({
  footerIcons: {
    backgroundColor: 'white',
    width: '100%',
    height: 75,
    position: 'absolute',
    bottom: 93,
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
  benefTxt: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
});
