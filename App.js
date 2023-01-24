import {View, Text} from 'react-native';
import Login from './Contaners/Assets/Screens/LoginSignScree/Login';
import Welcome from './Contaners/Assets/Screens/Welcome';
import SignIn from './Contaners/Assets/Screens/LoginSignScree/Signin';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
