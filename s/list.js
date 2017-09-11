import React, { Component } from 'react';
import { View,
        Button,
        Alert,
        StyleSheet,
        Text,
} from 'react-native';
import Sound from 'react-native-sound';


var music = require('react-native-sound');

export default class Players extends Component {
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

const styles = StyleSheet.create({
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
