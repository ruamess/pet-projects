

const CustomInput = ({ ...children }) => {

	return (
		<input placeholder="Comment" className="focus:outline-none w-full bg-acc" {...children} />
	)
}

export default CustomInput