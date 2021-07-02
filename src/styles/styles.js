import variables from './variables';

const flex = {
	flex1: {
		flex: 1,
	},
};

export default {
	...flex,

	appContent: {
		backgroundColor: '#fff',
		overflow: 'hidden',
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
