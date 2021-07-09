import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import ScreenWrapper from './components/ScreenWrapper';
import styles from './styles/styles';
import {FontAwesome5, FontAwesome} from '@expo/vector-icons';
import themeColors from './styles/themes';
import variables from './styles/variables';
import Fab from './components/Fab';
import MenuModal from './components/Modal';
import SectionRow from './components/SectionRow';
import dummyData from './data';

const Header = () => {
	const {flex1, flexRow, ph5, pv3, justifyContentBetween, alignItemsCenter, alignItemsEnd, h100, headerText} = styles;
	return (
		<View style={[flex1, h100]}>
			<View style={[flexRow, ph5, pv3, justifyContentBetween, alignItemsCenter]}>
				<Text numberOfLines={1} style={[headerText]}>
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

			<FlatList contentContainerStyle={ph5} data={dummyData} keyExtractor={(item) => item.id} renderItem={({item}) => <SectionRow data={item} />} />
		</View>
	);
};

const ChitChatApp = ({navigation}) => {
	const {flex1, appContent} = styles;

	const [isMenuVisible, setIsMenuVisible] = useState(false);

	const toggleMenu = () => {
		setIsMenuVisible(!isMenuVisible);
	};

	return (
		<ScreenWrapper style={[appContent, flex1]}>
			<Header />
			<Fab onPress={toggleMenu} />
			<MenuModal isModalVisible={isMenuVisible} onPressOutSide={toggleMenu} />
		</ScreenWrapper>
	);
};

export default ChitChatApp;
