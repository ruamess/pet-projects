

const SignIn = () => {



	return (
		<div className="container sm:w-[550px] bg-gray-700 h-[400px] p-10 rounded-lg flex flex-col gap-16">
			<div className="text-center">
				<h1 className="text-4xl">Регистрация</h1>
			</div>
			<div className="flex flex-col gap-5 items-center justify-center">
				<div className="flex flex-col gap-5 items-center justify-center container">
					<input
						placeholder="ФИО"
						type="text"
						className="container p-2 rounded-lg bg-gray-700 border 
					border-gray-500 outline-none focus:bg-gray-600 hover:bg-gray-600" />
					<input
						placeholder="Пароль"
						type="password"
						className="container p-2 rounded-lg bg-gray-700 border 
					border-gray-500 outline-none focus:bg-gray-600 hover:bg-gray-600" />
				</div>
				<div>
					<span>Войти?</span>
				</div>
				<div className="flex justify-center">
					<button className="bg-gray-500 p-2 rounded-lg hover:bg-gray-400 duration-500">Продолжить</button>
				</div>
			</div>
		</div>
	)
}

export default SignIn