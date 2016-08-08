'use strict';

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'red'
    },
    scroll: {
    },
    page: {
        backgroundColor: '#eee',
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width
    }
});


class Homepage extends React.Component {

    constructor (props) {
        super(props);
    }

    _onScroll (evt, _view) {
        const nativeEvent = evt.nativeEvent;
        this.setState({
            Xponit: nativeEvent.contentOffset.x
        });
    }

    _onPress (evt) {
        console.log(evt)
    }


    render () {
        return (
            <View style={styles.wrapper}>
                <Text>Hello {this.props.route.title}!</Text>
                <ScrollView 
                    horizontal={true}
                    onScroll={this._onScroll.bind(this)}
                    scrollEventThrottle={1000}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scroll}
                >
                    <View style={[styles.page, {backgroundColor: '#aee'}]}>
                        <TouchableOpacity>
                            <Text>
                                page1 haha
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.page, {backgroundColor: '#eae'}]}>
                        <TouchableOpacity>
                            <Text>
                            page2
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.page, {backgroundColor: '#eea'}]}>
                        <TouchableOpacity onPress={this._onPress.bind(this)}>
                            <Text>
                                page3
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }

}

export default Homepage;