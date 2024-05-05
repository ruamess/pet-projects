

const ModalWrapper = ({ ...children }) => {

	return (
		<div className="bg-black fixed top-0 left-0 flex justify-center items-center w-full h-full bg-opacity-20 z-50">
			<div className="bg-white dark:bg-ui p-8 rounded-3xl w-[580px] h-[480px] relative" {...children} />
		</div>
	)
}

export default ModalWrapper