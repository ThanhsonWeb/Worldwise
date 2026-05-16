import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Cities from "./components/Cities";
import Countries from "./components/Countries";

// define routes
const router = createBrowserRouter([
	{ path: "/", element: <HomePage /> },
	{
		path: "/app",
		element: <AppLayout />,
		children: [
			{ path: "cities", element: <Cities /> }, // abosulte
			{ path: "countries", element: <Countries /> },
		],
	},
	{ path: "/pricing", element: <Pricing /> },
	{ path: "/product", element: <Product /> },
	{ path: "/login", element: <Login /> },
	{ path: "*", element: <PageNotFound /> },
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
