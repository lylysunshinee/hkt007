import React, { Component } from 'react';
import LinearGradient from "react-native-linear-gradient";
import { View } from 'react-native';

class MainHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={["white", "white"]}>
                <View style={{ flexDirection: 'row', width: '100%', height: 75,alignItems:'center' }} >
                    <View style={{ width: '15%' }}>{this.props.leftHeader ? this.props.leftHeader : null}</View>
                    <View style={{ width: '70%', }} >{this.props.centerHeader ? this.props.centerHeader : ''}</View>
                    <View style={{ width: '15%', }}>{this.props.rightHeader ? this.props.rightHeader : null}</View>
                </View>
            </LinearGradient>

        )
    }
}

export default MainHeader