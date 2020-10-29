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
import Images from '../Images'
import CustomButton from '../component/Button.js'
import CustomHeader from '../component/CustomHeader'
class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }

render() {
  return (
    <View style={styles.container}>
 <CustomHeader
       
       back={Images.menu}
       title="SWAPI"
       navigation={this.props.navigation}
       CallFuncations={() => {this.props.navigation.openDrawer()}}
       />
     
    
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
})

export default DashBoard;