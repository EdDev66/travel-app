import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

import StartScreen from './screens/StartScreen';
import AuthScreen from './screens/AuthScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import DestinationScreen from './screens/DestinationScreen';
import { store } from './store/redux/store';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const TabNavigator = () => {
   return <Tab.Navigator screenOptions={{
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: '#bfc1c3',
    tabBarInactiveBackgroundColor: '#308ae2',
    tabBarActiveBackgroundColor: '#308ae2'
   }}>
      <Tab.Screen name='HomeScreen' component={HomeScreen} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) =>  <Ionicons name={focused ? "md-home" : "md-home-outline"} size={24} color="white" />,
      }}/>
      <Tab.Screen name='Favorites' component={FavoritesScreen} options={{
        // headerShown: true,
        title: 'My favorites',
        tabBarIcon: ({ focused }) =>  <FontAwesome name={focused ? "star" : "star-o"} size={24} color="white" />,
      }}/>
      <Tab.Screen name='Profile' component={ProfileScreen} options={{
        headerTitle: 'My Profile',
        tabBarIcon: ({ focused }) =>  <FontAwesome name={focused ? "user" : 'user-o'} size={24} color="white" />
      }}/>
    </Tab.Navigator>
  }

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Start' component={StartScreen} options={{
          headerShown: false
        }}/>
        <Stack.Screen 
            name='Auth' 
            component={AuthScreen} 
            options={{
              headerShown: false
            }}/>
        <Stack.Screen name='Home' component={TabNavigator} options={{
          headerShown: false
        }}/>
        <Stack.Screen name='Destination' component={DestinationScreen} options={{
          headerTransparent: true,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
 
});
