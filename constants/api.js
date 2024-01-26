// const apiBaseUrl = !__DEV__
// 	? "https://kikapu-api.onrender.com"
// 	: "http://192.168.91.129:3000" || http://10.0.2.2:3000;
const apiBaseUrl = "http://10.0.2.2:3000";
const apiBasePath = "/api/v1";
const apiBase = apiBaseUrl + apiBasePath;
const apiEndpoints = {
	register: "/register",
	verifyEmail: "/verify-email",
	login: "/login",
	forgotPassword: "/forgot-password",
	verifyResetToken: "/verify-reset-token",
	setNewPassword: "/set-new-password",
	getProductCategories: "/get-product-categories",
	getProductByCategory: "/get-product-by-category/{categoryId}",
	getProducts: "/get-products",
	getProduct: "/get-product/{productId}",
};

export { apiBase, apiEndpoints };
