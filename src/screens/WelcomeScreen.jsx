import WelcomeText from '../components/WelcomeScreen/WelcomeText'
import SearchInput from '../components/WelcomeScreen/SearchInput'
import CitiesList from '../components/WelcomeScreen/CitiesList'
import Logo from '../components/WelcomeScreen/Logo'


const WelcomeScreen = () => {

	// let [inputValue, setInputValue] = useState('')
	// let [spinnerVisibility, setSpinnerVisibility] = useState(false)

	// function InputChange(event) {
	// 	const text = event.target.value;
	// 	// console.log(event.target.value)
	// 	setInputValue(text);
	// 	SearchCity(event.target.value)
	// }


	return (
		<div className="text-white font-nunito flex flex-col items-center" >

			<Logo />

			<div className="mt-40 flex flex-col items-center">
				<WelcomeText />
				<SearchInput />
				<CitiesList />
			</div>

		</div>
	)
}

export default WelcomeScreen