import { Constants } from '../utils'
import Pagination from './Pagination'

interface Props {
	registersNumber: number
	currentPage: number
	setCurrentPage: (page: number) => void
}

export default function MyTableFooter({ registersNumber, currentPage, setCurrentPage }: Props) {
	return (
		<div className="d-flex justify-content-between mt-3">
			<div>#Registros: {registersNumber}</div>
			<Pagination
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalPages={Constants.TOTAL_PAGES}
			/>
		</div>
	)
}
