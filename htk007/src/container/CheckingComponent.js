import React, { Component } from 'react';
import { View, TextDevice, DeviceEventEmitter } from 'react-native';
import { API } from '@network';
import Beacons from 'react-native-beacons-manager';

class CheckingComponent extends Component {
    constructor(props) {
        super(props);
        // will be set as a reference to "beaconsDidRange" event:
        beaconsDidRangeEvent = null;
        this.state = {
            // identifier = "REGION1",
            // uuid = '97d36255-97f8-6254-d3fc-c251fee8e83b',
            identifier: props.identifier,
            uuid: props.uuid,
            region: { identifier: props.identifier, uuid: props.uuid }
        };
    }




    componentWillMount() {
        let { identifier, uuid, region } = this.state;
        Beacons
            .startMonitoringForRegion(region)
            .then(() => console.log('Beacons monitoring started succesfully'))
            .catch(error => console.log(`Beacons monitoring not started, error: ${error}`));

        // Range beacons inside the region
        Beacons
            .startRangingBeaconsInRegion(identifier, uuid)
            .then(() => console.log('Beacons ranging started succesfully'))
            .catch(error => console.log(`Beacons ranging not started, error: ${error}`));
    }

    componentDidMount() {
        // Ranging:
        this.beaconsDidRangeEvent = DeviceEventEmitter.addListener(
            'beaconsDidRange',
            (data) => {
                if (__DEV__) {
                    console.log('beaconsDidRange data: ', data);
                }
            }
        );

        // monitoring:
        this.beaconsDidEnterEvent = DeviceEventEmitter.addListener(
            'regionDidEnter',
            ({ identifier, uuid, minor, major }) => {
                if (__DEV__) {
                    console.log('monitoring - regionDidEnter data: ', { identifier, uuid, minor, major });
                }
                this.requestServerLogin(uuid, true)
            }
        );

        this.regionDidExitEvent = DeviceEventEmitter.addListener(
            'regionDidExit',
            ({ identifier, uuid, minor, major }) => {
                if (__DEV__) {
                    console.log('monitoring - regionDidExit data: ', { identifier, uuid, minor, major });
                }
                this.requestServerLogin(uuid, false)
            }
        );
    }

    componentWillUnMount() {
        this.regionDidExitEvent.remove();
        this.beaconsDidRangeEvent.remove();
    }

    requestServerLogin = (uuid, isChecking) => {
        let params = {
            "identity": uuid,
            "distance": 0,
            "status": isChecking ? 1 : 2
        }
        API.checking(params).then(
            res => {
                if (__DEV__) {
                    console.log('checking ->', res)
                }
            },
            err => {
                if (__DEV__) {
                    console.log('checking ->', err)
                }
            }
        )
    }

    render() {
        return (<View />);
    }
}

export default CheckingComponent;
