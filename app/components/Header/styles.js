import { StyleSheet, Dimensions } from 'react-native';

import fonts from 'resources/fonts';
import colors from 'resources/colors';

var screenWidth = Dimensions
    .get('window')
    .width;
var itemsPerRow = 2
var margin = 10
var itemWidth = Math.floor((screenWidth - (4 * margin)) / itemsPerRow)

const styles = StyleSheet.create({
    topBar: {
        //position: 'absolute',
        //justifyContent: 'center',
        alignItems: 'center',
        //right: 0,
        //left: 0,
        flexDirection:'row',
        height: 56,

    },
    title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    topBarContainer: {
      backgroundColor: colors.headerColor,
      zIndex: 99998,
    },
    statusBar:{
        height:20,
    },
    titleArea:{
        flex:1,
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftIcon:{
        paddingHorizontal:15,
        height: 56,
        justifyContent: 'center'
    }
});

module.exports = styles;
