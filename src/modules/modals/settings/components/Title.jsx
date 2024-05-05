import { useTranslation } from 'react-i18next';

const Title = () => {

	const { t } = useTranslation()

	return (
		<div className="flex justify-center">
			<span className="text-4xl">
				{t('settings')}
			</span>
		</div>
	)
}

export default Title