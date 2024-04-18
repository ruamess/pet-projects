import { useState } from "react"
import axios from 'axios';


const SignIn = () => {

	const [fullName, setFullName] = useState('')
	const [password, setPassword] = useState('')


	const Auth = () => {
		axios.post('http://localhost:5000/auth', {
			full_name: fullName,
			password: password
		})
			.then(response => {
				console.log(response.data);
			})
			.catch(error => {
				console.error(error);
			});
	}



	return (
		<div className="container sm:w-[550px] bg-gray-700 h-[400px] p-10 rounded-lg flex flex-col gap-16">
			<div className="text-center">
				<h1 className="text-4xl">Авторизация</h1>
			</div>
			<div className="flex flex-col gap-10 items-center justify-center">
				<div className="flex flex-col gap-5 items-center justify-center container">
					<input
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
						placeholder="ФИО"
						type="text"
						className="container p-2 rounded-lg bg-gray-700 border 
					border-gray-500 outline-none focus:bg-gray-600 hover:bg-gray-600" />
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Пароль"
						type="password"
						className="container p-2 rounded-lg bg-gray-700 border 
					border-gray-500 outline-none focus:bg-gray-600 hover:bg-gray-600" />
				</div>
				<div className="flex justify-center">
					<button
						onClick={() => Auth()}
						className="bg-gray-500 p-2 rounded-lg hover:bg-gray-400 duration-500">
						Продолжить
					</button>
				</div>
			</div>
		</div>
	)
}

export default SignIn