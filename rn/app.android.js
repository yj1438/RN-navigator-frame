
'use strict';
import React from 'react';
import {
    AppRegistry,
    ScrollView,
    StyleSheet,
    Dimensions,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
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

class App extends React.Component {

    constructor (prop) {
        super(prop);
        this.state = {
            Xponit: 0
        }
    }

    _onScroll (evt, _view) {
        console.log(evt._view);
        console.log(evt.nativeEvent);
        const nativeEvent = evt.nativeEvent;
        this.setState({
            Xponit: nativeEvent.contentOffset.x
        });
    }

    _onPress (evt) {
        console.log()
    }

    render () {
        return (
            <View style={styles.wrapper}>
                <View style={{backgroundColor: '#eee'}}><Text>this is a scroll, X: {this.state.Xponit}</Text></View>
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
                        <TouchableOpacity>
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

AppRegistry.registerComponent('Demo', () => App);