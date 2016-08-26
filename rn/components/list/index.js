'use strict';

import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    InteractionManager
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

class Index extends React.Component {

    constructor (props, context) {
        super(props, context);
    }
    
    componentWillMount() {
        this.state = {
            initAnimateing: true
        }
        InteractionManager.runAfterInteractions(() => {
            this.setState({initAnimateing: false});
        });
    }

    _gotoDetail (evt) {
        this.props.navigator.push({
            id: 'detail',
            params: {
                ts: new Date().getTime()
            }
        });
    }

    _goBack (evt) {
        this.props.navigator.pop();
    }
 
    render () {
        let i = 0,
            tabsList = [];

        while (i < 15) {
            const _key = i + '';
            tabsList.push(
                <View key={_key} tabLabel={"page" + _key}>
                    <Text>this is page index</Text>
                    <Text>{this.props.desc}</Text>
                    <TouchableOpacity onPress={this._gotoDetail.bind(this)}>
                        <Text>click this to detail page</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._goBack.bind(this)}>
                        <Text>click this to homepage</Text>
                    </TouchableOpacity>
                </View>
            );
            i++;
        }

        return (
            !this.state.initAnimateing ? 
            (<ScrollableTabView
                renderTabBar={() => <ScrollableTabBar />}
            >
                {tabsList}
            </ScrollableTabView>)
            :
            null
        );
    }
}

export default Index;