

const CustomInput = ({ ...children }) => {

	return (
		<input className="bg-white dark:bg-acc focus:outline-none w-full" {...children} />
	)
}

export default CustomInput