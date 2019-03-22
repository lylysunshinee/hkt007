import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

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

    render() {
        return (
            <ImageBackground source={require('../../assets/images/backgroundlogin.png')} style={styles.container}>
                {this.renderMainContent()}
            </ImageBackground>
        );
    }

    renderMainContent = () => {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <Text style={{ marginVertical: 15, fontSize: 24, color: 'white', fontWeight: 'bold' }}>{'Đăng nhập'} </Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '100%', marginVertical: 15 }}
                    onChangeText={(text) => this.setState({ userame: text })}
                    value={this.state.text}
                />

                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '100%', }}
                    onChangeText={(text) => this.setState({ password: text })}
                    value={this.state.text}
                />

                <CheckBox
                    title='Ghi nhớ mật khẩu'
                    checked={this.state.checked}
                />

                <TouchableOpacity onPress={() => this.onClickLogin()} style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: 50 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }} >{'ĐĂNG NHẬP'}</Text>
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
        paddingHorizontal: 15,
    }
});

export default LoginScreen;
