// const apiBaseUrl = "https://kikapu-api.onrender.com"
const apiBaseUrl = "http://10.0.2.2:3000";
const apiBasePath = "/api/v1";
const apiBase = apiBaseUrl + apiBasePath;
const apiEndpoints = {
	// authentication
	register: "/register",
	verifyEmail: "/verify-email",
	login: "/login",
	forgotPassword: "/forgot-password",
	verifyResetToken: "/verify-reset-token",
	setNewPassword: "/set-new-password",
	// farmers products
	getProductCategories: "/get-product-categories",
	getProductByCategory: "/get-product-by-category/{categoryId}",
	getProducts: "/get-products",
	getProduct: "/get-product/{productId}",
	// wallet
	deposit: "/deposit",
	withdraw: "/withdraw",
	transferToAnotherWallet: "/transfer-to-wallet",
	getWallet: "/get-user-wallet",
};

export { apiBase, apiEndpoints };
