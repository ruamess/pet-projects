
const HabbitButtonWrapper = ({ ...children }) => {

	return (
		<button className="w-[75px] h-[75px] rounded-2xl bg-acc2 flex justify-center 
				items-center hover:bg-purple duration-500 relative"
			{...children} />
	)
}

export default HabbitButtonWrapper