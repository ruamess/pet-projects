import { observer } from "mobx-react-lite"



const HabbitButtonWrapper = observer(({ image, func }) => {


	return (
		<button className="w-[70px] h-[70px] rounded-2xl bg-acc2 flex justify-center 
				items-center hover:bg-purple duration-500"
			onClick={func}
		>
			<img src={`/${image}.svg`} alt={`${image}`} width={35} />
		</button >
	)
})

export default HabbitButtonWrapper