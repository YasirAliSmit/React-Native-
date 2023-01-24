import {colors, btn1, hr88} from '../Global/style.jsx';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Rone from '../Images/pizza.png';
import {useNavigation} from '@react-navigation/native';
import SignIn from './LoginSignScree/Login';
import Login from './LoginSignScree/Login';
const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To Foodie</Text>
      <View style={styles.Logo}>
        <Image style={styles.rider} source={Rone} />
      </View>
      <View style={styles.hr88} />
      <Text style={styles.text}>
        Find The Best Food Around You at Lowest Price.
      </Text>
      <View style={styles.hr88} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={{marginRight: 20}}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.btn1}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btn1}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ff4242',

    alignItems: 'center',
    width: '100%',
  },

  hr88: {
    width: '80%',
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  btn1: {
    textAlign: 'center',
    padding: 10,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,

    color: '#D82E2F',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    marginVertical: 15,
    fontWeight: '200',
  },
  text: {
    fontSize: 15,
    width: '90%',
    color: 'white',
    textAlign: 'center',
  },
  Logo: {
    marginVertical: -30,
  },
};
export default Welcome;

`
// rider: {    
      
  
// },
//   Logo: {},
//   text: {},
//   hr88: {},`;
