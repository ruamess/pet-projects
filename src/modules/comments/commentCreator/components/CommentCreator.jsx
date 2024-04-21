import CreateButton from "./CreateButton"
import TextInput from "./TextInput"
import Day from "../../components/Day"
import CommentWrapper from "../../components/CommentWrapper"
import { observer } from "mobx-react-lite"

const CommentCreator = observer(({ index }) => {


	return (
		<CommentWrapper>
			<Day index={index} />
			<TextInput />
			<CreateButton />
		</CommentWrapper>
	)
})

export default CommentCreator

