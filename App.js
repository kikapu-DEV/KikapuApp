import { AuthProvider } from "./helpers/contexts/AuthContext";
import AppRoutes from "./navigation/AppRoutes";
import {Provider} from 'react-redux';
import store from "./store";
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient();
export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
		<AuthProvider>
			<Provider store={store}>
				<AppRoutes />
			</Provider>
			
		</AuthProvider>
		</QueryClientProvider>
	);
}
