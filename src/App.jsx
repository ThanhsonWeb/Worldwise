import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import Price from "./pages/Price";
import Product from "./pages/Product";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

// define routes
const router = createBrowserRouter([
	{ path: "/", element: <HomePage /> },
	{ path: "/price", element: <Price /> },
	{ path: "/product", element: <Product /> },
	{ path: "/login", element: <Login /> },
	{ path: "*", element: <PageNotFound /> },
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
