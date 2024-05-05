
import ProgressText from "./ProgressText"
import ProgressLine from "./ProgressLine"
import { useTranslation } from "react-i18next"



const Progress = ({ goal, days }) => {

	const { t } = useTranslation()

	const progress = Math.round((days / goal) * 100)

	return (
		<div className="flex flex-col gap-5 w-[340px]">
			<ProgressText progress={progress} text={t('progress')} />
			<ProgressLine progress={progress} />
		</div>
	)
}

export default Progress