import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';



class CalendarContainerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Calendar
                    style={[styles.calendar, { height: 300 }]}
                    dayComponent={({ date, state }) => {
                        return (<View style={{ flex: 1 }}><Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black' }}>{date.day}</Text></View>);
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'violet',
    }
});

export default CalendarContainerScreen;
