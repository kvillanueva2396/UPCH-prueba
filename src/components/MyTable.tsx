import { ChangeEvent, useMemo, useState } from 'react'
import { Constants } from '../utils'
import MyTableHeaders from './MyTableHeaders'
import MyTableItem from './MyTableItem'
import { RandomUser } from '@/types/RandomUser'
import MyTableFooter from './MyTableFooter'

interface Props {
	results: RandomUser[]
	currentPage: number
	setCurrentPage: (page: number) => void
}

export default function MyTable({ results, currentPage, setCurrentPage }: Props) {
	const [searchTerm, setSearchTerm] = useState('')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const filteredResults = useMemo(() => {
		return results.filter(item => item.name.first.toLowerCase().includes(searchTerm.toLowerCase()))
	}, [results, searchTerm])

	return (
		<div className="my-table">
			<label className="my-table__label">
				Buscar:
				<input
					type="search"
					className="form-control form-control-sm my-table__search-input"
					placeholder="Buscar"
					onChange={handleChange}
				/>
			</label>
			<div className="table-responsive">
				<table className="table">
					<thead>
						<MyTableHeaders items={Constants.MY_TABLE_HEADERS} />
					</thead>
					<tbody>
						{filteredResults.map((randomUser, index) => (
							<MyTableItem key={`random-user-${index + 1}`} randomUser={randomUser} />
						))}
					</tbody>
				</table>
			</div>
			{results.length > 0 && (
				<MyTableFooter
					registersNumber={filteredResults.length}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			)}
		</div>
	)
}
