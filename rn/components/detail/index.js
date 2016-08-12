'use strict';
import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

class Detail extends Component {
    constructor(props) {
        super(props);

    }

    _gotoPage() {
        this.props.navigator.push({
            id: 'nopage',
            params: {}
        });
    }

    render() {
        return (
            <View>
                <Text>this is detail page.</Text>
                <Text>
                    {new Date(this.props.ts).toLocaleDateString()}
                </Text>
                <TouchableOpacity onPress={this._gotoPage.bind(this)}>
                    <Text>
                        click this to a unretched page!
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Detail.propTypes = {
    ts: PropTypes.number.isRequired
};

export default Detail;