import axios, { type AxiosRequestConfig } from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || ""
})
api.interceptors.request.use((request) => {
    const token = localStorage.getItem("token");
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
}, (error) => {
    return Promise.reject(error);
});
api.interceptors.response.use((response) => response, (error) => {
    const originalRequest = error.config;
    if(error.response && error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem("refreshToken") || false;
        if (refreshToken) {
            try {
                return axios.post("/api/auth/refresh-token", { refreshToken })
                .then((response) => {
                    const newToken = response.data.token;
                    localStorage.setItem("token", newToken);
                    originalRequest.headers.Authorization = `Bearer ${newToken}`;
                    return axios(originalRequest);
                });
            }
            catch (refreshError) {
                localStorage.removeItem("token");
                localStorage.removeItem("refreshToken");
                return Promise.reject(refreshError);
            }
        }
        else {
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            window.location.href = "/login";
        }
    }
    return Promise.reject(error);
});
export const getAsync = async <TResponse>(url: string, config?: AxiosRequestConfig) => {
    try {
        const response = await api.get(url, config);
        return response.data as TResponse;
    } catch (error) {
        console.error("API request failed:", error);
        throw error;
    }
}
export const postAsync = async <TResponse, TData = unknown>(url: string, data?: TData, config?: AxiosRequestConfig) => {
    try {
        const response = await api.post(url, data, config);
        return response.data as TResponse;
    } catch (error) {
        console.error("API request failed:", error);
        throw error;
    }
}
export const putAsync = async <TResponse, TData = unknown>(url: string, data?: TData, config?: AxiosRequestConfig) => {
    try {
        const response = await api.put(url, data, config);
        return response.data as TResponse;
    } catch (error) {
        console.error("API request failed:", error);
        throw error;
    }
}
export const deleteAsync = async <TResponse>(url: string, config?: AxiosRequestConfig) => {
    try {
        const response = await api.delete(url, config);
        return response.data as TResponse;
    } catch (error) {
        console.error("API request failed:", error);
        throw error;
    }
}