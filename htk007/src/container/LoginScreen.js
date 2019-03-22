import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import LinearGradient from "react-native-linear-gradient";
import _ from 'lodash';
import { API } from '@network';


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            checked: false,
        };
    }

    onClickLogin = () => {
        Actions.main()
    }

    loginGoole = () => {
        return API.xample().then(
            res => {
                console.log('res -->',res)
            },
            err => {
                console.log('err -->',err)
            }
        )
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/images/bg_login.png')} style={styles.container}>
                {this.renderMainContent()}
            </ImageBackground>
        );
    }

    renderMainContent = () => {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <Image source={require('../../assets/images/logo.png')} style={{ marginVertical: 15 }} />
                <TextInput
                    style={{ height: 40, borderRadius: 5, width: '100%', marginVertical: 15, backgroundColor: 'white', }}
                    onChangeText={(text) => this.setState({ userame: text })}
                    value={this.state.text}
                    placeholder={'  Tên đăng nhập'}
                    placeholderTextColor={'#c6c6c6'}

                />

                <TextInput
                    style={{ height: 40, borderRadius: 5, width: '100%', backgroundColor: 'white', }}
                    onChangeText={(text) => this.setState({ password: text })}
                    value={this.state.text}
                    placeholder={'  Mật khẩu'}
                    placeholderTextColor={'#c6c6c6'}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', }}>
                    <CheckBox
                        textStyle={{ fontSize: 16, color: '#707070' }}
                        title='Nhớ mật khẩu'
                        checked={this.state.checked}
                        containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    />

                    <Text style={{ fontSize: 16, color: '#707070', }}>{'Quên mật khẩu?'}</Text>
                </View>

                <LinearGradient
                    style={styles.loginbutton}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['#b92b27', "#1565C0"]}
                >
                    <TouchableOpacity onPress={() => this.onClickLogin()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 19 }} >{'ĐĂNG NHẬP'}</Text>
                    </TouchableOpacity>
                </LinearGradient>


                <View style={[styles.loginbutton, { backgroundColor: 'transparent' }]}>
                    <Text style={{ fontSize: 16, color: '#707070' }}>{'Hoặc'} </Text>
                </View>
                <TouchableOpacity onPress={() => { this.loginGoole() }} style={[styles.loginbutton, { flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }]} >
                    <Image source={require('../../assets/images/google_icon.png')} style={{ width: 25, height: 25, marginRight: 10 }}  ></Image>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#383838' }}> {'Đăng nhập với Google'}</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    loginbutton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        marginTop: 10,
        borderRadius: 5
    }
});

export default LoginScreen;
