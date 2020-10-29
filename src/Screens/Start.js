import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  View,
  Image,
  Platform

} from 'react-native'

import PushNotification from 'react-native-push-notification'
import Images from '../Images'
import CustomButton from '../component/Button.js'
import DashBoard from './DashBoard';
import Toast from 'react-native-simple-toast';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
GoogleSignin.configure({
  // what API you want to access on behalf of the user, default is email and profile
  webClientId: '513039825685-s4o1kgdk4j4ld46le6mhjlsmua9hmvf5.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      userGoogleInfo: {},
    };
  }

  async componentDidMount()
  {
    PushNotification.popInitialNotification((notification) => {
      console.log('Initial Notification', notification);
   // alert('Initial Notification')
    
      
    });
  }
 

  async signIn  ()  {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    this.setState({
      userGoogleInfo: userInfo,
      loaded: true
    });
   // alert('login Success Google');
    Toast.show("login Success with Google")
    this.props.navigation.navigate('DashBoard')
  } catch (error) {
    Toast.show('Login fail with error: ' + error);
  }
};
render() {
  return (
    <View style={styles.container}>
<View style={{height:400,width:'100%',backgroundColor:'black',justifyContent:'center',alignItems:'center'}} >
<Text style={{color:'#FBE34C',fontSize:50,fontWeight:'bold'}} >SWAPI</Text>
</View>

      <CustomButton 
      customStyle={{marginTop:100}}
       onpress={() => this.signIn()}
        title='Sign Up Google'
        google={Images.google}
      />
    
    
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  
  
})

export default Start;