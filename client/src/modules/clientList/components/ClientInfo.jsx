

const ClientInfo = ({ fullName, birthday, IIN }) => {

	return (
		<div className="flex items-center gap-6">
			<span>{fullName}</span>
			<span>{birthday}</span>
			<span>{IIN}</span>
		</div>
	)
}

export default ClientInfo