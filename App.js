import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ErrorBoundary from './src/components/ErrorBoundary';
import {StatusBar} from 'expo-status-bar';
import {useFonts} from 'expo-font';
import ChitChatApp from './src/ChitChatApp';
import AppLoading from 'expo-app-loading';
import {
	Raleway_100Thin,
	Raleway_100Thin_Italic,
	Raleway_200ExtraLight,
	Raleway_200ExtraLight_Italic,
	Raleway_300Light,
	Raleway_300Light_Italic,
	Raleway_400Regular,
	Raleway_400Regular_Italic,
	Raleway_500Medium,
	Raleway_500Medium_Italic,
	Raleway_600SemiBold,
	Raleway_600SemiBold_Italic,
	Raleway_700Bold,
	Raleway_700Bold_Italic,
	Raleway_800ExtraBold,
	Raleway_800ExtraBold_Italic,
	Raleway_900Black,
	Raleway_900Black_Italic,
} from '@expo-google-fonts/raleway';

export default () => {
	const [loaded] = useFonts({
		Raleway_100Thin,
		Raleway_100Thin_Italic,
		Raleway_200ExtraLight,
		Raleway_200ExtraLight_Italic,
		Raleway_300Light,
		Raleway_300Light_Italic,
		Raleway_400Regular,
		Raleway_400Regular_Italic,
		Raleway_500Medium,
		Raleway_500Medium_Italic,
		Raleway_600SemiBold,
		Raleway_600SemiBold_Italic,
		Raleway_700Bold,
		Raleway_700Bold_Italic,
		Raleway_800ExtraBold,
		Raleway_800ExtraBold_Italic,
		Raleway_900Black,
		Raleway_900Black_Italic,
	});

	if (!loaded) {
		return <AppLoading />;
	}

	return (
		<SafeAreaProvider>
			<ErrorBoundary errorMessage="ChitChat crash caught by error boundary">
				<StatusBar style="auto" />
				<ChitChatApp />
			</ErrorBoundary>
		</SafeAreaProvider>
	);
};
