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

	floatingActionButton: {
		position: 'absolute',
		right: 20,
		bottom: 34,
		borderRadius: 999,
		alignItems: 'center',
		justifyContent: 'center',
	},

	optionAlternateText: {
		color: themeColors.textSupporting,
		fontFamily: fontFamily.GTA,
		fontSize: variables.fontSizeLabel,
		height: 20,
		lineHeight: 20,
	},
	optionDisplayName: {
		fontFamily: fontFamily.GTA,
		height: 18,
		lineHeight: 18,
	},

	optionAlternateTextCompact: {
		flexShrink: 1,
		flexGrow: 1,
		flexBasis: 'auto',
	},

	modalMenuItems: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 20,
	},

	createMenuText: {
		fontFamily: fontFamily.RALEWAY_BOLD,
		fontSize: variables.fontSizeNormal,
		color: themeColors.heading,
	},

	baseModalStyle: {
		...spacing.pt4,
		margin: 0,
		overflow: 'hidden',
		backgroundColor: '#fff',
		width: '100%',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
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
