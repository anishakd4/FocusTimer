import { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Focus } from './src/features/Focus';
import { FocusHistory } from './src/features/FocusHistory';
import { Timer } from './src/features/TImer';
import { colors } from './src/utils/colors';

export default function App() {
	const [currentSubject, setCurrentSubject] = useState();
	const [history, setHistory] = useState([]);
	return (
		<View style={styles.container}>
			{!currentSubject ? (
				<>
					<Focus addSubject={setCurrentSubject} />
					<FocusHistory history={history} />
				</>
			) : (
				<Timer
					focusSubject={currentSubject}
					onTimerEnd={(focusSubject) => {
						setHistory([...history, focusSubject]);
					}}
					clearSubject={() => {
						setCurrentSubject(null);
					}}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		backgroundColor: colors.darkBlue,
	},
});
