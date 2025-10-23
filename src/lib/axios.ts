import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL 
		? `${import.meta.env.VITE_BACKEND_URL}/api` 
		: import.meta.env.MODE === "development" 
			? "https://wavebackend.vercel.app/api" 
			: "https://wavebackend.vercel.app/api",
});
