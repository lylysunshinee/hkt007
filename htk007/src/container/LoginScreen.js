import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import LinearGradient from "react-native-linear-gradient";
import _ from 'lodash';
import { API } from '@network';
import { loginAction } from "@redux";
// import firebase from 'firebase';
import { connect } from "react-redux";
import { AccessTokenManager } from '@data';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
GoogleSignin.configure();

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'dongnh@topica.edu.vn',
            password: 'topica123',
            checked: false,
            userInfo: {}
        };
    }

    onClickLogin = () => {
        let params = {
            email: this.state.username,
            password: this.state.password
        }
        return API.login(params).then(
            res => {
                console.log('login succress', res)
                if (res.data.token) {
                    AccessTokenManager.saveAccessToken(res.data.token)
                    Actions.main()
                }
            },
            err => {
                console.log('login fail', err)
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

    // Somewhere in your code
    _signIn = async () => {
        try {
            let params = {}
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('userInfo', userInfo)
            this.setState({ userInfo }, () => {
                params.token_google = userInfo.accessToken
                this.props.login(params)
            });

        } catch (error) {
            console.log('error', error)
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow

            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    renderMainContent = () => {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <Image source={require('../../assets/images/logo.png')} style={{ marginVertical: 15 }} />
                <TextInput
                    style={{ height: 40, borderRadius: 5, width: '100%', marginVertical: 15, backgroundColor: 'white', }}
                    onChangeText={(text) => this.setState({ username: text })}
                    value={this.state.username}
                    placeholder={'  Tên đăng nhập'}
                    placeholderTextColor={'#c6c6c6'}

                />

                <TextInput
                    style={{ height: 40, borderRadius: 5, width: '100%', backgroundColor: 'white', }}
                    onChangeText={(text) => this.setState({ password: text })}
                    value={this.state.password}
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
                <TouchableOpacity onPress={() => { this._signIn() }} style={[styles.loginbutton, { flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }]} >
                    <Image source={require('../../assets/images/google_icon.png')} style={{ width: 25, height: 25, marginRight: 10 }}  ></Image>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#383838' }}> {'Đăng nhập với Google'}</Text>
                </TouchableOpacity>
                {/* <GoogleSigninButton
                    style={{width: '100%',height:55,borderRadius:5}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn}
                    disabled={false} /> */}

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
const mapStateToProps = state => ({
    loginData: state.loginReducer.login
});

const mapDispatchToProps = {
    login: loginAction
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);

