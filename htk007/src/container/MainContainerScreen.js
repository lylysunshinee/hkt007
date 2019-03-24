import React, { Component } from 'react';
import { View, Text, StyleSheet, DeviceEventEmitter } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import AutoCheckInScreen from '../container/AutoCheckInScreen';
import CalendarContainerScreen from '../container/CalendarContainerScreen';
import TrackingUserScreen from '../container/TrackingUserScreen';

const tabScreen = {
  AutoCheckingScreen: 0,
  TrackingUserScreen: 1,
  CalendarScreem: 2

}

class MainContainerScreen extends Component {
  // will be set as a reference to "beaconsDidRange" event:
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView
          onChangeTab={this.changeTab}
          initialPage={0}
          tabBarBackgroundColor={'white'}
          tabBarPosition={'bottom'}
          tabBarActiveTextColor={'#243b55'}
          tabBarInactiveTextColor={'#243b55'}
          tabBarTextStyle={styles.tabBarTextStyle}
          tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>

          <AutoCheckInScreen tabLabel={'Checkin'} />
          <CalendarContainerScreen tabLabel={'Calendar'} />
          <TrackingUserScreen tabLabel={'Tracking'} />

        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabBarTextStyle: {
    fontSize: 15
  },
  tabBarUnderlineStyle: {
    backgroundColor: '#243b55',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  }
});

export default MainContainerScreen;
