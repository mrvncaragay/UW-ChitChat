import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ScreenWrapper from './components/ScreenWrapper';
import styles from './styles/styles';

const ChitChatApp = () => {
	const {flex1, flexRow, ph5, pv3, justifyContentBetween, alignItemsCenter, h100, headerText} = styles;

	return (
		<ScreenWrapper style={[styles.appContent, styles.flex1]}>
			<View style={[flex1, h100]}>
				<View style={[flexRow, ph5, pv3, justifyContentBetween, alignItemsCenter]}>
					<Text numberOfLines={2} style={[headerText]}>
						Chats
					</Text>
				</View>
			</View>
		</ScreenWrapper>
	);
};

export default ChitChatApp;
