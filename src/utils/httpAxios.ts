import axios from 'axios'
import { GenericData } from '@/types/GenericData'
import { Http } from '@/types/Http'

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
})

const httpGet = async <T>(path: string, params?: GenericData, config?: GenericData) => {
	const response = await axiosInstance.get<T>(path, {
		...config,
		params: params,
	})

	return response.data
}

const httpPost = async <T>(path: string, params?: GenericData, config?: GenericData) => {
	const response = await axiosInstance.post<T>(path, { ...params }, { ...config })

	return response.data
}

const httpPut = async <T>(path: string, params?: GenericData, config?: GenericData) => {
	const response = await axiosInstance.put<T>(path, { ...params }, { ...config })

	return response.data
}

const httpDelete = async <T>(path: string, params?: GenericData, config?: GenericData) => {
	const response = await axiosInstance.delete<T>(path, {
		...config,
		params: params,
	})

	return response.data
}

export const httpAxios: Http = {
	get: httpGet,
	post: httpPost,
	put: httpPut,
	delete: httpDelete,
}
