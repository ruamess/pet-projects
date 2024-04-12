import { useNavigate } from 'react-router-dom';
import store from "../../store"

const API_KEY = ""


const CityItem = ({ city }) => {

	function Make5Days(arr) {
		const uniqueValues = [arr[0]]

		for (let i = 1; i < arr.length; i++) {
			const currentDate = arr[i].dt_txt.split(' ')[0];
			const prevDate = arr[i - 1].dt_txt.split(' ')[0];
			if (currentDate !== prevDate) {
				uniqueValues.push(arr[i]);
			}
		}

		return uniqueValues
	}

	const navigate = useNavigate();

	const getWeatherInfo = (city) => {
		localStorage.clear()
		store.inputValue = city
		store.spinnerVisible()
		fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&cnt=30&units=metric`)
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then(data => {
				let dataList = data
				dataList.list = Make5Days(dataList.list)
				localStorage.setItem('cityInfo', JSON.stringify(dataList))
				console.log(dataList)
				store.spinnerHidden()
				navigate('/info');
				store.foundCities = []
			})
			.catch(error => {
				console.error('There was a problem with the fetch operation:', error);
			})
	}

	return (
		<button onClick={() => getWeatherInfo(city)} className="bg-gray-500 hover:bg-gray-400 active:bg-gray-500 hover:transition-all duration-1000 cursor-pointer w-80 h-16 pl-5 pr-5 rounded-lg flex items-center">
			{city}
		</button>)

}

export default CityItem