
'use strict';
import React from 'react';
import {
    AppRegistry,
    ScrollView,
    StyleSheet,
    Dimensions,
    Text,
    TouchableOpacity,
    Navigator,
    View,
    Image
} from 'react-native';

import Homepage from './view/homepage';
import Route from './route';

class App extends React.Component {

    constructor (prop) {
        super(prop);
        this.state = {
            Xponit: 0
        }
    }
    
    _renderScene (route, navigator) {
        console.log(route);
        return (
            <Homepage title={route.title} route={route} navigator={navigator}/>
        );
    }

    render () {
        return (
            <Navigator
                initialRoute={Route[0]}
                initialRouteStack={Route}
                renderScene={(route, navigator) => <Homepage route={route} navigator={navigator}/>}
            />
        );
    }

}

AppRegistry.registerComponent('Demo', () => App);
