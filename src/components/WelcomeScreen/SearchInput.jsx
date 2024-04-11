import Spinner from "./Spinner"
import { observer } from "mobx-react-lite"
import store from "../../store"
import { action } from 'mobx';

const SearchInput = observer(() => {

	const setInputValue = action((event) => {
		store.inputValue = event.target.value;
		store.searchCity()
	})

	return (
		<div className="flex items-center mt-8 bg-gray-600 w-80 h-16 pl-5 pr-5 rounded-lg">
			<input className="bg-gray-600 w-60 h-16 rounded-lg focus:outline-none" type="text" placeholder="Search location" value={store.inputValue} onChange={setInputValue} />
			{store.spinnerVisibility ? <Spinner /> : null}
		</div>
	)
})

export default SearchInput