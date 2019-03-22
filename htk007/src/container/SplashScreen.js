import React, { Component } from 'react';
import { ImageBackground } from 'react-native';

import { Actions } from 'react-native-router-flux'

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.timeOut = setTimeout(this.changeScreen, 3000)
    }

    changeScreen = () => {
        return Actions.login()
    }

    componentWillUnmount() {
        clearTimeout(this.timeOut)
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
