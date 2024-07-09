import { DropdownOption } from '@/types/DropdownOption'
import { useState } from 'react'

interface Props {
	className?: string
	items: DropdownOption[]
	onSelectItem: (item: DropdownOption) => void
}

export default function Dropdown({ items, className, onSelectItem }: Props) {
	const [selectedOption, setSelectedOption] = useState(items[1])

	const handleSelect = (item: DropdownOption) => {
		setSelectedOption(item)
		onSelectItem(item)
	}

	return (
		<div className={`dropdown ${className}`}>
			<button
				className="btn dropdown-toggle"
				type="button"
				id="dropdownMenuButton"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				{selectedOption.label}
			</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				{items.map((item, index) => (
					<li key={index}>
						<button
							className={`dropdown-item ${index === 0 ? 'disabled' : ''}`}
							onClick={() => index !== 0 && handleSelect(item)}
						>
							{item.label}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
