
'use strict';
import React from 'react';
import {
    AppRegistry,
    Navigator,
    BackAndroid,
    Alert,
    Text
} from 'react-native';

import Route from './route';

let NavigatorBarMap = {
    LeftButton(route, navigator, index, navState) {
        return (<Text>Cancel</Text>); 
    },
    RightButton(route, navigator, index, navState) { 
        return (<Text>Done</Text>); 
    },
    Title(route, navigator, index, navState) {
        return (<Text>Awesome Nav Bar</Text>); 
    }
};

class App extends React.Component {

    constructor (props) {
        super(props);
        // this.route = null;
        this.navigator = null;
        //
        BackAndroid.addEventListener('hardwareBackPress', () => {
            // Alert.alert('alert', this.navigator + this.route.id);
            if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
                this.navigator.pop();
                return true;
            }
            BackAndroid.exitApp();
            return false;
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
                    // Navigator.SceneConfigs.FloatFromBottom
                    Navigator.SceneConfigs.FloatFromRight
                    // Navigator.SceneConfigs.FadeAndroid
                }
                navigationBar={
                    // <Navigator.NavigationBar
                    //     routeMapper={NavigatorBarMap}
                    //     style={{height: 80}}
                    // />
                    <Navigator.NavigationBar
                        routeMapper={NavigatorBarMap}
                        style={{backgroundColor: 'gray', flex: 1, height: 20}}
                    />
                }
            />
        );
    }

}

AppRegistry.registerComponent('Demo', () => App);
