/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView
} from 'react-native';
import Players from './list'

var Sound = require('react-native-sound');

const musiclist = [
  {
    music:require('./a.mp3'),
    title:'Mere Raske kamar',
  },
  {
    music:require('./b.mp3'),
    title:'Bina Rap wala songs',
  },
  {
    music:require('./a.mp3'),
    title:'Mere Raske kamar',
  },
  {
    music:require('./b.mp3'),
    title:'Bina Rap wala songs',
  },
  {
    music:require('./a.mp3'),
    title:'Mere Raske kamar',
  },
]
export default class s extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(musiclist),
    };
  }


  render() {
    return (
      <View style={styles.container}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <Players
          music = {rowData.music}
          title = {rowData.title}
          />
        }
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection:'row',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('s', () => s);
