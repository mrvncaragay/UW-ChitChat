import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ErrorBoundary from './src/components/ErrorBoundary';
import {StatusBar} from 'expo-status-bar';
import ChitChatApp from './src/ChitChatApp';

export default function App() {
	return (
		<SafeAreaProvider>
			<ErrorBoundary errorMessage="ChitChat crash caught by error boundary">
				<StatusBar style="auto" />
				<ChitChatApp />
			</ErrorBoundary>
		</SafeAreaProvider>
	);
}
