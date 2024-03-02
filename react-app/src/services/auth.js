import { axiosInstance } from "./axios-instance"
export const AuthServices = {
    register: async (data) => {
        return axiosInstance.post('api/auth/register', data)
    },

    login: async (data) => {
        return axiosInstance.post('api/auth/login', data)
    },

    profile: async () => {
        return axiosInstance.get('api/auth/profile', {})
    }
}