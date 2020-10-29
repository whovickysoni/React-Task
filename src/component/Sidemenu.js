import * as React from 'react';
import { View,StyleSheet,Text ,TouchableOpacity,ScrollView,Image} from 'react-native';
import Images from '../Images';
import styles from './Styles'


class Sidemenu extends React.Component {
    static navigationOptions = { header: null }
    constructor(props) {
        super(props);
        this.state = {
        }
    }
   
     
     
    render()
    
    {
    return (
        <View style={{flex:1,backgroundColor:'white'}} >


        <View style={styles.heading} >
        <Text style={{color:'#FBE34C',fontSize:30,fontWeight:'500'}} >SWAPI</Text>
        </View> 

       <ScrollView>

        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('PeopleScreen'),this.props.navigation.closeDrawer()}}>   
         <View style={styles.menuview} >
        <Text style={styles.menutext} >People</Text>
        </View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('FilmScreen'),this.props.navigation.closeDrawer()}} >   
         <View style={styles.menuview} >
        <Text style={styles.menutext} >Films</Text>
        </View> 
        </TouchableOpacity>

        </ScrollView>

        </View>
    );
}
}

export default Sidemenu;



