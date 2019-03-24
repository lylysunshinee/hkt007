/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, DeviceEventEmitter } from 'react-native';
import AppRoutes from '@navigation';
import { Provider } from 'react-redux';
import store from './redux/store';
import OneSignal from 'react-native-onesignal';
import { LocalStorage } from '@data';
import { KeyStorerage } from '@constant';
import firebase from 'firebase';
import { firebaseConfig } from './constans/FiresbaseConfig';


firebase.initializeApp(firebaseConfig);

export default class App extends Component {

  async componentWillMount() {
    OneSignal.init("3f8c3939-0a07-41d0-992d-2d833a20c61c");
    OneSignal.configure();
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds.bind(this));
    OneSignal.inFocusDisplaying(1);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
    LocalStorage.set(KeyStorerage.DEVICE_ID, device.userId)
  }


  render() {
    return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    );
  }
}

