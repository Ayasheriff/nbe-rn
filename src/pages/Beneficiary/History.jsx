import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const BenefHistory = ({navigation, route}) => {
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
            source={require('../../assets/images/girl4.png')}
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

      <View style={styles.user}>
        <Image
          style={{width: 60, height: 60, marginLeft: 20, marginTop: 12}}
          source={require('../../assets/images/hala2.png')}
        />
        <View style={{flexDirection: 'column', marginLeft: 10, marginTop: 15}}>
          <Text style={{fontWeight: '700'}}>Hala Slimen</Text>
          <Text
            style={{
              color: 'rgba(183, 183, 183, 1)',
              fontSize: 12,
              fontWeight: '400',
            }}>
            +011223344556
          </Text>
          <Text
            style={{
              color: 'rgba(183, 183, 183, 1)',
              fontSize: 12,
              fontWeight: '400',
            }}>
            $486,245,52
          </Text>
        </View>
      </View>

      <Text style={styles.title}>Transactions History</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          borderBottomWidth: 2,
          borderBottomColor: 'rgba(183, 183, 183, 1)',
        }}>
        <View>
          <Text style={{fontSize: 18, fontWeight: '400', color: 'black'}}>
            Flat Rent
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: 'rgba(183, 183, 183, 1)',
            }}>
            15-12-2021
          </Text>
        </View>
        <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
          $892,48.2
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          borderBottomWidth: 2,
          borderBottomColor: 'rgba(183, 183, 183, 1)',
        }}>
        <View>
          <Text style={{fontSize: 18, fontWeight: '400', color: 'black'}}>
            House Fixes
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: 'rgba(183, 183, 183, 1)',
            }}>
            15-12-2021
          </Text>
        </View>
        <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
          $530,12.2
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          borderBottomWidth: 2,
          borderBottomColor: 'rgba(183, 183, 183, 1)',
        }}>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: 'rgba(28, 36, 55, 1)',
            }}>
            New Laptop
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: 'rgba(183, 183, 183, 1)',
            }}>
            15-12-2021
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: 'rgba(28, 36, 55, 1)',
          }}>
          $600,48.2
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          borderBottomWidth: 2,
          borderBottomColor: 'rgba(183, 183, 183, 1)',
        }}>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: 'rgba(28, 36, 55, 1)',
            }}>
            College Expenses
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: 'rgba(183, 183, 183, 1)',
            }}>
            15-12-2021
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: 'rgba(28, 36, 55, 1)',
          }}>
          $212,23
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          borderBottomWidth: 2,
          borderBottomColor: 'rgba(183, 183, 183, 1)',
        }}>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: 'rgba(28, 36, 55, 1)',
            }}>
            Car Loan
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: 'rgba(183, 183, 183, 1)',
            }}>
            15-12-2021
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: 'rgba(28, 36, 55, 1)',
          }}>
          $572,88.2
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          borderBottomWidth: 2,
          borderBottomColor: 'rgba(183, 183, 183, 1)',
        }}>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: 'rgba(28, 36, 55, 1)',
            }}>
            Mom wants some money
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: 'rgba(183, 183, 183, 1)',
            }}>
            15-12-2021
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: 'rgba(28, 36, 55, 1)',
          }}>
          $998,208.2
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          borderBottomWidth: 2,
          borderBottomColor: 'rgba(183, 183, 183, 1)',
        }}>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: 'rgba(28, 36, 55, 1)',
            }}>
            New dress
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: 'rgba(183, 183, 183, 1)',
            }}>
            15-12-2021
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: 'rgba(28, 36, 55, 1)',
          }}>
          $232,10
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          borderBottomWidth: 2,
          borderBottomColor: 'rgba(183, 183, 183, 1)',
        }}>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: 'rgba(28, 36, 55, 1)',
            }}>
            Birthday gift for ross and rachel
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: 'rgba(183, 183, 183, 1)',
            }}>
            15-12-2021
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: 'rgba(28, 36, 55, 1)',
          }}>
          $350,48.7
        </Text>
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
export default BenefHistory;

const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    height: 86,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    margin: 10,
  },
  footerIcons: {
    backgroundColor: 'white',
    width: '100%',
    height: 75,
    position: 'absolute',
    bottom: 0,
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
