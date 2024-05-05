import store from "@/modules/store"

const SettingsButton = () => {

	return (
		<button className=" hover:opacity-50 duration-500" onClick={() => store.setSettingsVisibility()}>
			<img src="/Settings.svg"
				alt="settings" className="min-w-[60px]" />
		</button>
	)
}

export default SettingsButton