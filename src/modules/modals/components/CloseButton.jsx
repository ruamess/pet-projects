
const CloseButton = ({ ...children }) => {

	return (
		<div className="absolute right-8">
			<button className="hover:opacity-50 duration-500" {...children}>
				<img src="/Cross.svg" className="w-8" />
			</button>
		</div>
	)
}

export default CloseButton