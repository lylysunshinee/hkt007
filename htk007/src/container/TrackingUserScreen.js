import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class TrackingUserScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> TrackingUserScreen </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    }
});

export default TrackingUserScreen;
