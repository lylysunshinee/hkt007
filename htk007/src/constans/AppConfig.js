import { Platform } from 'react-native';

export default {
    // App Details
    appName: 'Hogwarts Map',

    // Build Configuration - eg. Debug or Release?
    DEV: __DEV__,

    // platform type: 1: IOS 2: Android
    platformType: Platform.OS === 'ios' ? 1 : 2,

    // from now on native mobile vip v1 will be rewritten using React Native
    platformVersion: '1.0',

    // URLs
    API_BASE_URL: 'http://192.168.137.1:8082/api'

}
