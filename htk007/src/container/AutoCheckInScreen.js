import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AutoCheckInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> AutoCheckInScreen </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    }
});

export default AutoCheckInScreen;
