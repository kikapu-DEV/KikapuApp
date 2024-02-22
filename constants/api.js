// const apiBaseUrl = "https://kikapu-api.onrender.com";
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
	getUserProfile: "/get-user-profile",
	logout: "/logout",

	// farmers product
	getProductCategories: "/get-product-categories",
	getProductByCategory: "/get-product-by-category/{categoryId}",
	getProducts: "/get-products",
	getProduct: "/get-product/{productId}",

	// wallet
	deposit: "/deposit",
	withdraw: "/withdraw",
	transferToAnotherWallet: "/transfer-to-wallet",
	getWallet: "/get-user-wallet",

	// orders
	getSellerOrders: "/get-seller-orders",
	getBuyerOrders: "/get-buyer-orders",

	// Students
	getRestaurants: "/get-restaurants",
	getMenus: "/get-menus",
	getMenuById: "/get-menu/{menuId}",
};

export { apiBase, apiEndpoints };
