import { useState } from "react"
import ClientList from "../modules/clientList/components/ClientList"
import axios from "axios"


const Home = () => {

	axios.get()

	return (
		<div className="w-[700px] bg-gray-700 h-[700px] p-5 flex flex-col items-center gap-10">
			<div className="text-center">
				<span className="text-3xl">Victor, ваши клиенты</span>
			</div>
			<ClientList />
		</div>
	)
}

export default Home