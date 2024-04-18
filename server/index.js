const express = require('express')
require('dotenv').config()
const sequelize = require('./db')
const cors = require('cors')
const { User, Client } = require('./models')
const { where } = require('sequelize')
const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

app.post('/signIn', async (req, res) => {
	try {
		const { full_name, password } = req.body
		if (!full_name || !password) return res.status(400).json('Введите полные данные')
		const check = await User.findOne({ where: { full_name } })
		if (check) return res.status(400).json('Пользователь с там ФИО уже существует')

		await User.create({ full_name, password })
		return res.status(201).json({ full_name, password })
	} catch (e) {
		console.log(e)
		return res.status(400).json('Error')
	}
})

app.post('/logIn', async (req, res) => {
	try {
		const { full_name, password } = req.body
		const check = await User.findOne({ where: { full_name } })
		if (!check) return res.status(400).json('Пользователя не существует')
		if (check.password != password) return res.status(400).json('Неверный пароль')
		return res.status(200).json({ full_name, password })
	} catch (e) {
		console.log(e)
		return res.status(400).json('Error')
	}
})

app.post('/addClient', async (req, res) => {
	try {
		const { surname, name, patronymic, birthday, ITN, rp_full_name, status } = req.body
		if (!surname || !name || !patronymic || !birthday || !ITN || !rp_full_name) {
			return res.status(400).json('Заполните все поля')
		}
		const check = await Client.findOne({ where: { ITN } })
		if (check) return res.status(400).json('Клиент с таким ИНН уже существует.')
		await Client.create({ surname, name, patronymic, birthday, ITN, rp_full_name, status })
		return res.status(200).json({ surname, name, patronymic, birthday, ITN, rp_full_name, status })
	} catch (e) {
		console.log(e)
		return res.status(400).json('Error')
	}
})

app.get('/getClients', async (req, res) => {
	try {
		const { full_name } = req.body
		const clients = await Client.findAll({ where: { rp_full_name: full_name } })
		return res.status(200).json(clients)
	} catch (e) {
		console.log(e)
		return res.status(400).json('Error')
	}
})


const start = async () => {
	try {
		await sequelize.authenticate(),
			await sequelize.sync(),
			app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))
	} catch (e) {
		console.log(e)

	}
}


start()






