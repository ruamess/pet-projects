import { useTranslation } from "react-i18next"


const Completed = () => {

	const { t } = useTranslation()

	return (
		<div className="flex items-center gap-4">
			<img src="/CheckMark.svg" className="w-14" />
			<span className="text-3xl">
				{t('done')}
			</span>
		</div>
	)
}

export default Completed