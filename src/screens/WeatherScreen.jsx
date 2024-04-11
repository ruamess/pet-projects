

const WeatherScreen = () => {



	return (
		<div className="p-2 gap-2 flex flex-col items-center w-screen font-nunito text-gray-100">

			<div className="w-full md:max-w-screen-sm bg-gray-800 rounded-lg p-3">

				<div className="gap-3 flex flex-row">
					<button className="bg-gray-600 w-20 h-16 flex items-center justify-center rounded-lg hover:bg-gray-400 active:bg-gray-500 hover:transition-all duration-1000 cursor-pointer">
						<img src="./Logo.svg" />
					</button>
					<div className="bg-gray-600 text-gray-400 w-[100%] h-16 pl-6 pr-6 flex items-center rounded-lg">
						Город
					</div>
				</div>

				<div className="w-full h-[330px] rounded-lg mt-3 p-6 flex flex-col justify-between" style={{ backgroundImage: "url('/skyes/ClearSky.svg')" }}>

					<div>
						<div className="flex justify-between">
							<span className="text-lg font-bold tracking-wide">Город</span>
							<span className="font-bold text-nunito" >21:32</span>
						</div>
						<div className="text-s">
							4 апреля 2024 года
						</div>
					</div>

					<div className="flex flex-row justify-between">
						<div className="flex flex-col justify-end">
							<span className="text-5xl font-bold mb-4">26°c</span>
							<span className="font-bold">26°c / 32°c</span>
							<span className=" text-sm">Мало облаков</span>
						</div>

						<div >
							<img src="/days/ClearDay.svg" />
						</div>
					</div>
				</div>
			</div>


			<div className="w-full md:max-w-screen-sm bg-gray-800 rounded-lg p-3 font-bold">

				<div className="h-16 flex flex-row justify-between items-center border-b-[1px] border-gray-500">
					<div className="flex flex-row items-center gap-2">
						<img src="/infoIcons/Thermal.svg" />
						<span className="text-gray-200">Thermal sensation</span>
					</div>
					<div>
						<span>26°c</span>
					</div>
				</div>

				<div className="h-16 flex flex-row justify-between items-center border-b-[1px] border-gray-500">
					<div className="flex flex-row items-center gap-2">
						<img src="/infoIcons/Rain.svg" />
						<span className="text-gray-200">Probability of rain</span>
					</div>
					<div>
						<span>0%</span>
					</div>
				</div>

				<div className="h-16 flex flex-row justify-between items-center border-b-[1px] border-gray-500">
					<div className="flex flex-row items-center gap-2">
						<img src="/infoIcons/Wind.svg" />
						<span className="text-gray-200">Wind speed</span>
					</div>
					<div>
						<span>8 km/h</span>
					</div>
				</div>

				<div className="h-16 flex flex-row justify-between items-center border-b-[1px] border-gray-500">
					<div className="flex flex-row items-center gap-2">
						<img src="/infoIcons/Air.svg" />
						<span className="text-gray-200">Air humidity</span>
					</div>
					<div>
						<span>40%</span>
					</div>
				</div>

				<div className="h-16 flex flex-row justify-between items-center">
					<div className="flex flex-row items-center gap-2">
						<img src="/infoIcons/UV.svg" />
						<span className="text-gray-200">UV Index</span>
					</div>
					<div>
						<span>5</span>
					</div>
				</div>
			</div>


			<div className="w-full md:max-w-screen-sm bg-gray-800 rounded-lg p-6 font-bold flex flex-row justify-around">

				<div className="flex flex-col items-center w-10 ">
					<div>
						<span className="text-gray-200">Пон</span>
					</div>
					<div className="w-20 h-20">
						<img src="/days/ClearDay.svg" />
					</div>
					<div className="flex flex-col">
						<span className="text-gray-100" >32°c</span>
						<span className="text-gray-400">26°c</span>
					</div>
				</div>

				<div className="flex flex-col items-center w-10 ">
					<div>
						<span className="text-gray-200">Пон</span>
					</div>
					<div className="w-20 h-20">
						<img src="/days/ClearDay.svg" />
					</div>
					<div className="flex flex-col">
						<span className="text-gray-100" >32°c</span>
						<span className="text-gray-400">26°c</span>
					</div>
				</div>

				<div className="flex flex-col items-center w-10 ">
					<div>
						<span className="text-gray-200">Пон</span>
					</div>
					<div className="w-20 h-20">
						<img src="/days/ClearDay.svg" />
					</div>
					<div className="flex flex-col">
						<span className="text-gray-100" >32°c</span>
						<span className="text-gray-400">26°c</span>
					</div>
				</div>

				<div className="flex flex-col items-center w-10 ">
					<div>
						<span className="text-gray-200">Пон</span>
					</div>
					<div className="w-20 h-20">
						<img src="/days/ClearDay.svg" />
					</div>
					<div className="flex flex-col">
						<span className="text-gray-100" >32°c</span>
						<span className="text-gray-400">26°c</span>
					</div>
				</div>

				<div className="flex flex-col items-center w-10 ">
					<div>
						<span className="text-gray-200">Пон</span>
					</div>
					<div className="w-20 h-20">
						<img src="/days/ClearDay.svg" />
					</div>
					<div className="flex flex-col">
						<span className="text-gray-100" >32°c</span>
						<span className="text-gray-400">26°c</span>
					</div>
				</div>



			</div>
		</div >
	)
}

export default WeatherScreen