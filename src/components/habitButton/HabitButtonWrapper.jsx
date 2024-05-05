
const HabitButtonWrapper = ({ ...children }) => {



	return (
		<button className="bg-white hover:bg-[#dedeff] dark:hover:bg-purple shadow-lg dark:bg-acc2 
		w-[75px] h-[75px] rounded-2xl flex justify-center 
				items-center duration-500 relative"
			{...children} />
	)
}

export default HabitButtonWrapper