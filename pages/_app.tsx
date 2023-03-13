import "@/assets/styles/globals.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { persistor, store } from "@/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AuthProvider from "@/providers/auth-provider/AuthProvider";
import { TypeComponentsAuthFields } from "@/providers/auth-provider/auth-page.types";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export default function App({
	Component,
	pageProps,
}: AppProps & TypeComponentsAuthFields) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AuthProvider Component={{ isOnlyUser: Component.isOnlyUser }}>
						<CssBaseline />
						<ToastContainer
							position="bottom-left"
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							pauseOnFocusLoss
							draggable
							pauseOnHover
						/>
						<Component {...pageProps} />
					</AuthProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	);
}
