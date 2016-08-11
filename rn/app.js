
'use strict';
import React from 'react';
import {
    AppRegistry,
    Navigator,
    BackAndroid
} from 'react-native';

import Route from './route';

class App extends React.Component {

    constructor (props) {
        super(props);
        this.route = null;
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (route.index === 0) {
                navigator.push(Route[0]);
            } else {
                navigator.pop();
            }
        });
    }

    _renderRoute (route, navigator) {
        return Route.getRoutePage(route, navigator);
    }

    render () {
        return (
            <Navigator
                initialRoute={{
                    id: 'homepage',
                    params: {}
                }}
                // initialRouteStack={Route}
                renderScene={this._renderRoute.bind(this)}
                configureScene={(route, routeStack) =>
                    // Navigator.SceneConfigs.FloatFromBottom
                    Navigator.SceneConfigs.FloatFromRight
                    // Navigator.SceneConfigs.FadeAndroid
                }
            />
        );
    }

}

AppRegistry.registerComponent('Demo', () => App);
