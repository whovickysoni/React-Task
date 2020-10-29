import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  View,
  Image,
  Platform,
  FlatList

} from 'react-native'
import Header from '../component/Header'
import Images from '../Images'
import AsyncStorage from '@react-native-async-storage/async-storage';



class PeopleDetails extends Component {
    
  static navigationOptions = { header: null }
  constructor(props) {
    super(props);
    this.state = {
        dataSource:[],
       // id:this.props.route.params.Cat_id
    };
  }

  
    


  
  async componentDidMount(){
    
     // alert('hi')
    await fetch("https://swapi.dev/api/people/1")
     .then(response => response.json())
     .then((responseJson)=> {
       this.setState({
        dataSource:  [...this.state.dataSource,responseJson]
       })
      
       //alert(JSON.stringify(this.state.dataSource))
     })
     .catch(error=>console.log(error)) //to catch the errors if any
     }
 // this.props.route.params.Cat_id,

 PeopleDetail=({item,index})=>{
    return ( 
       <View>
        <>
        
          <View style={{padding:5,margin:10, paddingHorizontal:10,paddingVertical:10, elevation:5,backgroundColor:'white',  borderRadius:20,}} >
          <Text style={styles.textstyle} >Name is {item.name}</Text>
          <Text style={styles.textstyle}>Height is {item.height}</Text>
          <Text style={styles.textstyle}>Hair color is {item.hair_color}</Text>
          <Text style={styles.textstyle} >Skin color is {item.skin_color}</Text>
          <Text style={styles.textstyle}>Eye color is {item.eye_color}</Text>

          <Text style={styles.textstyle}>Birth year is {item.birth_year}</Text>
          <Text style={styles.textstyle}>gender is {item.gender}</Text>
          </View>
          

          </>
          </View>
    )
  } 
render() {
    
  return (
    <View style={styles.container}>
<Header 
 navigation={this.props.navigation}
back={Images.back}
title="PeoplesDetails"
/>


<View style={{padding:10}}>
      <FlatList
         padding ={10}
         data={this.state.dataSource}
         extraData={this.state.dataSource}
         keyExtractor={(item, index) => index}
         renderItem={this.PeopleDetail}
         showsVerticalScrollIndicator={false}
         
         onEndReachedThreshold={0}
        
       />

     </View>
    
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  
  textstyle:
  {fontSize:20,
  }

})

export default PeopleDetails;