import { DropdownOption } from '@/types/DropdownOption'
import { Constants } from '../utils'
import Dropdown from './Dropdown'
import { useState } from 'react'

interface Props {
	onSelectNationality: (item: DropdownOption) => void
	onSelectGender: (item: DropdownOption) => void
}

export default function FilterBox({ onSelectGender, onSelectNationality }: Props) {
	const [nationality, setNationality] = useState<DropdownOption>()
	const [gender, setGender] = useState<DropdownOption>()

	const handleSearch = () => {
		if (nationality) onSelectNationality(nationality)
		if (gender) onSelectGender(gender)
	}

	return (
		<div className="filter-box row mt-3">
			<Dropdown
				className="col-sm-12 col-lg-4"
				items={Constants.NATIONALITIES}
				onSelectItem={setNationality}
			/>
			<Dropdown className="col-sm-12 col-lg-4" items={Constants.GENDERS} onSelectItem={setGender} />
			<button type="button" className="btn btn-primary col-sm-12 col-lg-3" onClick={handleSearch}>
				<i className="bi bi-search"></i> Buscar
			</button>
		</div>
	)
}
