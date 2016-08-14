
'use strict';
import React from 'react';
import {
    AppRegistry,
    Navigator,
    BackAndroid,
    Alert,
    Text,
    Dimensions
} from 'react-native';

import Route from './base/route';
import NavigationBarMap from './base/navigationBar';
import goBack from './common/goBack';
import SceneConfigs from './common/sceneConfigs';

class App extends React.Component {

    constructor (props) {
        super(props);
        // this.route = null;
        this.navigator = null;
        //
        BackAndroid.addEventListener('hardwareBackPress', () => {
            return goBack(this.navigator);
        });
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    }

    _renderRoute (route, navigator) {
        // this.route = route;
        this.navigator = navigator;
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
                    SceneConfigs.PushFromRight
                    // Navigator.SceneConfigs.PushFromRight
                }
                sceneStyle={{flex: 1, top: 40}}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={NavigationBarMap}
                        style={{backgroundColor: 'gray', marginTop: 0, height: 40, top: 0}}
                    />
                }
            />
        );
    }

}

AppRegistry.registerComponent('Demo', () => App);
