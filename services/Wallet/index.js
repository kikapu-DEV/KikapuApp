import { apiBase, apiEndpoints } from "../../constants";
import { getToken } from "../../helpers/secureStore";
import axios from "axios";

export const getWallet = async () => {
	try {
		const url = apiBase + apiEndpoints.getWallet;
		const accessToken = await getToken();
		const response = await axios.get(url, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
		});
		// console.log("requester service", response.data);
		return response.data;
	} catch (error) {
		return error.response.data.message;
	}
};
