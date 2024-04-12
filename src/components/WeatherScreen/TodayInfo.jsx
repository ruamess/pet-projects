import { NavLink } from 'react-router-dom'
import store from '../../store'

const TodayInfo = () => {



	const data = JSON.parse(localStorage.getItem('cityInfo'))
	let fullDate = store.getCurrentFullDate(data.city.timezone)
	let currentDate = store.getCurrentFullDate(data.city.timezone).slice(0, fullDate.lastIndexOf('at'))
	let currentTime = store.getCurrentFullDate(data.city.timezone).split(' ').reverse()[0].slice(0, 5)

	return (

		<div className="w-full md:max-w-screen-sm bg-gray-800 rounded-lg p-3">

			<div className="gap-3 flex flex-row">
				<NavLink to={"/"} className="bg-gray-600 w-20 h-16 flex items-center justify-center rounded-lg hover:bg-gray-400 active:bg-gray-500 hover:transition-all duration-1000 cursor-pointer">
					<img src="./Logo.svg" />
				</NavLink>
				<div className="bg-gray-600 text-gray-400 w-[100%] h-16 pl-6 pr-6 flex items-center rounded-lg">
					{data.city.name}
				</div>
			</div>

			<div className="w-full h-[330px] rounded-lg mt-3 p-6 flex flex-col justify-between" style={{ backgroundImage: `url(./background/${data.list[0].weather[0].icon}.svg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

				<div>
					<div className="flex justify-between">
						<span className="text-lg font-bold tracking-wide">
							{data.city.name}
						</span>
						<span className="font-bold text-nunito" >
							{currentTime}
						</span>
					</div>
					<div className="text-s">
						{currentDate}
					</div>
				</div>

				<div className="flex flex-row justify-between">
					<div className="flex flex-col justify-end">
						<span className="text-5xl font-bold mb-4">
							{Math.round(data.list[0].main.temp)}°c
						</span>
						<span className="font-bold">
							{Math.round(data.list[0].main.temp_max)}°c / {Math.round(data.list[0].main.temp_min)}°c</span>
						<span className=" text-sm">{data.list[0].weather[0].main}</span>
					</div>

					<div >
						<img src={`./weather/${data.list[0].weather[0].icon}.svg`} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default TodayInfo