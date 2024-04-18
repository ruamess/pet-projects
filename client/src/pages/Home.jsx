
import axios from "axios"
import { ClientList } from "../modules/clientList"


const Home = () => {

	axios.get()

	return (
		<div className="w-[700px] bg-gray-700 h-[700px] p-2 flex flex-col items-center gap-10">
			<div className="text-center">
				<span className="text-3xl">Victor, ваши клиенты</span>
			</div>
			<ClientList />
		</div>
	)
}

export default Home