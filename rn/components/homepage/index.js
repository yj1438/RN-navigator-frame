'use strict';

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import List from './list';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    scroll: {

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
                            <List key={value} num={value} navigator={this.props.navigator}/>
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