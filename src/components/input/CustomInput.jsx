

const CustomInput = ({ ...children }) => {

	return (
		<input className="focus:outline-none w-full bg-acc" {...children} />
	)
}

export default CustomInput