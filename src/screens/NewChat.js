import React from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import styles from '../styles/styles';
import ScreenWrapper from '../components/ScreenWrapper';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import variables from '../styles/variables';
import themeColors from '../styles/themes';
import {useNavigation} from '@react-navigation/native';
import SectionRow from '../components/SectionRow';
import dummyData from '../data';
import fontFamily from '../styles/fontFamily';

const NewChat = () => {
	const navigation = useNavigation();
	const {flex1, textInput, mv5, mv4, flexRow, ph5, alignItemsCenter, justifyContentBetween, pv3, appContent, headerText} = styles;
	return (
		<ScreenWrapper style={[appContent, flex1]}>
			<View style={[pv3, ph5, flexRow, alignItemsCenter, justifyContentBetween]}>
				<Text style={[headerText]}>New Chat</Text>
				<TouchableOpacity accessibilityLabel="Search" accessibilityRole="button" onPress={() => navigation.pop()}>
					<MaterialCommunityIcons name="close" size={variables.iconSizeLarge} color={themeColors.icon} />
				</TouchableOpacity>
			</View>
			{/* Text Input */}
			<View style={[ph5, pv3]}>
				<TextInput style={textInput} placeholder="Name or email" />
			</View>

			{/* Recents */}
			<View style={[mv5, ph5]}>
				<Text style={{fontFamily: fontFamily.RALEWAY_BOLD}}>RECENTS</Text>
				<FlatList
					contentContainerStyle={[mv4]}
					data={dummyData}
					keyExtractor={(item) => item.id}
					renderItem={({item}) => <SectionRow showNameOnly data={item} />}
				/>
			</View>
		</ScreenWrapper>
	);
};

export default NewChat;
