
const WeekWeatherItem = ({ temp_max, temp_min, icon, day }) => {



  return (
    <div className="flex flex-col items-center w-10 ">
      <div>
        <span className="text-gray-200">{day}</span>
      </div>
      <div className="w-20 h-20">
        <img src={`./weather/${icon}.svg`} />
      </div>
      <div className="flex flex-col">
        <span className="text-gray-100">{Math.round(temp_max)}°c</span>
        <span className="text-gray-400">{Math.round(temp_min)}°c</span>
      </div>
    </div>
  )
}

export default WeekWeatherItem