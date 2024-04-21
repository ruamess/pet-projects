// import { observer } from "mobx-react-lite"
// import store from "@/modules/store"
// import { switchHabbit } from "../helpers"

// const HabbitButton = observer(({ el, index }) => {


// 	return (
// 		<>
// 			{el.image ?
// 				<button className="w-[75px] h-[75px] rounded-2xl bg-acc2 flex justify-center
// 				items-center hover:bg-purple duration-500"
// 					onClick={() => switchHabbit(el.id)}
// 					style={index == store.habbitIndex ? { backgroundColor: '#5051F9' } : null}
// 				>
// 					<img src={`/${el.image}.svg`} alt={`${el.image}`} width={40} />

// 					{el.days.length < el.goal
// 						?
// 						null
// 						:
// 						<img src='/CheckMark.svg' className="w-10 absolute mt-12 ml-20" />
// 					}
// 				</button >
// 				: null
// 			}
// 		</>

// 	)
// })

// export default HabbitButton