import store from "../../store"
import { observer } from "mobx-react-lite"
import CityItem from "./CityItem"

const CitiesList = observer(() => {



	return (
		<div className="mt-2 flex flex-col items-center gap-0.5">
			{store.foundCities.slice(0, 4).map(el => <CityItem key={el} city={el} />)}
		</div>
	)
})

export default CitiesList