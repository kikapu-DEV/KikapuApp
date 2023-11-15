const apiBaseUrl = "https://kikapu-api.onrender.com";
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
