
import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import LoginScreen from '../container/LoginScreen';
import SplachScreen from '../container/SplashScreen';

import MainContainerScreen from '../container/MainContainerScreen';
import CalendarContainerScreen from '../container/CalendarContainerScreen';
import AutoCheckInScreen from '../container/AutoCheckInScreen';
import TrackingUserScreen from '../container/TrackingUserScreen';


const AppRouter = () => <Router>
    <Stack key='root'>
        <Scene key='splash' component={SplachScreen} title='splash' hideNavBar={true} initial />
        <Scene key='login' component={LoginScreen} title='login' hideNavBar={true} />
        <Scene key='main' component={MainContainerScreen} title='main' hideNavBar={true} />
        <Scene key='calendarContainer' component={CalendarContainerScreen} title='calendarContainer' hideNavBar={true} />
        <Scene key='autocheckin' component={AutoCheckInScreen} title='autocheckin' hideNavBar={true} />
        <Scene key='trackingUser' component={TrackingUserScreen} title='trackingUser' hideNavBar={true} />
    </Stack>
</Router>


export default AppRouter