import 'react-native-gesture-handler';
// import React, { Component } from 'react';
import * as React from 'react';
import * as firebase from 'firebase';

import { getStorage } from '@firebase/storage';
import '@firebase/database';
import { getDatabase, ref} from '@firebase/database';

import TabNavigator from './Routes';
import { NavigationContainer } from '@react-navigation/native';
import { Tab } from 'native-base';
// import { getDatabase, ref, onValue } from "firebase/database";
// import NetInfo from "@react-native-community/netinfo";
//
// const unsubscribe = NetInfo.addEventListener(state => {
//   console.log("Connection type", state.type);
//   console.log("Is connected?", state.isConnected);
// });

// const firebaseConfig = {
//   apiKey: "AIzaSyBkGmokW285RxesrlEOEGMOpL7DjBMvk_U",
//   authDomain: "galapago-d4744.firebaseapp.com",
//   databaseURL: "https://galapago-d4744-default-rtdb.firebaseio.com",
//   projectId: "galapago-d4744",
//   storageBucket: "galapago-d4744.appspot.com",
//   messagingSenderId: "508955483910",
//   appId: "1:508955483910:web:e910e43a67fdbca4c64887"
// };
//
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth;
// export const db = firebase.database();
// const storage = getStorage(firebaseApp);
// const connectedRef = ref(db, ".info/connected");
// onValue(connectedRef, (snap) => {
//   if (snap.val() === true) {
//     console.log("connected");
//   } else {
//     console.log("not connected");
//   }
// });
// unsubscribe();

export default class App extends React.Component {
  render() {
    return (
      <TabNavigator/>
    );
  }
}
