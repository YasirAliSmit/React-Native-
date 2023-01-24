import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignIn = ({navigation}) => {
  const [Emailfoucs, setEmailfouces] = useState(false);
  const [passwordfoucs, setpasswordfouces] = useState(false);
  const [showpassword, setshowpassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.LoginText}>Sign In</Text>
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
      </View>
      <TouchableOpacity style={{marginRight: 20}}>
        <Text style={styles.btn1}>Sign In</Text>
      </TouchableOpacity>
      <View style={{display: 'flex', alignItems: 'center'}}>
        <Text style={styles.forgot}>Forget Password</Text>
        <Text style={styles.or}>OR</Text>
        <Text style={styles.gftxt}>Sign In With</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <Text style={styles.logo}>
            {' '}
            <AntDesign name="facebook-square" size={30} color="blue" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.logo}>
            {' '}
            <AntDesign name="googleplus" size={30} color="#D82E2F" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.hr88} />
      <Text style={styles.signUp}>
        Don't have an account
        <Text style={{color: '#D82E2F'}}> SignUp</Text>
      </Text>
    </View>
  );
};
const styles = {
  signUp: {
    alignSelf: 'center',
  },
  hr88: {
    width: '80%',
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    marginVertical: 20,
    alignSelf: 'center',
  },
  logo: {
    width: 40,
    backgroundColor: 'white',
    marginRight: 10,
    borderRadius: 10,
    elevation: 20,
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
  forgot: {
    color: 'grey',
    marginVertical: 20,
  },
  or: {
    color: 'red',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  gftxt: {
    color: 'grey',
    marginVertical: 10,
    fontSize: 25,
  },
};
export default SignIn;

