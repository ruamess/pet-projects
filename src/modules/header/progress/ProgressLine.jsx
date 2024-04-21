

const ProgressLine = ({ progress }) => {

	return (
		<div className="container bg-[#E6E9ED] h-1.5 rounded-2xl">
			<div className="bg-purple h-1.5 rounded-2xl" style={{ width: `${progress}%` }} />
		</div>
	)
}

export default ProgressLine