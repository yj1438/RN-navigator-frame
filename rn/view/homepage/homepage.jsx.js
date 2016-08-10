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
    },
    button: {
        height: 20,
        backgroundColor: 'red'
    }
});


class Homepage extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {
            Xponit: 0
        }
    }

    _onScroll (evt, _view) {
        const nativeEvent = evt.nativeEvent;
        this.setState({
            Xponit: nativeEvent.contentOffset.x
        });
    }

    _onPress (evt) {
        this.props.navigator.push({
            id: 'index',
            index: 1,
            title: 'index',
            params: {desc: 'this is indexpage from Homepage!'}
        });
    }


    render () {
        return (
            <View style={styles.wrapper}>
                <Text>Hello! {this.state.Xponit}</Text>
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
                        <TouchableOpacity onPress={this._onPress.bind(this)} style={styles.button}>
                            <Text style={{borderWidth: 1, padding: 10, margin: 10, height: 30}}>
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