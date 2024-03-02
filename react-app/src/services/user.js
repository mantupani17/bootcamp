import { axiosInstance } from "./axios-instance"

export const UserServices = {
    getUsers: async () => {
        return axiosInstance.get('/api/user')
    },
    deleteUser: async (id) => {
        return axiosInstance.delete(`/api/user/${id}`)
    }
}