import {Platform} from 'react-native';
let fonts;

if (Platform.OS === 'ios') {
    fonts = {
        NexaBold: "NexaBold",
        AvertaDemo: "AvertaDemo-Regular"

    }
} else {
    fonts = {
        NexaBold: "nexa_bold",
        AvertaDemo: "avertademo_regular"
    }
}

module.exports = fonts