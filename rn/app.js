
'use strict';
import React from 'react';
import {
    AppRegistry,
    Navigator,
    BackAndroid
} from 'react-native';

import Homepage from './view/homepage/homepage.jsx';
import Index from './view/index/index.jsx';
import Route from './route';

class App extends React.Component {

    constructor (props) {
        super(props);
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (route.index === 0) {
                navigator.push(Route[0]);
            } else {
                navigator.pop();
            }
        });
    }

    _renderScene (route, navigator) {
        switch (route.id) {
            case 'homepage':
                return <Homepage navigator={navigator}/>;
            case 'index':
                return <Index navigator={navigator} {...route.params}/>;
            default:
                break;
        }
    }

    render () {
        return (
            <Navigator
                initialRoute={{
                    id: 'homepage',
                    index: 1,
                    title: 'homepage'
                }}
                // initialRouteStack={Route}
                renderScene={this._renderScene.bind(this)}
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
