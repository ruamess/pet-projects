

const Day = ({ index }) => {


	return (
		<div className="min-w-[180px] h-16 bg-acc2 flex items-center justify-center rounded-l-2xl">
			<span className="text-2xl">День {index + 1}</span>
		</div>
	)
}

export default Day