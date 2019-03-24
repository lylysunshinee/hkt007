import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import LinearGradient from "react-native-linear-gradient";
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';



class CalendarContainerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onClickLogin = () => {

    }


    renderJobs = (data) => {
        return (

            <LinearGradient
                style={styles.loginbutton}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['#2193b0', "#6dd5ed"]}
            >
                <TouchableOpacity onPress={() => this.onClickLogin()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 19 }} >{data}</Text>
                </TouchableOpacity>
            </LinearGradient>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Calendar
                    style={[styles.calendar, { height: 300, width: '100%' }]}
                    dayComponent={({ date, state }) => {
                        return (<View style={{ flex: 1 }}><Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black' }}>{date.day}</Text></View>);
                    }}
                />

                {this.renderJobs('Hứa thưởng 500k cho LinhTT17 ')}
                {this.renderJobs('Họp phòng TOX')}
                {this.renderJobs('Thưởng ThuỷVV đi cưới')}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f3f4',
        alignItems: 'center'
    },
    loginbutton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 80,
        marginTop: 10,
        borderRadius: 15
    }

});

export default CalendarContainerScreen;
