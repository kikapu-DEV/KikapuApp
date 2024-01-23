import { AuthProvider } from "./helpers/contexts/AuthContext";
import AppRoutes from "./navigation/AppRoutes";
import {Provider} from 'react-redux';
import store from "./store";

export default function App() {
	return (
		<AuthProvider>
			<Provider store={store}>
				<AppRoutes />
			</Provider>
			
		</AuthProvider>
	);
}
