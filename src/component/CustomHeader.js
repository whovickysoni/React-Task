import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, TextInput,Dimensions } from "react-native";
class CustomHeader extends React.Component {

  static navigationOptions = { header: null }
    constructor(props) {
        super(props);
        this.state = {
        }
    }
   
    render(){

      return (
        <View style={[styles.firstview,this.props.newheader]} >
        <TouchableOpacity  onPress={() => this.props.CallFuncations()} >
        <Image source={this.props.back} style={{height:30,width:30}} resizeMode="contain" ></Image> 
        </TouchableOpacity>
      <Text style={{fontSize:30,color:'white'}} >{this.props.title}</Text>
          <Text></Text>
        </View>
  
       
      
  )
    }
}



const styles = StyleSheet.create({
   
    firstview:
      {
        paddingHorizontal:10,
        backgroundColor:'#030057',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        width:'100%',
        height:60
      },
     
});
export default CustomHeader;