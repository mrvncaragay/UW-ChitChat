import React from 'react';
import {View} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import styles, {getSafeAreaPadding} from '../styles/styles';

const ScreenWrapper = ({children, style}) => {
	return (
		<SafeAreaInsetsContext.Consumer>
			{(insets) => {
				const {paddingTop} = getSafeAreaPadding(insets);
				const paddingStyle = {paddingTop};

				return <View style={[...style, styles.flex1, paddingStyle]}>{children}</View>;
			}}
		</SafeAreaInsetsContext.Consumer>
	);
};

export default ScreenWrapper;
