

const CommentWrapper = ({ ...children }) => {

	return (
		<div className="bg-white dark:bg-ui max-w-screen 
		h-fit md:h-16  rounded-2xl flex flex-row items-center pr-8 gap-8"
			{...children} />
	)
}

export default CommentWrapper