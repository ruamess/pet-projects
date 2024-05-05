import { observer } from "mobx-react-lite"
import store from "@/modules/store"


const Icon = observer(() => {



	return (
		<img src={`/Comment${store.theme == 'light' ? '2' : ''}.svg`} alt="Comment" className="w-8" />
	)
})

export default Icon