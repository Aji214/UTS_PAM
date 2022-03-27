import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native-web';
import Icon from 'react-native-vector-icons/ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React,{Component} from 'react'


import HomeScreen from './layar/tampilan';
import Pesanan from './layar/Pesanan_tiket';
import Tiket from './layar/Konfirmasi_tiket';
import Buat from './layar/Buat_tiket';
import Pembatalan from './layar/Pembatalan_tiket';

const Tab = createBottomTabNavigator();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  };
  render(){
    return (
      <NavigationContainer>

        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Home" component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel :'Home',
            tabBarIcon:()=>(
              <Icon name={'home'}  size={28}/>
            )
          }}
          />
          <Tab.Screen name="Booking" component={Pesanan}
          
          options={{
            headerShown: false,
            tabBarLabel :'Pesanan',
            tabBarIcon:()=>(
              <Icon name={'chatbubbles-outline'}  size={28}/>
            )
          }}
          
          />
          <Tab.Screen name="Pembatalan" component={Pembatalan}
          
          options={{
            headerShown: false,
            tabBarLabel :'pembatalan',
            tabBarIcon:()=>(
              <Icon name={'close-circle-outline'}  size={28}/>
            )
          }}
          />
          <Tab.Screen name="Lainnya" component={Buat}
          
          options={{
            headerShown: false,
            tabBarLabel :'Lainnya',
            tabBarIcon:()=>(
              <Icon name={'menu-outline'}  size={28}/>
            )
          }}
          
          />

        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;