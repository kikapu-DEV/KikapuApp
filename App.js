import { AuthProvider } from "./helpers/contexts/AuthContext";
import AppRoutes from "./navigation/AppRoutes";

export default function App() {
	return (
		<AuthProvider>
			<AppRoutes />
		</AuthProvider>
	);
}
