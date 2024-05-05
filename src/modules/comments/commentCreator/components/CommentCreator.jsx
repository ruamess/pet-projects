import CreateButton from "@/components/CreateButton"
import TextInput from "./TextInput"
import Day from "../../components/Day"
import CommentWrapper from "../../components/CommentWrapper"
import { observer } from "mobx-react-lite"
import { createComment } from "../helpers"
import { useTranslation } from "react-i18next"


const CommentCreator = observer(({ index }) => {

	const { t } = useTranslation()

	return (
		<CommentWrapper>
			<Day index={index} text={t('day')} />
			<TextInput placeholder={t('comment')} />
			<CreateButton onClick={() => createComment()} text={t('ok')} />
		</CommentWrapper>
	)
})

export default CommentCreator

