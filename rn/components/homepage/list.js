'use strict';
import React, {Component, PropTypes} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#eee',
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width
    }
});

class List extends Component {

    constructor (props) {
        super(props);
    }

    _gotoIndex () {
        this.props.navigator.push({
            id: 'list',
            params: {desc: 'this is indexpage from ' + this.props.num + '!'}
        });
    }

    render() {
        return (
            <View style={styles.page}>
                <TouchableOpacity onPress={this._gotoIndex.bind(this)}>
                    <Text>
                        This is page : {this.props.num}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

List.propTypes = {
    num: PropTypes.string.isRequired
}

export default List;