import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import {getSafeAreaPadding} from '../../styles/styles';

function ModalTester({isModalVisible}) {
	return (
		<Modal isVisible={isModalVisible} backdropOpacity={0.4} backdropColor="#C6C9CA" style={{margin: 0, justifyContent: 'flex-end'}}>
			<SafeAreaInsetsContext.Consumer>
				{(insets) => {
					const {paddingBottom: safeAreaPaddingBottom} = getSafeAreaPadding(insets);

					return (
						<View
							style={{
								margin: 0,
								paddingTop: 12,
								paddingBottom: safeAreaPaddingBottom,
								overflow: 'hidden',
								backgroundColor: '#fff',
								width: '100%',
								borderTopLeftRadius: 20,
								borderTopRightRadius: 20,
								borderWidth: 1,
								borderColor: 'red',
							}}>
							<View>
								<View>
									<Text>New Chat</Text>
								</View>
								<View>
									<Text>New Chat</Text>
								</View>
							</View>
						</View>
					);
				}}
			</SafeAreaInsetsContext.Consumer>
		</Modal>
	);
}

export default ModalTester;
