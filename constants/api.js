const apiBaseUrl = !__DEV__
	? "https://kikapu-api.onrender.com"
	: "http://192.168.100.15:3000";
const apiBasePath = "/api/v1";
const apiBase = apiBaseUrl + apiBasePath;
const apiEndpoints = {
	register: "/register",
	verifyEmail: "/verify-email",
	login: "/login",
	forgotPassword: "/forgot-password",
	verifyResetToken: "/verify-reset-token",
	setNewPassword: "/set-new-password",
};

export { apiBase, apiEndpoints };