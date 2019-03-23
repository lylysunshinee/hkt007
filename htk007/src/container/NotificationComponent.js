import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
// import { getListNotifications } from '../redux/actions/NotificationActions';

class NotificationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentWillMount() {
        // this.getNotification()
    }

    // getNotification = () => {
    //     var params = {
    //         number: 1,
    //         size: 20
    //     }
    //     return this.props.getNotifications(params);
    // }

    componentWillReceiveProps(props) {
        // if (props.notificationsData.isDone && props.notificationsData.success) {
        //     this.setState({
        //         count: props.notificationsData.data.data.unread
        //     })
        // }
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={() => Actions.notification()} style={{ margin: 5, alignItems: 'center', justifyContent: 'center',marginRight:15 }}>

                <Image resizeMode='contain' source={require('../../assets/images/bell.png')} style={{ width: 30 }} />
                {
                    this.state.count !== 0 &&
                    <View style={{ width: 18, height: 18, backgroundColor: 'red', position: 'absolute', borderRadius: 15, top: 18, right: 3, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', margin: 'auto', fontWeight: 'bold' }}>{this.state.count > 99 ? '99+' : this.state.count}</Text>
                    </View>
                }
            </TouchableOpacity>
        )
    }
}
const mapDispathToProps = {
    // getNotifications: getListNotifications,
};

const mapStateToProps = state => ({
    // notificationsData: state.notificationsReducer.notificaions
});

export default connect(mapStateToProps, mapDispathToProps)(NotificationComponent);