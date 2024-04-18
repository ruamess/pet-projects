

const InputWrapper = ({ ...children }) => {

	return (
		<input
			{...children}
			className="container p-2 rounded-lg bg-gray-700 border border-gray-500
			 outline-none focus:bg-gray-600 hover:bg-gray-600 duration-500"/>
	)
}

export default InputWrapper