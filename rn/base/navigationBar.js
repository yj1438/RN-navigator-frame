'use strict';
import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    BackAndroid,
    Alert
} from 'react-native';

// 返回操作，用于导航栏的返回
import goBack from '../common/goBack';

// navigationBar 的固定left\title\right 布局好诡异，只能用算的了，flex 各种问题
const screenWidth = Dimensions.get('window').width,
    btnWidth = 68;

const styles = StyleSheet.create({
    btn: {
        height: 30,
        // borderWidth: 1,
        top: 0,
        marginVertical: 5
        
    },
    title: {
        flex: 1,
        width: screenWidth - 4 * 2 - btnWidth * 2,
        // borderWidth: 1,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 16
    },
    fix: {
        marginTop: 17
    },
    btnText: {
        fontSize: 16,
        marginTop: 3
    }
});

const NavigationBar = {

    Title(route, navigator, index, navState) {
        return (
            <View style={[styles.title, styles.fix]}>
                <Text style={styles.text}>{route.id} + {index}</Text>
            </View>
        ); 
    },
    LeftButton(route, navigator, index, navState) {
        return (
            <TouchableOpacity style={[styles.btn]} onPress={() => {
                goBack(navigator);
            }}>
                <Text style={[styles.btnText, {textAlign: 'left'}]}>Back</Text>
            </TouchableOpacity>
        ); 
    },
    RightButton(route, navigator, index, navState) { 
        return (
            <TouchableOpacity style={[styles.btn]} onPress={() => {
                Alert.alert('options', 'this is some operation.');
            }}>
                <Text style={[styles.btnText, {textAlign: 'right'}]}>选项</Text>
            </TouchableOpacity>
        ); 
    }
}

export default NavigationBar;