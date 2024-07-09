import { GenericData } from './GenericData'

type HttpMethod = {
	<T>(path: string, params?: GenericData, config?: GenericData): Promise<T>
}

export type Http = {
	get: HttpMethod
	post: HttpMethod
	put: HttpMethod
	delete: HttpMethod
}
