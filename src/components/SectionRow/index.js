import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/styles';
import {FontAwesome} from '@expo/vector-icons';
import themeColors from '../../styles/themes';
import variables from '../../styles/variables';
import fontFamily from '../../styles/fontFamily';

const SectionRow = ({data, showNameOnly}) => {
	const {flex1, pv2, flexRow, ph4, optionAlternateText, optionDisplayName, optionAlternateTextCompact} = styles;
	return (
		<View style={[flex1, pv2, flexRow, {overflow: 'hidden'}]}>
			<FontAwesome size={variables.avatarSizeLarge} name="user-circle" color={themeColors.icon} />
			<View style={ph4}>
				<Text style={[optionDisplayName, showNameOnly ? {fontFamily: fontFamily.RALEWAY_BOLD} : {}]}>{data.name || data.email}</Text>

				{showNameOnly ? (
					<Text>{data.email}</Text>
				) : (
					<Text numberOfLines={1} style={[optionAlternateText, optionAlternateTextCompact]}>
						{data.message}
					</Text>
				)}
			</View>
		</View>
	);
};

export default SectionRow;
