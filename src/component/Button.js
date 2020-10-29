import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, TextInput,Dimensions } from "react-native";


const { width, height } = Dimensions.get('window')


class Button extends React.Component {

    static navigationOptions = { header: null }
      constructor(props) {
          super(props);
          this.state = {
          }
      }
      
      render(){
    return (
    <View style={{paddingHorizontal:30}} >
    <TouchableOpacity onPress={this.props.onpress}  style={[styles.appButtonContainer,this.props.customStyle]}>   
    <Image
  source={this.props.google}
  resizeMode="cover"
  style={{ width: 25, height: 25, margin: 20 }} />
    <Text style={styles.appButtonText}>{this.props.title}</Text>
    </TouchableOpacity> 
    </View>

   )
 }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#47D5A3',
    height: 50,
    borderColor:'black',
    borderRadius: 10,
    margin: 10,
    paddingHorizontal:20,
    width:width-100
  },

  
  appButtonContainer: {
    width:'100%',
    flexDirection:'row', height:50, borderWidth:1, paddingHorizontal:20, borderRadius:20,  justifyContent:'space-around',alignItems:'center'
  },
  appButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
export default Button;