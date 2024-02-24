import { apiBase, apiEndpoints } from "../../constants";
import { getToken } from "../../helpers/secureStore";
import axios from "axios";

// Products
export const createProduct = async (data) => {
	try {
		const url = apiBase + apiEndpoints.createProduct;
		const accessToken = await getToken();
		const response = await axios.post(url, data, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
		});
		return response.data;
	} catch (error) {
		return error.response.data.message;
	}
};
