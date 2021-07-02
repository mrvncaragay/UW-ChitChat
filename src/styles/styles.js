import variables from './variables';
import flex from './flex';
import spacing from './spacing';
import sizing from './sizing';
import fontFamily from './fontFamily';
import themeColors from './themes';

export default {
	...flex,
	...spacing,
	...sizing,

	appContent: {
		backgroundColor: '#fff',
		overflow: 'hidden',
	},

	textLarge: {
		fontSize: variables.fontSizeLarge,
	},

	headerText: {
		color: themeColors.heading,
		fontFamily: fontFamily.RALEWAY_BOLD,
		fontSize: variables.fontSizeLarge,
	},
};

/**
 * Takes safe area insets and returns padding to use for a View
 *
 * @param {Object} insets
 * @returns {Object}
 */
function getSafeAreaPadding(insets) {
	return {
		paddingTop: insets.top,
		paddingBottom: insets.bottom * variables.safeInsertPercentage,
	};
}

export {getSafeAreaPadding};
