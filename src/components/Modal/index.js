import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import Modal from 'react-native-modal';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import styles, {getSafeAreaPadding} from '../../styles/styles';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import variables from '../../styles/variables';
import colors from '../../styles/colors';
import {useNavigation} from '@react-navigation/core';

const optionsMenu = [
	{
		title: 'New Chat',
		icon: 'chat',
		screen: 'NewChat',
	},
	{
		title: 'New Group',
		icon: 'account-group',
	},
];

function ModalTester({isModalVisible, onPressOutSide}) {
	const {ph2, ml3, modalMenuItems, createMenuText, baseModalStyle} = styles;
	const navigation = useNavigation();
	const [screen, setScreen] = useState(null);

	return (
		<Modal
			isVisible={isModalVisible}
			backdropOpacity={0.4}
			backdropColor={colors.gray3}
			onBackdropPress={() => onPressOutSide()}
			animationInTiming={200}
			animationOutTiming={600}
			onModalHide={() => navigation.navigate(screen)}
			style={{margin: 0, justifyContent: 'flex-end'}}>
			<SafeAreaInsetsContext.Consumer>
				{(insets) => {
					const {paddingBottom: safeAreaPaddingBottom} = getSafeAreaPadding(insets);

					const baseStyle = {
						paddingBottom: safeAreaPaddingBottom,
						...baseModalStyle,
					};
					return (
						<View style={baseStyle}>
							{optionsMenu.map((menu, index) => (
								<Pressable
									key={index}
									style={({pressed}) => [{backgroundColor: pressed ? colors.gray2 : colors.white}, modalMenuItems]}
									onPress={() => {
										if (menu.screen) {
											onPressOutSide();
											setScreen(menu.screen);
										} else {
											return null;
										}
									}}>
									{({pressed}) => (
										<>
											<MaterialCommunityIcons name={menu.icon} size={variables.iconSizeLarge} style={ph2} color={pressed ? colors.dark : colors.gray3} />
											<Text style={[createMenuText, ml3]}>{menu.title}</Text>
										</>
									)}
								</Pressable>
							))}
						</View>
					);
				}}
			</SafeAreaInsetsContext.Consumer>
		</Modal>
	);
}

export default ModalTester;
