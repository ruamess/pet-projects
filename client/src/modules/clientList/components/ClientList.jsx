import Client from "./Client"
import DropDown from "./DropDown"


const ClientList = () => {

	return (
		<div>
			<ui>
				<li className="flex gap-10">
					<Client fullName={'Андрей ПИдор Иванович'} IIN={12124124124} birthday={'01.03.1991'} />
					<DropDown status={'Не работает'} />
				</li>
			</ui>
		</div>
	)
}

export default ClientList