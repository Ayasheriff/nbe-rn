import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  homeContainer: {
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    overflow: 'scroll',
  },

  footerIcons: {
    backgroundColor: 'white',
    width: '100%',
    bottom: 0,
    height: 75,
    position: 'absolute',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  balance: {
    width: '90%',
    height: 132,
    backgroundColor: 'rgba(0, 114, 54, 1)',
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: -36,
  },
  balanceImg: {
    width: '100%',
    height: 132,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 114, 54, 1)',
    alignSelf: 'center',
  },
});
