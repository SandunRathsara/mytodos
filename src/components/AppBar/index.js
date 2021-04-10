import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { THEME } from '../../constants/theme.constants';

export default function Header({ scene, navigation }) {
	const [backExist, setBackExist] = useState(false);
	useEffect(() => {
		if (navigation.canGoBack()) {
			setBackExist(true);
		}
	}, [navigation]);
	return (
		<Appbar.Header style={styles.header}>
			{backExist && <Appbar.BackAction onPress={navigation.goBack} />}
			<Appbar.Content title={scene.route.name} style={{ color: THEME.LIGHT }} subtitle="Personal task management" />
			<Appbar.Action icon="magnify" onPress={() => console.log('magnifying')} />
			<Appbar.Action icon="dots-vertical" onPress={() => console.log('vertical dot')} />
		</Appbar.Header>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: THEME.DARK,
	},
});
