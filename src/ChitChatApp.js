import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import ScreenWrapper from './components/ScreenWrapper';
import styles from './styles/styles';
import {FontAwesome5, FontAwesome} from '@expo/vector-icons';
import themeColors from './styles/themes';
import variables from './styles/variables';
import Fab from './components/Fab';

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		name: 'James Dawson',
		message: 'This is a test message from test 1',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		email: 'graidmeasure@gmail.com',
		message: 'This is a test message from test 2 a long message for syre',
	},
];

const SectionRow = ({data}) => {
	const {flex1, pv2, flexRow, ph4, optionAlternateText, optionDisplayName, optionAlternateTextCompact} = styles;
	return (
		<View style={[flex1, pv2, flexRow, {overflow: 'hidden'}]}>
			<FontAwesome size={variables.avatarSizeLarge} name="user-circle" color={themeColors.icon} />
			<View style={ph4}>
				<Text style={optionDisplayName}>{data.name || data.email}</Text>
				<Text numberOfLines={1} style={[optionAlternateText, optionAlternateTextCompact]}>
					{data.message}
				</Text>
			</View>
		</View>
	);
};

const Header = () => {
	const {flex1, flexRow, ph5, pv3, justifyContentBetween, alignItemsCenter, alignItemsEnd, h100, headerText} = styles;
	return (
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

			<FlatList contentContainerStyle={ph5} data={DATA} keyExtractor={(item) => item.id} renderItem={({item}) => <SectionRow data={item} />} />
		</View>
	);
};

const ChitChatApp = () => {
	const {flex1, appContent} = styles;

	return (
		<ScreenWrapper style={[appContent, flex1]}>
			<Header />
			<Fab />
		</ScreenWrapper>
	);
};

export default ChitChatApp;
