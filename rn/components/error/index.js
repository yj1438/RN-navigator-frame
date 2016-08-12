'use strict';
import React, {Component, PropTypes} from 'react';
import {
    View,
    Text
} from 'react-native';

class Error extends Component {
    constructor(props) {
        super(props);
    }

    // componentWillMount() {

    // }

    // componentDidMount() {

    // }

    // componentWillReceiveProps(nextProps) {

    // }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // componentWillUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    // componentWillUnmount() {

    // }

    render() {
        return (
            <View>
                <Text>{this.props.message}</Text>
            </View>
        );
    }
}

Error.propTypes = {
    message: PropTypes.string.isRequired
};

export default Error;