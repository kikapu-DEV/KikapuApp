import { apiBase, apiEndpoints } from "../../constants";
import { getToken } from "../../helpers/secureStore";
import axios from "axios";

// Products
export const getProductCategories = async () => {
	try {
		const url = apiBase + apiEndpoints.getProductCategories;
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

export const getProductByCategory = async (params) => {
	const categoryId = params.queryKey[1];
	try {
		const url =
			apiBase +
			apiEndpoints.getProductByCategory.replace("{categoryId}", categoryId);
		const accessToken = await getToken();
		const response = await axios.get(url, {
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

export const getProducts = async () => {
	try {
		const url = apiBase + apiEndpoints.getProducts;
		const accessToken = await getToken();
		const response = await axios.get(url, {
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

export const getProduct = async (params) => {
	const productId = params.queryKey[1];
	try {
		const url =
			apiBase + apiEndpoints.getProduct.replace("{productId}", productId);
		const accessToken = await getToken();
		const response = await axios.get(url, {
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

// Menus
export const getMenuCategories = async (params) => {
	try {
		const url = apiBase + apiEndpoints.getMenuCategories;
		const accessToken = await getToken();
		const response = await axios.get(url, {
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

export const createMenu = async (data) => {
	try {
		const url = apiBase + apiEndpoints.createMenu;
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
