
const CreateButton = ({ text, ...children }) => {


	return (
		<button className="bg-[#EDECFE] dark:bg-acc2 flex items-center justify-center duration-500 min-w-[160px] h-[50px]
		dark:hover:bg-purple hover:bg-[#dedeff]  rounded-2xl"
			{...children}
		>
			<span className="text-purple dark:text-[#EDECFE] text-lg">
				{text}
			</span>
		</button>
	)
}

export default CreateButton