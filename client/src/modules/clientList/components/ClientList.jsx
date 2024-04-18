import Client from "./Client"
import DropDown from "./DropDown"


const ClientList = () => {

	return (
		<div className="flex flex-col gap-5">
			<Client fullName='Антон Палыч Чехов' IIN={112344111111231} birthday='10.02.1980' status='Не работает' />
			<Client fullName='Антон Палыч Чехов' IIN={112344111111231} birthday='10.02.1980' status='Не работает' />
			<Client fullName='Антон Палыч Чехов' IIN={112344111111231} birthday='10.02.1980' status='Не работает' />
			<Client fullName='Антон Палыч Чехов' IIN={112344111111231} birthday='10.02.1980' status='Не работает' />
		</div>
	)
}

export default ClientList