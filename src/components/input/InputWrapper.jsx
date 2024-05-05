
const InputWrapper = ({ ...children }) => {

	return (
		<div className="border bg-white border[#E7EBFB] dark:border-none dark:bg-acc text-xl w-full h-[50px] rounded-2xl pl-7 pr-7 flex flex-row items-center gap-5"
			{...children}>

		</div>
	)
}

export default InputWrapper