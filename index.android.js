/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';

class RnProject extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to React Native!
					This is a Demo for android!
					haha
				</Text>
				<Text>
					Haha, let'us happy!!!
				</Text>
				<Text style={styles.instructions}>
					To get started, edit index.android.js
				</Text>
				<Text style={styles.instructions}>
					Shake or press menu button for dev menu
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

AppRegistry.registerComponent('RnProject', () => RnProject);
