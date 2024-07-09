interface ItemHeader {
	id: number
	label: string
}

interface Props {
	items: ItemHeader[]
}

export default function MyTableHeaders({ items }: Props) {
	return (
		<tr>
			<th scope="col">#</th>
			{items.map(header => (
				<th key={header.id} scope="col">
					{header.label}
				</th>
			))}
		</tr>
	)
}
