/**
 * Result screen for a movie information app. Using API from "The movie DB".
 *
 * @author: Eirik Gribbestad Gustafsson
 * @version: 23.03.2018
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';


export default class SearchScreen extends Component<Props> {


  static navigationOptions = {
     title: 'Movie search:',
     headerStyle: {backgroundColor: '#1a1a1a'},
     headerTitleStyle: {color: '#ffffff'},
  }

  render() {
    console.log('Rendering SearchScreen...');

    return (

      <View style={styles.container}>


          <Image source={require('./../images/MovieDbLogo.png')}
          style={styles.image}/>


            <TextInput
              style={styles.searchInput}
              underlineColorAndroid={'transparent'}
              placeholder={'Movie/series title'}
              placeholderTextColor={'#ffffff'}
              align={'center'}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  text: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    color: '#ffffff',
    textAlign: 'center',
  },
  image: {
    padding: 10,
    width: 310,
    height: 270,
    position: 'absolute',
    opacity: 0.2,
  },
});
