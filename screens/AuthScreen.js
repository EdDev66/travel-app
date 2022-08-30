import * as React from 'react';
import { View, useWindowDimensions, TextInput, Text, StyleSheet, Button } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { StatusBar } from 'react-native';
import FormItem from '../components/FormItem';
import CustomButton from '../components/CustomButton';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';



const RegisterRoute = ({ navigation }) => {
  
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const registerHandler = async () => {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    try {
      navigation.replace('Home')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
  <View style={styles.container}>
  <View style={styles.content}>
    <FormItem 
        title='E-mail address' 
        value={email}
        onChange={(val) => setEmail(val)}
        placeholder='john@gmail.com'
    />
    {/* <FormItem 
        title='Username' 
        value={username}
        onChange={(val) => setUsername(val)}
        placeholder='john123'
    /> */}
    <FormItem 
        title='Password' 
        value={password}
        onChange={(val) => setPassword(val)}
        placeholder='•••••' 
        password={true}
    />
  </View>
    <View style={styles.btnContainer}>
      <CustomButton 
        title='Create account'
        onPress={() => registerHandler()}
      />
    </View>
  </View>
    );
  }

const LoginRoute = ({ navigation }) => {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const loginHandler = async () => {
    const response = await signInWithEmailAndPassword(auth, username, password)
    try {
      // const user = response.user
      // console.log(user)
      navigation.replace('Home')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FormItem 
            value={username} 
            title='E-mail address' 
            onChange={(val) => setUsername(val)}
            placeholder='john123@gmail.com'
        />
        <FormItem 
            value={password} 
            title='Password' 
            onChange={(val) => setPassword(val)}
            placeholder='• • • • •' 
            password={true}
        />
      </View>
        <View style={styles.btnContainer}>
          <CustomButton 
            title='Login'
            onPress={() => loginHandler()}
          />
        </View>
      </View>
  )
  
};

const renderScene = ({ route }) => {
  switch(route.key) {
    case 'register':
      return <RegisterRoute navigation={route.navigation}/>
      case 'login':
      return <LoginRoute navigation={route.navigation}/>
  }
}

export default function TabViewExample({ navigation }) {

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'register', title: 'REGISTER', navigation: navigation },
    { key: 'login', title: 'LOGIN', navigation: navigation },
  ]);

  return (
    <>
    <StatusBar />
    <TabView
      navigationState={{ index, routes }}
      navigation={navigation}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => <TabBar {...props} style={{backgroundColor: '#000'}}/>}
    />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
    // justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  btnContainer: {
    paddingVertical: 20,
    justifyContent: 'flex-end',
    marginBottom: 10
  }
})