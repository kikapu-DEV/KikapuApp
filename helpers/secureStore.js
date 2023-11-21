import * as SecureStore from "expo-secure-store";

export async function saveUser(key, value) {
	try {
		await SecureStore.setItemAsync(key, value);
	} catch (error) {
		console.log("Error storing the auth token", error);
	}
}

export async function getUser() {
	try {
		const user = await SecureStore.getItemAsync("user");
		return user ? JSON.parse(user) : null;
	} catch (error) {
		console.log(error);
		return null;
	}
}

export async function logout() {
	try {
		return await SecureStore.deleteItemAsync("user");
	} catch (error) {
		console.log(error);
	}
}
