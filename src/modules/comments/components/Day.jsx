
const Day = ({ index, text }) => {

	return (
		<div className="bg-[#FBFAFF] dark:bg-acc2  min-w-[180px] 
		h-full flex items-center justify-center rounded-l-xl">
			<span className="text-2xl">
				{text} {index + 1}
			</span>
		</div>
	)
}

export default Day