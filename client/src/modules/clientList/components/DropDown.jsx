import { useState } from "react"
import Variant from "./Variant"

const DropDown = ({ status }) => {

	const [dropDownVisible, setDropdownVisible] = useState(false)

	return (
		<div className="flex items-center relative">
			<button
				onClick={() => dropDownVisible ? setDropdownVisible(false) : setDropdownVisible(true)}
				className="bg-gray-500 hover:bg-gray-400 duration-500 w-28 p-1"
			>
				{status}
			</button>
			{dropDownVisible
				?
				<div className="flex-col absolute top-8 duration-500">
					<Variant text={'Отказ'} />
					<Variant text={'В работе'} />
					<Variant text={'Сделка закрыта'} />
				</div>
				: null
			}
		</div>

	)
}

export default DropDown