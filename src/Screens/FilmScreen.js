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


class FilmScreen extends Component {
  
  static navigationOptions = { header: null }
  constructor(props) {
    super(props);
    this.state = {
     // mounted:false,
      dataSource:[],
      page:1
    };
  }
  
 async componentDidMount(){
   // this.mounted = true;
   // alert(this.mounted)
 await   fetch("http://swapi.dev/api/films/")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSource:  [...this.state.dataSource, ...responseJson.results]
      })
    
    // alert(JSON.stringify(this.state.dataSource))
    })
    .catch(error=>console.log(error))
    }
  
    FilmData=({item,index})=>{
      const {navigation} = this.props;
      return ( 
         <View>
          <>
          <TouchableOpacity key={item} onPress={()=>this.props.navigation.navigate('FilmsDetails',{Filmid:item.id})} >
            <View style={{padding:5,margin:10, paddingHorizontal:10,paddingVertical:10, elevation:5,backgroundColor:'white',  borderRadius:20,}} >
            <Text style={styles.textstyle}  >Movie Title is  {item.title}</Text>
            <Text style={styles.textstyle} >Opening_crawl {item.opening_crawl}</Text>
            <Text style={styles.textstyle} >Director Name is {item.director}</Text>
            <Text style={styles.textstyle}  >Producer Name is {item.producer}</Text>
            <Text style={styles.textstyle} >Release Date is {item.release_date}</Text>
            </View>
            </TouchableOpacity>

            </>
            </View>
      )
    }
    handelePagin=()=>{
      console.log("loadmore............")
    }
render() {
  
  return (
    <View style={styles.container}>
<Header 
 navigation={this.props.navigation}
back={Images.back}
title="Films"
/>

      <FlatList
         padding ={10}
         showsVerticalScrollIndicator={false}
         onEndReached={this.handelePagin}
         onEndReachedThreshold={0}
         data={this.state.dataSource}
         extraData={this.state.dataSource}
         keyExtractor={(item, index) => item._id}
         renderItem={this.FilmData}
         
       />

     
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

export default FilmScreen;