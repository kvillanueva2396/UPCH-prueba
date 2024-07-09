import { RandomUser } from '@/types/RandomUser'

interface Props {
	randomUser: RandomUser
}

export default function MyTableItem({ randomUser }: Props) {
	return (
		<tr className="my-table-item">
			<td className="my-table-item__col">
				<div className="d-flex align-items-center gap-3">
					<input
						className="form-check-input mt-0"
						type="checkbox"
						value=""
						aria-label="Checkbox for following text input"
					/>
					<img
						className="my-table-item__image-profile"
						src={randomUser.picture.thumbnail}
						alt="Random User Photo"
					/>
				</div>
			</td>
			<td className="my-table-item__col">
				{randomUser.name.title} {randomUser.name.first} {randomUser.name.last}
			</td>
			<td className="my-table-item__col">{randomUser.gender}</td>
			<td className="my-table-item__col">
				{randomUser.location.street.name} {randomUser.location.street.number}
			</td>
			<td className="my-table-item__col">{randomUser.phone}</td>
			<td className="my-table-item__col">{randomUser.email}</td>
			<td className="my-table-item__col">{randomUser.location.country}</td>
		</tr>
	)
}
