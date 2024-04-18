import { useState } from "react"
import axios from 'axios';
import InputWrapper from "./InputWrapper";
import { toast } from 'sonner'
import ContinueButton from "./ContinueButton";
import SwichAuthButton from "./SwichAuthButton";
import TypeTitle from "./TypeTitle";


const Auth = () => {

	const [isSignIn, setIsSIgnIn] = useState(false)
	const [login, setLogin] = useState('')
	const [fullName, setFullName] = useState('')
	const [password, setPassword] = useState('')


	const LogIn = () => {
		axios.post('http://localhost:5000/logIn', {
			login: login,
			password: password
		})
			.then(response => {
				console.log(response.data)
			})
			.catch(error => {
				toast(error.response.data)
				console.error(error);
			});
	}

	const SignIn = () => {
		axios.post('http://localhost:5000/signIn', {
			full_name: fullName,
			login: login,
			password: password
		})
			.then(response => {
				console.log(response.data)
				setIsSIgnIn(false)
			})
			.catch(error => {
				toast(error.response.data)
				console.error(error);
			})

	}



	return (
		<div className="container sm:w-[550px] bg-gray-700 h-[400px] p-10 rounded-lg flex flex-col gap-8">

			<TypeTitle text={isSignIn ? 'Регистрация' : 'Вход'} />

			<div className="flex flex-col gap-5 items-center justify-center">
				{isSignIn
					?
					<div className="flex flex-col gap-5 container">
						<InputWrapper
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							placeholder="ФИО"
							type="text"
						/>
						<InputWrapper
							value={login}
							onChange={(e) => setLogin(e.target.value)}
							placeholder="Логин"
							type="text"
						/>
						<InputWrapper
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Пароль"
							type="password"
						/>
					</div>
					:
					<div className="flex flex-col gap-5 container">
						<InputWrapper
							value={login}
							onChange={(e) => setLogin(e.target.value)}
							placeholder="Логин"
							type="text"
						/>
						<InputWrapper
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Пароль"
							type="password"
						/>
					</div>
				}

				<SwichAuthButton onClick={() => isSignIn ? setIsSIgnIn(false) : setIsSIgnIn(true)}
					inside={isSignIn ? 'Есть аккаунт?' : 'Нет аккаунта?'} />

				<ContinueButton onClick={() => isSignIn ? SignIn() : LogIn()} />
			</div>
		</div>
	)
}

export default Auth