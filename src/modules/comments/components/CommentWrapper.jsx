

const CommentWrapper = ({ ...children }) => {

	return (
		<div className="max-w-screen h-16 bg-ui rounded-2xl flex flex-row items-center pr-8 gap-8"
			{...children} />
	)
}

export default CommentWrapper