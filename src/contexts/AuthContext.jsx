import { createContext, useState, useContext } from "react";
import avatar from "../assets/img/avatar.jpg";

const AuthContext = createContext();

function AuthProvider({ children }) {
	const FAKE_USER = {
		email: "AnhSondz@gmail.com",
		password: "123456",
		name: "SonJony",
		image: avatar,
	};

	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState(null);

	console.log(isAuthenticated);

	function login(email, password) {
		if (email === FAKE_USER.email && password === FAKE_USER.password)
			setIsAuthenticated(true);
		setUser(FAKE_USER);
	}

	function logout() {
		setIsAuthenticated(false);
		setUser(null);
	}

	return (
		<AuthContext.Provider value={{ login, isAuthenticated, logout, user }}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) throw new Error("it must be use in AuthProvider");
	return context;
}

export { AuthProvider, useAuth };
