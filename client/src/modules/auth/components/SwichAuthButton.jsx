

const SwichAuthButton = ({ inside, ...children }) => {

	return (
		<div>
			<button
				{...children}
				className="text-blue-500 hover:text-blue-300 duration-500">
				{inside}


			</button>
		</div>
	)
}

export default SwichAuthButton