import React from 'react';
import {Text, View, Pressable} from 'react-native';
import Modal from 'react-native-modal';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import styles, {getSafeAreaPadding} from '../../styles/styles';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import variables from '../../styles/variables';
import colors from '../../styles/colors';

const optionsMenu = [
	{
		title: 'New Chat',
		icon: 'chat',
	},
	{
		title: 'New Group',
		icon: 'account-group',
	},
];

function ModalTester({isModalVisible, onPressOutSide}) {
	const {ph2, ml3, modalMenuItems, createMenuText, baseModalStyle} = styles;
	return (
		<Modal
			isVisible={isModalVisible}
			backdropOpacity={0.4}
			backdropColor="#C6C9CA"
			onBackdropPress={() => onPressOutSide()}
			animationInTiming={200}
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
								<Pressable key={index} style={({pressed}) => [{backgroundColor: pressed ? colors.gray2 : colors.white}, modalMenuItems]}>
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
