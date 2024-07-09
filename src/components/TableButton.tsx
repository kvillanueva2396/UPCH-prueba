interface Props {
	btnColor: 'primary' | 'danger'
	icon: string
	text: string
	onClick?: () => void
}

export default function TableButton({ btnColor, icon, text, onClick }: Props) {
	const handleClick = () => {
		if (onClick) onClick()
	}

	return (
		<button type="button" className={`btn btn-outline-${btnColor}`} onClick={handleClick}>
			<i className={`bi bi-${icon}`}></i> {text}
		</button>
	)
}
