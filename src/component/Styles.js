import * as React from 'react';
import { View,StyleSheet } from 'react-native';

const styles=StyleSheet.create({
    red:{
        color:"red"
    },

    heading:{
        backgroundColor:'black',padding:20,
        paddingVertical:10,
        alignItems:'center',justifyContent:'center',
        height:150,
    },
    menuview:{
        backgroundColor:'white',
        borderColor:'#030057',
       
        borderWidth:2,borderRadius:20,margin:5
    },

    menutext:{
        color:'#1A1A1A',
        fontSize:20,
        padding:20
   },

    fond:{
        fontSize:20,
        borderColor:'black',
        borderWidth:.5,
        margin:15,
        borderRadius:10
    },
    other:{
        fontSize:20
    }

})

export default styles