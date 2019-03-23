import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image,Alert } from 'react-native';
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
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignContent: 'center', backgroundColor: '#f0f3f4', }}>
                <TouchableOpacity onPress={() => this.logout()} >
                    <Text> {'Đăng xuất'} </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default NavigationDrawer;
