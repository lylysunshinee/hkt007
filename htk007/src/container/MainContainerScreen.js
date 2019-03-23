import React, { Component } from 'react';
import { View, Text, StyleSheet, DeviceEventEmitter } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import AutoCheckInScreen from '../container/AutoCheckInScreen';
import CalendarContainerScreen from '../container/CalendarContainerScreen';
import TrackingUserScreen from '../container/TrackingUserScreen';
import CheckingComonent from '../container/CheckingComponent'

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
        {/* coconuc */}
        <CheckingComonent identifier={'REGION1'} uuid={'97d36255-97f8-6254-d3fc-c251fee8e83b'} />
        {/* blueberry */}
        <CheckingComonent identifier={'REGION2'} uuid={'84CA4869-3F9A-6517-25EA-B42804DF18FB'} />
        {/* xanh ngoc */}
        <CheckingComonent identifier={'REGION3'} uuid={'BC4DCF53-53DC-2D5F-2F72-0274E20107B8'} />
        <ScrollableTabView
          onChangeTab={this.changeTab}
          initialPage={0}
          tabBarBackgroundColor={'white'}
          tabBarPosition={'bottom'}
          tabBarActiveTextColor={'#DBAC69'}
          tabBarInactiveTextColor={'#DBAC69'}
          tabBarTextStyle={styles.tabBarTextStyle}
          tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>

          <AutoCheckInScreen tabLabel={'Checkin'} />
          <CalendarContainerScreen tabLabel={'calendar'} />
          <TrackingUserScreen tabLabel={'tracking'} />
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
    backgroundColor: '#DBAC69',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  }
});

export default MainContainerScreen;
