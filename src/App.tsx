import { useCallback, useEffect, useState } from 'react'
import { httpAxios } from './utils/httpAxios'
import { RandomUserAPI } from './types/RandomUserAPI'
import { FilterBox, Header, MyTable, TableButton } from './components'
import { RandomUser } from './types/RandomUser'
import { Constants } from './utils'
import { DropdownOption } from './types/DropdownOption'

function App() {
	const [results, setResults] = useState<RandomUser[]>([])
	const [currentPage, setCurrenPage] = useState(1)
	const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false)
	const [nationality, setNationality] = useState<DropdownOption>()
	const [gender, setGender] = useState<DropdownOption>()

	const fetchUsers = useCallback(async () => {
		try {
			const response = await httpAxios.get<RandomUserAPI>(
				`/api/?page=${currentPage}&results=${Constants.RESULTS_NUMBER}&gender=${
					gender?.label.toLocaleLowerCase() ?? ''
				}&nat=${nationality?.label ?? ''}`
			)
			setResults(response.results)
		} catch (error) {
			console.error(error)
		}
	}, [currentPage, gender, nationality])

	useEffect(() => {
		fetchUsers()
	}, [currentPage, fetchUsers])

	return (
		<>
			<Header />
			<div className="container container-fluid">
				<h1 className="title">Mi tabla</h1>
				<div className="d-flex gap-3">
					<TableButton
						btnColor="primary"
						icon="sliders"
						text="Filtros"
						onClick={() => setIsFilterBoxOpen(!isFilterBoxOpen)}
					/>
					<TableButton btnColor="primary" icon="pencil" text="Editar" />
					<TableButton btnColor="danger" icon="trash" text="Eliminar" />
				</div>
				{isFilterBoxOpen && (
					<FilterBox onSelectNationality={setNationality} onSelectGender={setGender} />
				)}
				<MyTable results={results} currentPage={currentPage} setCurrentPage={setCurrenPage} />
			</div>
		</>
	)
}

export default App
