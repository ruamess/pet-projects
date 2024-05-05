

const ProgressText = ({ progress, text }) => {

	return (
		<div className="text-md flex justify-between container">
			<span>{text}</span>
			<span>{progress}%</span>
		</div>
	)
}

export default ProgressText