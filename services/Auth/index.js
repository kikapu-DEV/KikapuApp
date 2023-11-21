import { apiBase, apiEndpoints } from "../../constants";
import axios from "axios";

export const register = async ({
	firstName,
	lastName,
	email,
	role,
	phone,
	password,
}) => {
	const url = apiBase + apiEndpoints.register;
	try {
		const response = await axios.post(url, {
			firstName,
			lastName,
			email,
			role,
			phone,
			password,
		});
		return response;
	} catch (error) {
		return error.response.data.message;
	}
};

export const verifyEmail = async ({ email, otp }) => {
	const url = apiBase + apiEndpoints.verifyEmail;
	try {
		const response = await axios.post(url, {
			email,
			otp,
		});
		return response;
	} catch (error) {
		return error.response.data.message;
	}
};

export const login = async ({ email, password }) => {
	const url = apiBase + apiEndpoints.login;
	try {
		const response = await axios.post(url, {
			email,
			password,
		});
		return response;
	} catch (error) {
		console.log("login response error", error);
		return error.response.data.message;
	}
};

export const forgotPassword = async ({ email }) => {
	const url = apiBase + apiEndpoints.forgotPassword;
	try {
		const response = await axios.post(url, {
			email,
		});
		return response;
	} catch (error) {
		return error.response.data.message;
	}
};

export const verifyResetToken = async ({ email }) => {
	const url = apiBase + apiEndpoints.verifyResetToken;
	try {
		const response = await axios.post(url, {
			email,
		});
		return response;
	} catch (error) {
		return error.response.data.message;
	}
};

export const setNewPassword = async ({ email, password }) => {
	const url = apiBase + apiEndpoints.setNewPassword;
	try {
		const response = await axios.post(url, {
			email,
			password,
		});
		return response;
	} catch (error) {
		return error.response.data.message;
	}
};
