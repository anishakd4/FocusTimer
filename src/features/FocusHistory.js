import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
	if (!history || !history.length) {
		return (
			<Text style={styles.title}>We Haven't focussed on anything yet</Text>
		);
	}
	const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Things we have focussed on</Text>
			<FlatList data={history} renderItem={renderItem} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: spacing.md,
		flex: 1,
	},
	item: {
		fontSize: fontSizes.md,
		color: colors.white,
		padding: spacing.sm,
	},
	title: {
		color: colors.white,
		fontSize: fontSizes.md,
		fontWeight: 'bold',
	},
});
