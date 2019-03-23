import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import MainHeader from '../container/MainHeader';
import NotificationComponent from '../container/NotificationComponent';
import { Icon, Avatar } from "react-native-elements";

const BG_CHECK_OUT = require('../../assets/images/bg_out_checkin.png');
const BG_CHECK_IN = require('../../assets/images/checkin_bg.png')


const leftHeader =
    <TouchableOpacity onPress={() => Actions.drawerOpen()} style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 5, width: 50 }}>
        <Image resizeMode='contain' source={require('../../assets/images/menu.png')} style={{ width: 25 }} />
    </TouchableOpacity>

const centerHeader =
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text style={[AppStyles.boldText, { color: '#FFFFFF', fontSize: 19, textAlign: 'center', }]}> TOPICA NATIVE </Text> */}
    </View>


const rightHeader = <NotificationComponent />

class AutoCheckInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheckedIn: true
        };
    }

    renderOutMainConnent = () => {
        return (
            <View style={{ width: '100%', height: 100, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Image style={{ width: 24, height: 24 }} source={require('../../assets/images/pin_red.png')} />
                <Text style={{ color: 'red', fontSize: 14 }}>{'Bạn đang ở ngoài khu vực làm việc'}</Text>
            </View>
        )
    }

    renderInMainConnent = () => {
        return (
            <View style={{ width: '100%', height: 150, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Image style={{ width: 14, height: 14, marginRight: 10 }} source={require('../../assets/images/pin_green.png')} />
                    <Text style={{ color: '#009e15', fontSize: 14 }}>{'Bạn đang ở trong khu vực làm việc'}</Text>
                </View>
                <Text style={{ color: '#009e15', fontSize: 14 }}>{'Thời gian ghi nhận lúc'}</Text>
                <Text style={{ fontSize: 48, color: '#243b55' }}>{'08:30:25'}</Text>
            </View>
        )
    }

    render() {
        let { isCheckedIn } = this.state;
        return (
            <ImageBackground source={isCheckedIn ? BG_CHECK_IN : BG_CHECK_OUT} style={styles.container}>
                <MainHeader leftHeader={leftHeader} centerHeader={centerHeader} rightHeader={rightHeader} />
                {isCheckedIn && this.renderInMainConnent()}
                {!isCheckedIn && this.renderOutMainConnent()}
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});

export default AutoCheckInScreen;
