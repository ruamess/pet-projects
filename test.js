const userAnswer = 'https://test.com/'

const checkWordPressSite = (url) => {

	const refactoredUrl = url.split('/').splice(0, 3).join('/')

	fetch(`${refactoredUrl}/wp-admin`)
		.then(response => {
			if (response.status == 200) console.log('Сайт сделан при помощи WordPress')
			else console.log('Сайт сделан не при помощи WordPress')
		})
		.catch(error => {
			console.error('Сайт не найден')
			console.error(error)
		})
}

checkWordPressSite(userAnswer)
