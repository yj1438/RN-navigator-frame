'use strict';

import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    InteractionManager
} from 'react-native';

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

    _onPress (evt) {
        this.props.navigator.pop();
    }
 
    render () {
        return (
            !this.state.initAnimateing ? 
            (<View>
                <Text>this is page index</Text>
                <Text>{this.props.desc}</Text>
                <TouchableOpacity onPress={this._onPress.bind(this)}>
                    <Text>click this to homepage</Text>
                </TouchableOpacity>
            </View>)
            :
            null
        );
    }
}

export default Index;