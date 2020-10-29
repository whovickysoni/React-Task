import React, { Component } from 'react';
import {View} from "react-native"
import Navigation from './src/navigation/navigation'

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Navigation/>
      </View>
    )
  }
}