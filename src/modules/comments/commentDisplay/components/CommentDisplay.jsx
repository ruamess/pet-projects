import DeleteButton from "./DeleteButton"
import CommentText from "./CommentText"
import Day from "../../components/Day"
import CommentWrapper from "../../components/CommentWrapper"

const CommentDisplay = ({ index, text }) => {

	return (
		<CommentWrapper>
			<Day index={index} />
			<CommentText text={text} />
			<DeleteButton index={index} />
		</CommentWrapper >
	)
}

export default CommentDisplay
