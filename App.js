import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./components/HomePage";
import TambahBerkas from "./components/TambahBerkas";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="HomePage">
				<Stack.Screen
					name="HomePage"
					component={HomePage}
					options={{
						title: "Home Page",
						headerStyle: {backgroundColor: "#e81c4c"},
						headerTintColor: "#fff"
					}}
				/>
        <Stack.Screen
					name="TambahBerkas"
					component={TambahBerkas}
					options={{
						title: "Tambah Berkas",
						headerStyle: {backgroundColor: "#e81c4c"},
						headerTintColor: "#fff"
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
