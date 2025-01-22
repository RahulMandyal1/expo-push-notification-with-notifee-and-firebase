import { View, Pressable, Text } from "react-native";
import notifee, { AndroidImportance } from "@notifee/react-native";

function Home() {
	async function onDisplayNotification() {
		// Request permissions (required for iOS)
		await notifee.requestPermission();

		const channelId = await notifee.createChannel({
			id: "important",
			name: "Important Notifications",
			importance: AndroidImportance.HIGH,
		});

		await notifee.displayNotification({
			title: "Your account requires attention",
			body: "You are overdue payment on one or more of your accounts!",
			android: {
				channelId,
				// importance: AndroidImportance.HIGH,
			},
		});

		console.log("Notificaiton has been displayed ");
	}

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Pressable
				style={{
					backgroundColor: "red",
					height: 50,
					width: "100%",
				}}
				onPress={() => onDisplayNotification()}
			>
				<Text>Send notification locally</Text>
			</Pressable>
		</View>
	);
}

export default Home;
