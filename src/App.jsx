import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Cities from "./components/Cities";
import Countries from "./components/Countries";
import { CitiesProvider } from "./contexts/CitiesContext";
import City from "./components/City";
import Form from "./components/Form";

// define routes
const router = createBrowserRouter([
	{ path: "/", element: <HomePage /> },
	{
		path: "/app", // relative route
		element: <AppLayout />,
		children: [
			{ index: true, element: <Cities /> },
			{ path: "cities/:id", element: <City /> }, // absolute route
			{ path: "cities", element: <Cities /> }, // absolute route
			{ path: "countries", element: <Countries /> },
			{ path: "form", element: <Form /> },
		],
	},
	{ path: "/pricing", element: <Pricing /> },
	{ path: "/product", element: <Product /> },
	{ path: "/login", element: <Login /> },
	{ path: "*", element: <PageNotFound /> },
]);

function App() {
	return (
		<CitiesProvider>
			<RouterProvider router={router} />;
		</CitiesProvider>
	);
}

export default App;
