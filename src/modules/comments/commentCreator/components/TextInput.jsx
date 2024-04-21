import store from "@/modules/store"
import { observer } from "mobx-react-lite"
import { inputChange, onPressEnter } from "../helpers"
import CustomInput from "@/components/input/CustomInput"
import Icon from "./Icon"
import InputWrapper from "@/components/input/InputWrapper"

const TextInput = observer(() => {




	return (
		<div className="w-full ">
			<InputWrapper>
				<Icon />
				<CustomInput placeholder="Comment" value={store.inputValue} onKeyDown={onPressEnter} onChange={inputChange} />
			</InputWrapper >
		</div>
	)
})
export default TextInput