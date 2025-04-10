import axiosInstance from './AxiosInstunce'

export const getUsers = () => axiosInstance.get('users')
export const getUserById = (id) => axiosInstance.get(`/users/${id}`);
export const addUser = (data) => axiosInstance.post('/users', data);
export const editUser = (id, data) => axiosInstance.put(`/users/${id}`, data);
export const deleteUser = (id) => axiosInstance.delete(`/users/${id}`);
