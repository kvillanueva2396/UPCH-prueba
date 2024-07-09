type Dob = {
	age: number
	date: string
}

type Gender = 'male' | 'female'

type Id = {
	name: string
	value: string
}

type Coordinate = {
	latitude: string
	longitude: string
}

type Street = {
	name: string
	number: number
}

type Timezone = {
	description: string
	offset: string
}

type Location = {
	city: string
	coordinates: Coordinate
	country: string
	postcode: number
	state: string
	street: Street
	timezone: Timezone
}

type Login = {
	md5: string
	password: string
	salt: string
	sha1: string
	sha256: string
	username: string
	uuid: string
}

type Name = {
	first: string
	last: string
	title: string
}

type Picture = {
	large: string
	medium: string
	thumbnail: string
}

type Registered = {
	age: number
	date: string
}

export type RandomUser = {
	cell: string
	dob: Dob
	email: string
	gender: Gender
	id: Id
	location: Location
	login: Login
	name: Name
	nat: string
	phone: string
	picture: Picture
	registered: Registered
}
