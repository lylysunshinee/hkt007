import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { AccessTokenManager } from '@data';


class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    async componentWillMount() {
        AccessTokenManager.initialize().then(
            res => {
                if (AccessTokenManager.getAccessToken()) {
                    Actions.login()
                } else {
                    setTimeout(() => {
                        Actions.main({ type: ActionConst.RESET })
                    }, 1000);
                }
            },
            err => {
                setTimeout(() => {
                    Actions.selectProductPortal({ type: ActionConst.RESET })
                }, 1000);
            }
        )
    }
    render() {
        return (
            <ImageBackground source={require("../../assets/images/splash.png")}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            </ImageBackground>
        );
    }
}

export default SplashScreen;
