import axios from "axios";
// import { addToken } from "./plugins";

export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // baseURL: import.meta.env.VITE_APP_URL_LIVE as string,
});
