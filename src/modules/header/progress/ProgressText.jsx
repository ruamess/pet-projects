

const ProgressText = ({ progress }) => {

	return (
		<div className="text-md flex justify-between container">
			<span>Progress</span>
			<span>{progress}%</span>
		</div>
	)
}

export default ProgressText