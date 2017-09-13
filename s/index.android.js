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
   ListView,
   Button
 } from 'react-native';


var Sound = require('react-native-sound');
var music = require('react-native-sound');
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

class Players extends Component {
   constructor(props){
     Sound.setCategory('Playback',true);
     super(props)
     this.state = {
       play_status:false,
     }
   }
  componentDidMount() {
 	 //instance of audio
     music = new Sound(require('./a.mp3'), (error) => {
 	if (error) {
 		console.log('failed to load the sound', error);
 		return;
 	}
     });
         //instance of audio



  }

  play = () => {

    music.play((success) => {
 	   if (success) {
         console.log('successfully finished playing');
 	} else {
 	console.log('playback failed due to audio decoding errors');
 	}
      });
   this.setState({play_status:!this.state.play_status})
  }

  pause = () => {
     music.pause();
     this.setState({play_status:!this.state.play_status})
  }

  render() {
     return(
         <View style={styles.mainContainer}>
         <View style = {{flex:2}}>

           <Text style= {{fontSize:17,marginLeft:20}} >
             {this.props.title}
           </Text>
         </View>
         <View style = {{flex:1}}>
           { !this.state.play_status?
             <Button
             onPress={this.play}
             title="Play"

             />
             :
             <Button
             onPress={this.pause}
             title="Pause"

             />
           }
           </View>

         </View>
     );
  }
 }



class s extends Component {
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
   mainContainer: {

       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection:'row',
   },
   controlContainer: {
       marginTop: 30,
       flexDirection: 'row'
   },
   playButton: {
       tintColor: '#4A90E2',
       height: 16,
       width: 16,
   }
 });

 AppRegistry.registerComponent('s', () => s);
