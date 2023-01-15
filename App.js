import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {View} from 'react-native';
import LogIn from './src/pages/LogInPage/LogIn';
import SignUp from './src/pages/SignUp/SignUp';
import Verification from './src/pages/Verification/Verification';
import CreatingPw from './src/pages/CreatePW/CreatePW';
import Finish from './src/pages/Finish/Finish';

import HomePage from './src/pages/HomePage/HomePage';
import NavLogo from './src/pages/components/NavLogo/NavLogo';
// import Map from './src/pages/Map/MapView';
import NavbarScreen from './src/pages/components/Navbar/NavbarScreen';
import Beneficiary from './src/pages/Beneficiary/Beneficiary';
import BenefPeople from './src/pages/Beneficiary/BenefPeople';
import BenefHistory from './src/pages/Beneficiary/History';
import Airpay from './src/pages/Airpay/Airpay';

// import {store} from './src/utils/redux/store';
// import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1, width: '100%', height: '100%'}}>
        <Stack.Navigator>
          <Stack.Screen name="login" component={LogIn} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="verification" component={Verification} />
          <Stack.Screen name="home" component={HomePage} />
          <Stack.Screen name="createpw" component={CreatingPw} />
          {/* <Stack.Screen name="map" component={Map} /> */}
          <Stack.Screen name="finish" component={Finish} />
          <Stack.Screen name="beneficiary" component={Beneficiary} />
          <Stack.Screen name="addpeople" component={BenefPeople} />
          <Stack.Screen name="history" component={BenefHistory} />
          <Stack.Screen name="airpay" component={Airpay} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
    // <Provider store={store}>

    // </Provider>
  );
};

export default App;

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
//  * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
