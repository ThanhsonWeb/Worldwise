import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		watch: {
			// Tells Vite to completely ignore changes made to db.json
			ignored: ["**/db.json", "**/data/**"],
		},
	},
});
