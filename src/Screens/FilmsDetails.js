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

//import PushNotification from 'react-native-push-notification'
import Images from '../Images'
// const {navigation} = this.props;
// const text = this.props.navigation.getParams('id')
//   alert(id);
//console.log(this.props.navigation.state.params.Filmid);
class FilmsDetails extends Component  {
  
  static navigationOptions = { header: null }
  constructor(props) {
    super(props);
    this.state = {
     // mounted:false,
      dataSource:[]
    };
  }
  
 async componentDidMount(){
  
 await   fetch(`https://swapi.dev/api/films/3`)
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSource:  [...this.state.dataSource,responseJson]
      })
    
    // alert(JSON.stringify(this.state.dataSource))
    })
    .catch(error=>console.log(error))
    }
  
    FilmDetail=({item,index})=>{

      //  alert(JSON.stringify(item))
      return ( 
         <View>
          <>
          <TouchableOpacity  >
            <View style={{padding:5,margin:10, paddingHorizontal:10,paddingVertical:10, elevation:5,backgroundColor:'white',  borderRadius:20,}} >
            <Text style={styles.textstyle} >Movie Title is = {item.title}</Text>
            <Text style={styles.textstyle}>Opening_crawl = {item.opening_crawl}</Text>
            <Text style={styles.textstyle}>Director Name is  = {item.director}</Text>
            <Text style={styles.textstyle}>Producer Name is  = {item.producer}</Text>
            <Text style={styles.textstyle}>Release Date is  = {item.release_date}</Text>
            </View>
            </TouchableOpacity>

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
title="Films"
/>
<View style={{padding:10}}>
      <FlatList
         padding ={10}
         data={this.state.dataSource}
         extraData={this.state.dataSource}
         keyExtractor={(item, index) => item._id}
         renderItem={this.FilmDetail}
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

export default FilmsDetails;