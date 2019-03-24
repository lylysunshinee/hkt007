import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput, Linking } from 'react-native';
import MainHeader from '../container/MainHeader';
import NotificationComponent from '../container/NotificationComponent';
import { Icon, Avatar } from "react-native-elements";
import { API } from '@network';
const BG_CHECK_OUT = require('../../assets/images/bg_out_checkin.png');
const BG_CHECK_IN = require('../../assets/images/checkin_bg.png');
import moment from 'moment';
import { Actions, ActionConst } from 'react-native-router-flux';
import _ from 'lodash';


const leftHeader =
    <TouchableOpacity onPress={() => Actions.drawerOpen()} style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 5, width: 50 }}>
        <Image resizeMode='contain' source={require('../../assets/images/menu.png')} style={{ width: 25 }} />
    </TouchableOpacity>

const centerHeader =
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>


const rightHeader = <NotificationComponent />

class TrackingUserScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dataSearch: ''
        };
    }


    onSeacrch = () => {
        let params = {
            email: this.state.text
        }
        return API.findEmploy(params).then(
            res => {
                if (res.data[0]) {
                    this.setState({ dataSearch: res.data[0] })
                }
            },
            err => {
                console.log('res', res)
            }
        )
    }

    renderSeacrchEmptyView = () => {
        return (
            <View style={{ flex: 1, alignContent: 'center' }} >
                <Image style={{ width: '100%', height: 250 }} source={require('../../assets/images/findEmpty.png')} />
            </View>
        )
    }

    renderSeacrchView = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 5, alignContent: 'center', height: 100, width: '100%', backgroundColor: 'white' }}>
                <TextInput
                    style={{ flex: 1, borderRadius: 5, width: '100%', marginVertical: 10, }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder={'  Vui lòng nhấp email người muốn tìm kiếm'}
                    placeholderTextColor={'#c6c6c6'}

                />
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => this.onSeacrch()}>
                    <Image style={{ width: 24, height: 24, marginRight: 10 }} source={require('../../assets/images/search.png')} />
                </TouchableOpacity>

            </View>
        )
    }

    renderDataSearch = () => {
        let { dataSearch } = this.state;
        let date_time = moment(dataSearch.user.date_created).format("hh:mm:ss")
        return (<View style={{ flex: 1 }}>
            <Image style={{ width: '100%', height: 200 }} source={require('../../assets/images/bg_tracking.png')} ></Image>
            <TouchableOpacity style={{ backgroundColor: 'white', padding: 15, marginBottom: 5, flexDirection: 'row', alignItems: 'center' }} onPress={() => { }} >
                <Image style={{ width: 24, height: 24, marginRight: 10 }} source={require('../../assets/images/pin_grey.png')} />
                <Text style={{ fontSize: 20, lineHeight: 27, fontWeight: 'bold' }}> {dataSearch.position} </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={{ backgroundColor: 'white', padding: 15, marginBottom: 5, flexDirection: 'row', alignItems: 'center' }} onPress={() => { }} >
                <Image style={{ width: 24, height: 24, marginRight: 10 }} source={require('../../assets/images/clock.png')} />
                <Text style={{ fontSize: 20, lineHeight: 27, fontWeight: 'bold' }}> {date_time} </Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={{ backgroundColor: 'white', padding: 15, marginBottom: 5, flexDirection: 'row', alignItems: 'center' }} onPress={() => { Linking.openURL(`tel: ${dataSearch.user.Phone}`) }} >
                <Image style={{ width: 24, height: 24, marginRight: 10 }} source={require('../../assets/images/phone-call.png')} />
                <Text style={{ fontSize: 20, lineHeight: 27, fontWeight: 'bold' }}> {dataSearch.user.Phone} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'white', padding: 15, marginBottom: 5, flexDirection: 'row', alignItems: 'center' }} onPress={() => { }} >
                <Image style={{ width: 24, height: 24, marginRight: 10 }} source={require('../../assets/images/profile.png')} />
                <Text style={{ fontSize: 20, lineHeight: 27, fontWeight: 'bold' }}> {dataSearch.user.email} </Text>
            </TouchableOpacity>
        </View>)
    }

    render() {
        let { dataSearch } = this.state
        return (
            <View style={styles.container}>
                <MainHeader leftHeader={leftHeader} centerHeader={centerHeader} rightHeader={rightHeader} />
                {this.renderSeacrchView()}
                {_.isEmpty(dataSearch) && this.renderSeacrchEmptyView()}
                {!_.isEmpty(dataSearch) && this.renderDataSearch()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f3f4',
    }
});

export default TrackingUserScreen;
