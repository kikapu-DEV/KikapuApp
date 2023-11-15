import { apiBase, apiEndpoints } from "../../constants";
import axios from "axios";

export const register = async ({
	firstName,
	lastName,
	email,
	role,
	phoneNumber,
	password,
}) => {
	const url = apiBase + apiEndpoints.register;
	return await axios.post(url, {
		firstName,
		lastName,
		email,
		role,
		phone,
		password,
	});
};

export const verifyEmail = async ({ email, otp }) => {
	const url = apiBase + apiEndpoints.verifyEmail;
	return await axios.post(url, {
		email,
		otp,
	});
};

export const login = async ({ email, password }) => {
	const url = apiBase + apiEndpoints.login;
	return await axios.post(url, {
		email,
		password,
	});
};

export const forgotPassword = async ({ email }) => {
	const url = apiBase + apiEndpoints.forgotPassword;
	return await axios.post(url, {
		email,
	});
};

export const verifyResetToken = async ({ email }) => {
	const url = apiBase + apiEndpoints.verifyResetToken;
	return await axios.post(url, {
		email,
	});
};

export const setNewPassword = async ({ email, password }) => {
	const url = apiBase + apiEndpoints.setNewPassword;
	return await axios.post(url, {
		email,
		password,
	});
};
