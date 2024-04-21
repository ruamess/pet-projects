import { observer } from "mobx-react-lite"
import Header from "./header/Header"
import NoHabbitInfo from "./NoHabbitInfo"
import RemoveHabbit from "./RemoveHabbit"
import store from "@/modules/store"
import { CommentCreator, CommentDisplay } from "../../comments"



const HabbitInfo = observer(() => {

	const checkData = store?.habbitList[store?.habbitIndex]?.days?.length
	const habbit = store?.habbitList[store?.habbitIndex]

	return (
		<div className="w-screen ">

			{
				checkData != undefined || checkData > 0
					?
					<div className="w-full h-fit p-20 flex flex-col gap-20">
						<Header title={habbit.title} goal={habbit.goal} days={habbit.days?.length} />
						<main className="flex flex-col gap-5">
							{habbit.days?.map((el, index) => <CommentDisplay key={index} index={index} text={el.text} />)}
							{habbit.days.length < habbit.goal
								?
								<CommentCreator index={habbit.days?.length} />
								:
								<RemoveHabbit />
							}
						</main>
					</div>
					:
					<NoHabbitInfo />
			}


		</div>
	)
})

export default HabbitInfo