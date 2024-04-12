import { observer } from "mobx-react-lite"
import DetailedTodayInfo from "../components/WeatherScreen/DetailedTodayInfo"
import TodayInfo from "../components/WeatherScreen/TodayInfo"
import WeekWeatherList from "../components/WeatherScreen/WeekWeatherList"


const WeatherScreen = observer(() => {



	console.log(JSON.parse(localStorage.getItem('cityInfo')))
	return (
		<div className="p-2 gap-2 flex flex-col items-center w-screen font-nunito text-gray-100">
			<TodayInfo />
			<DetailedTodayInfo />
			<WeekWeatherList />
		</div >
	)
})

export default WeatherScreen