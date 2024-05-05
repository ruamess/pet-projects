import store from "@/modules/store"
import CloseButton from "../../components/CloseButton"
import ModalWrapper from "../../components/ModalWrapper"
import Setting from "./Setting"
import Title from "./Title"
// import { useState } from "react"
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite"


const Settings = observer(() => {
	const { t, i18n } = useTranslation()

	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang)
	}

	// const [theme, setTheme] = useState(localStorage.getItem('theme'))

	// function toggleDarkMode() {
	// 	const html = document.documentElement;
	// 	if (html.classList.contains('dark')) {
	// 		html.classList.remove('dark')
	// 		localStorage.theme = 'light'
	// 		setTheme('light')
	// 	} else {
	// 		html.classList.add('dark')
	// 		localStorage.theme = 'dark'
	// 		setTheme('dark')
	// 	}
	// }

	return (
		<ModalWrapper>

			<CloseButton onClick={() => store.setSettingsVisibility()} />
			<Title />


			<div className="flex flex-col items-center justify-center container h-full gap-10 text-2xl">

				<Setting title={t('language')} onClick={() => changeLanguage(localStorage.i18nextLng == 'ru' ? 'en' : 'ru')} >
					{t('ru')}
				</Setting>

				<Setting title={t('theme')}
					onClick={() => store.changeTheme()}>
					{store.theme == 'dark' ? t('light') : t('dark')}
				</Setting>

			</div>

		</ModalWrapper>
	)
})

export default Settings