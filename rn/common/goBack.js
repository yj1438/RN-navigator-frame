'use strict';

import {
    BackAndroid
} from 'react-native';


/**
 * 返回操作
 * @export
 * @param {any} navigator
 * @returns
 */
export default function (navigator) {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
    }
    BackAndroid.exitApp();
    return false;
}