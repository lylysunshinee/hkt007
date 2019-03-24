import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { AccessTokenManager } from '@data';
import { Actions } from 'react-native-router-flux';
class NavigationDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    clearToken = () => {
        AccessTokenManager.clear()
        Actions.replace('login');
    }

    logout = () => {
        return Alert.alert('Thông báo', 'Bạn chắc chắc chắn muốn thoát khỏi hệ thống', [
            { text: 'Đồng ý', onPress: () => this.clearToken() },
            { text: 'Không', onPress: () => { } },
        ])

    }

    render() {
        return (
            <View style={{ width: '100%', height: '100%', alignContent: 'center', backgroundColor: '#f0f3f4', }}>

                <TouchableOpacity style={{ backgroundColor: 'white', padding: 15, marginBottom: 5, flexDirection: 'row', alignItems: 'center' }} onPress={() => Actions.drawerClose()} >
                    <Image style={{ width: 24, height: 24, marginRight: 10 }} source={require('../../assets/images/left-arrow.png')} />
                    <Text style={{ fontSize: 20, lineHeight: 27, fontWeight: 'bold' }}> {'Tuỳ chọn'} </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: 'white', padding: 15, marginBottom: 2, flexDirection: 'row', alignItems: 'center' }} onPress={() => {}} >
                    <Image style={{ width: 24, height: 24, marginRight: 10 }} source={require('../../assets/images/profile.png')} />
                    <Text style={{ fontSize: 20, lineHeight: 27, fontWeight: 'bold' }}> {'Thông tin cá nhân'} </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: 'white', padding: 15, marginBottom: 2, flexDirection: 'row', alignItems: 'center' }} onPress={() => {}} >
                    <Image style={{ width: 24, height: 24, marginRight: 10 }} source={require('../../assets/images/clock.png')} />
                    <Text style={{ fontSize: 20, lineHeight: 27, fontWeight: 'bold' }}> {'Lịch sử check in'} </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: 'white', padding: 15, marginBottom: 2, flexDirection: 'row', alignItems: 'center' }} onPress={() => {}} >
                    <Image style={{ width: 24, height: 24, marginRight: 10 }} source={require('../../assets/images/settings.png')} />
                    <Text style={{ fontSize: 20, lineHeight: 27, fontWeight: 'bold' }}> {'Cài đặt'} </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: 'white', padding: 15, marginBottom: 2, flexDirection: 'row', alignItems: 'center' }} onPress={() => this.logout()} >
                    <Image style={{ width: 24, height: 24, marginRight: 10 }} source={require('../../assets/images/logout.png')} />
                    <Text style={{ fontSize: 20, lineHeight: 27, fontWeight: 'bold' }}> {'Đăng xuất'} </Text>
                </TouchableOpacity>

            </View>
        );
    }
}


export default NavigationDrawer;
