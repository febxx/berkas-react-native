import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, StyleSheet, Pressable } from "react-native";

const HomePage = ({ navigation }) => {
	const handleTambahBerkas = () => {
		navigation.navigate("TambahBerkas");
	};

	return (
		<View style={styles.container}>
			<Pressable style={styles.button} onPress={handleTambahBerkas}>
				<Text style={styles.buttonText}>Tambah Berkas</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 5,
    backgroundColor: "#e81c4c",
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 50,
		elevation: 3,
		backgroundColor: "#e81c4c",
	},
	buttonText: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},
});

export default HomePage;
