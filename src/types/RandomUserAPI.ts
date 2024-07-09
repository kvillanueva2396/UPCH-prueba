import { RandomUser } from './RandomUser'

type RandomUserAPIInfo = {
	page: number
	results: number
	seed: string
	version: string
}

export type RandomUserAPI = {
	info: RandomUserAPIInfo
	results: RandomUser[]
}
