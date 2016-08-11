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

import List from './list';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'red'
    },
    scroll: {
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
                {
                    ['1','2','3'].map((value, index) => {
                        return (
                            <List key={value} cont={value} navigator={this.props.navigator}/>
                        );
                    })
                }
                </ScrollView>
            </View>
        );
    }
}

Homepage.propTypes = {

};

export default Homepage;