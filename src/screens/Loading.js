/**
 * Loading screen, checks the API connection.
 *
 * @author: Eirik Gribbestad Gustafsson
 * @version: 24.03.2018
 */

 'use strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';

export default class SearchScreen extends Component<Props> {


  static navigationOptions = {
     title: 'Checking connection...',
     headerStyle: {backgroundColor: '#1a1a1a'},

     headerTitleStyle: {color: '#ffffff'},
  }

  render() {
    console.log('Rendering Loading...');

    // Creates an activity indicator.
    const spinner = true ? <ActivityIndicator size='large'/>: null;

    return (

      <View style={styles.container}>

        <View style={styles.container}>
          {spinner}
        </View>

        <View>
          <Text style={styles.text}>
            Connection to: The Movie DB
          </Text>
        </View>

        <Image source={require('./../images/MovieDbLogo.png')}
          style={styles.image}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  text: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
  image: {
    padding: 10,
    width: 310,
    height: 270,
    position: 'absolute',
    opacity: 0.1,
  },
});
