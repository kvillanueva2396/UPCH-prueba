import { useMemo } from 'react'

interface Props {
	currentPage: number
	setCurrentPage: (page: number) => void
	totalPages: number
}

export default function Pagination({ currentPage, setCurrentPage, totalPages }: Props) {
	const filteredPages = useMemo(() => {
		const pagesArray: Array<number> = []

		for (let numberPage = 1; numberPage <= totalPages; numberPage++) {
			pagesArray.push(numberPage)
		}

		return pagesArray
	}, [totalPages])

	return (
		<div className="pagination">
			<button className="btn btn-light">Prev</button>
			<ul className="pagination__pages">
				{filteredPages.map((page, index) => (
					<li key={`page-number-${index + 1}`}>
						<button
							type="button"
							disabled={page === currentPage}
							className="btn btn-primary"
							onClick={() => setCurrentPage(page)}
						>
							{page}
						</button>
					</li>
				))}
			</ul>
			<button className="btn btn-light">Next</button>
		</div>
	)
}
