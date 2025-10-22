import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL 
		? `${import.meta.env.VITE_BACKEND_URL}/api` 
		: import.meta.env.MODE === "development" 
			? "http://localhost:5000/api" 
			: "/api",
});
