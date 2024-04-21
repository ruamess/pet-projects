import CreateButton from "@/components/CreateButton"
import TextInput from "./TextInput"
import Day from "../../components/Day"
import CommentWrapper from "../../components/CommentWrapper"
import { observer } from "mobx-react-lite"
import { createComment } from "../helpers"


const CommentCreator = observer(({ index }) => {


	return (
		<CommentWrapper>
			<Day index={index} />
			<TextInput />
			<CreateButton onClick={() => createComment()} text='Ok' />
		</CommentWrapper>
	)
})

export default CommentCreator

