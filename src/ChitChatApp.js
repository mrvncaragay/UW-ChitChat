import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ScreenWrapper from './components/ScreenWrapper';
import styles from './styles/styles';
import {FontAwesome5, FontAwesome} from '@expo/vector-icons';
import themeColors from './styles/themes';
import variables from './styles/variables';
import Fab from './components/Fab';

const ChitChatApp = () => {
	const {flex1, flexRow, ph5, pv3, justifyContentBetween, alignItemsCenter, alignItemsEnd, h100, headerText} = styles;

	return (
		<ScreenWrapper style={[styles.appContent, styles.flex1]}>
			<View style={[flex1, h100]}>
				<View style={[flexRow, ph5, pv3, justifyContentBetween, alignItemsCenter]}>
					<Text numberOfLines={2} style={[headerText]}>
						Chats
					</Text>

					<TouchableOpacity accessibilityLabel="Search" accessibilityRole="button" style={[ph5]}>
						<FontAwesome5 size={variables.iconSizeNormal} name="search" color={themeColors.icon} />
					</TouchableOpacity>

					<View style={[flex1]}>
						<TouchableOpacity accessibilityLabel="Search" accessibilityRole="button" style={[alignItemsEnd]}>
							<FontAwesome size={variables.avatarSizeNormal} name="user-circle" color={themeColors.icon} />
						</TouchableOpacity>
					</View>
				</View>

				<Fab />
			</View>
		</ScreenWrapper>
	);
};

export default ChitChatApp;
