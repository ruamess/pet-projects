import store from "../../store"


const CityItem = ({ city }) => {

	return (
		<button onClick={() => store.getWeatherInfo(city)} className="bg-gray-500 hover:bg-gray-400 active:bg-gray-500 hover:transition-all duration-1000 cursor-pointer w-80 h-16 pl-5 pr-5 rounded-lg flex items-center">
			{city}
		</button>)

}

export default CityItem