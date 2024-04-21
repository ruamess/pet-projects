
const CreateButton = ({ text, ...children }) => {


	return (
		<button className="flex items-center justify-center duration-500 min-w-[160px] h-[50px]
		 bg-acc2  hover:bg-purple  rounded-2xl"
			{...children}
		>
			<span className="text-[#EDECFE] text-lg">
				{text}
			</span>
		</button>
	)
}

export default CreateButton