import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = () => {
  const [Emailfoucs, setEmailfouces] = useState(false);
  const [passwordfoucs, setpasswordfouces] = useState(false);
  const [showpassword, setshowpassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.LoginText}>Create Your Account</Text>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AntDesign name="user" size={30} color={Emailfoucs ? 'red' : 'black'} />
        <TextInput
          style={styles.Input}
          placeholder="Email"
          onFocus={() => {
            setEmailfouces(true);
            setpasswordfouces(false);
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AntDesign
          name="lock"
          size={30}
          color={passwordfoucs ? 'red' : 'black'}
        />
        <TextInput
          style={styles.InputPassword}
          placeholder="Password"
          secureTextEntry={showpassword == false ? true : false}
          onFocus={() => {
            setpasswordfouces(true);
            setEmailfouces(false);
          }}
        />
        {/* <Ionicons
          name={
            showpassword === false ? 'md-eye-off-outline' : 'ios-eye-outline'
          }
          size={30}
          color={'black'}
          onPress={() => {
            setshowpassword(!showpassword);
          }}
        /> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AntDesign name="lock" size={30} color="#900" />

        <TextInput
          style={styles.InputPassword}
          placeholder="Confirm Password"
          secureTextEntry={showpassword == false ? true : false}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Entypo name="location-pin" size={30} color="#900" />

        <TextInput style={styles.Input} placeholder="Enter Your Address" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AntDesign name="phone" size={30} color="#900" />
        <TextInput style={styles.Input} placeholder="Enter Your Phone Number" />
      </View>
      <TouchableOpacity style={{marginRight: 20}}>
        <Text style={styles.btn1}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = {
  icon: {
    paddingBottom: 0,
  },
  container: {
    flex: 1,
    width: '100%',
    alignItem: 'center',
    justifyContent: 'center',
  },
  LoginText: {
    color: 'red',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  Input: {
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
    backgroundColor: 'red',

    alignSelf: 'center',
    borderRadius: 10,

    backgroundColor: 'white',
    fontSize: 18,
    paddingLeft: 15,
    width: '80%',
  },
  InputPassword: {
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
    backgroundColor: 'red',

    alignSelf: 'center',
    borderRadius: 10,

    backgroundColor: 'white',
    fontSize: 18,
    paddingLeft: 15,
    width: '80%',
  },
  btn1: {
    textAlign: 'center',
    padding: 10,
    height: 40,
    backgroundColor: '#D82E2F',
    borderRadius: 10,
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    width: '80%',
    marginLeft: 40,
  },
};
export default Login;
