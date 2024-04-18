import ClientInfo from "./ClientInfo"
import DropDown from "./DropDown"

const Client = ({ fullName, IIN, birthday, status }) => {

	return (
		<div className="flex gap-10 border p-2">
			<ClientInfo fullName={fullName} IIN={IIN} birthday={birthday} />
			<DropDown status={status} />
		</div>
	)
}

export default Client