import React, { Component } from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
// // import { ImagePicker } from 'expo';
//import firebase from "react-native-firebase";
import * as firebase from 'firebase/app';
//import 'firebase/storage';

import firebaseSvc from '../../config/FirebaseSvc';
// // Don't forget to initialize firebase!!!
// //

export default class FileUpload extends Component {

  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title:'Chat!',
  }

  state = {
    messages: [],
  };

  get user() {
    return {
      name: this.props.navigation.state.name,
      email: this.email,
   //   avatar: this.props.navigation.state.params.avatar,
     // id: firebaseSvc.uid,
      _id: firebaseSvc.uid, // need for gifted-chat
    };
  }

  componentDidMount() {
    firebaseSvc.get(question =>
      this.setState(previousState => ({
        questions: GiftedChat.append(previousState.questions, question),
      }))
    );
  }
  componentWillUnmount() {
    firebaseSvc.off();
  }

  
  render() { 
    const chat = <GiftedChat questions ={ this.state.questions } onSend={firebaseSvc.send}  user={this.user} />;
     return (
    
       <KeyboardAvoidingView styles={{flex: 1}} behaviour='padding'  >
           {chat}
       </KeyboardAvoidingView>
 
      //  <GiftedChat
      //    questions={this.state.questions}
      //    onSend={firebaseSvc.send}
      //    user={this.user}
      //  />
     );
   }
 

}  


const styles = StyleSheet.create({ 
  button: { 
    padding: 10, 
    borderWidth: 1, 
    borderColor: "#333", 
    textAlign: "center", 
    maxWidth: 150 
  }
});

 
