import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ImageBackgroundComponent,
} from 'react-native';
import PeopleCard from './peopleCard';
import styles from './Home.styles';

const Homepage = ({route, navigation}) => (
  /* const {phoneNumber} = route.params;*/ <View style={styles.homeContainer}>
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

    <View style={styles.balance}>
      <ImageBackground
        style={styles.balanceImg}
        source={require('../../assets/images/Rectangle.png')}>
        <View
          style={{
            justifyContent: 'space-between',
            margin: 15,
            flexDirection: 'row',
          }}>
          <Text style={{color: 'white'}}>balance</Text>
          <Image source={require('../../assets/images/miniprint.png')} />
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 22,
            fontWeight: '700',
            color: 'white',
          }}>
          Press here to show balance
        </Text>
      </ImageBackground>
    </View>

    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        // margin:(0, 26, 0, 26)
        marginLeft: 26,
        marginRight: 26,
        marginTop: -20,
      }}>
      <View
        style={{
          backgroundColor: 'rgba(0, 201, 116, 0.15)',
          width: 60,
          height: 60,
          borderRadius: 13,
        }}>
        <Image
          style={{alignSelf: 'center', margin: 18}}
          source={require('../../assets/images/pound.png')}
        />
        <Text style={{textAlign: 'center'}}>Accounts</Text>
      </View>

      <View
        style={{
          backgroundColor: 'rgba(0, 173, 248, 0.15)',
          width: 60,
          height: 60,
          borderRadius: 13,
        }}>
        <Image
          style={{alignSelf: 'center', margin: 18}}
          source={require('../../assets/images/keyboard.png')}
        />
        <Text style={{textAlign: 'center'}}>Cards</Text>
      </View>

      <View
        style={{
          backgroundColor: 'rgba(246, 167, 33, 0.15)',
          width: 60,
          height: 60,
          borderRadius: 13,
        }}>
        <Image
          style={{alignSelf: 'center', margin: 18}}
          source={require('../../assets/images/utilities.png')}
        />
        <Text style={{textAlign: 'center'}}>Utilities</Text>
      </View>

      <View
        style={{
          backgroundColor: 'rgba(255, 0, 46, 0.15)',
          width: 60,
          height: 60,
          borderRadius: 13,
        }}>
        <Image
          style={{alignSelf: 'center', margin: 18}}
          source={require('../../assets/images/history.png')}
        />
        <Text style={{textAlign: 'center'}}>History</Text>
      </View>
    </View>

    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '700',
          color: 'black',
          marginLeft: 26,
          marginBottom: 10,
        }}>
        Send Money
      </Text>
      <PeopleCard />
    </View>

    <View style={{overflow: 'scroll'}}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: 'black',
            marginLeft: 26,
            marginBottom: 10,
          }}>
          History
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: 'rgba(128, 128, 128, 1)',
            marginRight: 26,
            marginBottom: 10,
          }}>
          View All
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../assets/images/carrefour.png')} />
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                color: 'rgba(28, 36, 55, 1)',
              }}>
              Carrefour
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
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: 'rgba(28, 36, 55, 1)',
          }}>
          $250.21
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../assets/images/amazon.png')} />
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                color: 'rgba(28, 36, 55, 1)',
              }}>
              Amazon
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
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: 'rgba(28, 36, 55, 1)',
          }}>
          $250.21
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../assets/images/jumia.png')} />
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                color: 'rgba(28, 36, 55, 1)',
              }}>
              Jumia
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
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: 'rgba(28, 36, 55, 1)',
          }}>
          $250.21
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../assets/images/hala2.png')} />
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                color: 'rgba(28, 36, 55, 1)',
              }}>
              Hala Slimen
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
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: 'rgba(28, 36, 55, 1)',
          }}>
          $250.21
        </Text>
      </View>
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
export default Homepage;
