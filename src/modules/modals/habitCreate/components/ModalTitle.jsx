import { useTranslation } from "react-i18next"


const ModalTitle = () => {

	const { t } = useTranslation()

	return (
		<div className="flex justify-center">
			<span className="text-4xl">
				{t('newHabit')}
			</span>
		</div>
	)
}

export default ModalTitle