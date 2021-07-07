import React from 'react';
import {Pressable} from 'react-native';
import themeColors from '../../styles/themes';
import variables from '../../styles/variables';
import styles from '../../styles/styles';
import {AntDesign} from '@expo/vector-icons';

const Fab = ({onPress}) => {
	return (
		<Pressable onPress={() => onPress()} accessibilityLabel="FabNewChat" accessibilityRole="button" style={[styles.floatingActionButton]}>
			<AntDesign name="pluscircle" size={variables.fabSizeLarge} color={themeColors.main} />
		</Pressable>
	);
};

export default Fab;
