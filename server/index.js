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

app.post('/logIn', async (req, res) => {
	try {
		const { login, password } = req.body
		if (!login || !password) {
			return res.status(400).json('Заполните поля')
		}
		const check = await User.findOne({ where: { login } })
		if (check) {
			if (check.password != password) {
				return res.status(400).json('Не верный пароль')
			}
		}
		else if (!check) {
			return res.status(400).json('Пользователь не найден')
		}
		return res.status(201).json({ full_name: check.full_name, login, password })
	} catch (e) {
		console.log(e)
		return res.status(400).json('Непредвиденная ошибка')
	}
})

app.post('/signIn', async (req, res) => {
	try {
		const { login, full_name, password } = req.body
		if (!full_name || !password || !login) {
			return res.status(400).json('Заполните все поля')
		}
		const check = await User.findOne({ where: { login } })
		if (check) {
			return res.status(400).json('Пользователь с таким логином уже существует')
		}
		await User.create({ full_name, login, password })
		return res.status(201).json({ full_name, login, password })
	} catch (e) {
		console.log(e)
		return res.status(400).json('Непредвиденная ошибка')
	}
})

app.post('/addClient', async (req, res) => {
	try {
		const { surname, name, patronymic, birthday, IIN, rp_full_name, status } = req.body
		if (!surname || !name || !patronymic || !birthday || !ITN || !rp_full_name) {
			return res.status(400).json('Заполните все поля')
		}
		const check = await Client.findOne({ where: { IIN } })
		if (check) return res.status(400).json('Клиент с таким ИНН уже существует.')
		await Client.create({ surname, name, patronymic, birthday, IIN, rp_full_name, status })
		return res.status(200).json({ surname, name, patronymic, birthday, IIN, rp_full_name, status })
	} catch (e) {
		console.log(e)
		return res.status(400).json('Непредвиденная ошибка')
	}
})

app.get('/getClients', async (req, res) => {
	try {
		const { full_name } = req.query
		const clients = await Client.findAll({ where: { rp_full_name: full_name } })
		return res.status(200).json(clients)
	} catch (e) {
		console.log(e)
		return res.status(400).json('Непредвиденная ошибка')
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






