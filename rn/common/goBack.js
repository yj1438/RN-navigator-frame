'use strict';

import {
    BackAndroid
} from 'react-native';

export default function (navigator) {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
    }
    BackAndroid.exitApp();
    return false;
}