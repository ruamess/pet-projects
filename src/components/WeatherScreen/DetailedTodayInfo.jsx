


const DetailedTodayInfo = () => {

	const data = JSON.parse(localStorage.getItem('cityInfo'))

	return (
		<div className="w-full md:max-w-screen-sm bg-gray-800 rounded-lg p-3 font-bold">

			<div className="h-16 flex flex-row justify-between items-center border-b-[1px] border-gray-500">
				<div className="flex flex-row items-center gap-2">
					<img src="/infoIcons/Thermal.svg" />
					<span className="text-gray-200">Thermal sensation</span>
				</div>
				<div>
					<span>{Math.round(data.list[0].main.feels_like)}°c</span>
				</div>
			</div>

			<div className="h-16 flex flex-row justify-between items-center border-b-[1px] border-gray-500">
				<div className="flex flex-row items-center gap-2">
					<img src="/infoIcons/Rain.svg" />
					<span className="text-gray-200">Probability of rain</span>
				</div>
				<div>
					<span>{data.list[0].clouds.all}%	</span>
				</div>
			</div>

			<div className="h-16 flex flex-row justify-between items-center border-b-[1px] border-gray-500">
				<div className="flex flex-row items-center gap-2">
					<img src="/infoIcons/Wind.svg" />
					<span className="text-gray-200">Wind speed</span>
				</div>
				<div>
					<span>{Math.round(data.list[0].wind.speed)} km/h</span>
				</div>
			</div>

			<div className="h-16 flex flex-row justify-between items-center border-b-[1px] border-gray-500">
				<div className="flex flex-row items-center gap-2">
					<img src="/infoIcons/Air.svg" />
					<span className="text-gray-200">Air humidity</span>
				</div>
				<div>
					<span>{data.list[0].main.humidity}%	</span>
				</div>
			</div>

			<div className="h-16 flex flex-row justify-between items-center">
				<div className="flex flex-row items-center gap-2">
					<img src="/infoIcons/UV.svg" />
					<span className="text-gray-200">UV Index</span>
				</div>
				<div>
					<span>Not available</span>
				</div>
			</div>
		</div>
	)
}

export default DetailedTodayInfo