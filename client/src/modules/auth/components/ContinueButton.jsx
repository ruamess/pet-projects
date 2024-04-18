

const ContinueButton = ({ ...children }) => {

	return (
		<div className="flex justify-center">
			<button
				{...children}
				className="bg-gray-500 p-2 rounded-lg hover:bg-gray-400 duration-500">
				Продолжить
			</button>
		</div>
	)
}

export default ContinueButton