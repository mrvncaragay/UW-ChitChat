import React from 'react';
import {Text} from 'react-native';
import ScreenWrapper from './components/ScreenWrapper';
import styles from './styles/styles';

const ChitChatApp = () => (
	<ScreenWrapper style={[styles.appContent, styles.flex1]}>
		<Text>Open up App.js to start working on your app!</Text>
	</ScreenWrapper>
);

export default ChitChatApp;
