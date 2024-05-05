import DeleteButton from "./DeleteButton"
import CommentText from "./CommentText"
import Day from "../../components/Day"
import CommentWrapper from "../../components/CommentWrapper"
import { useTranslation } from "react-i18next"


const CommentDisplay = ({ index, text }) => {

	const { t } = useTranslation()

	return (
		<CommentWrapper >
			<Day index={index} text={t('day')} />
			<CommentText text={text} />
			<DeleteButton index={index} />
		</CommentWrapper >
	)
}

export default CommentDisplay
