import { observer } from "mobx-react-lite"
import NoHabbitInfo from "./NoHabbitInfo"
import RemoveHabbit from "./RemoveHabbit"
import store from "@/modules/store"
import { CommentCreator, CommentDisplay } from "../../comments"
import { Header } from "@/modules/header"



const HabbitInfo = observer(() => {

	const checkData = store?.habbitList[store?.habbitIndex]?.days?.length
	const habbit = store?.habbitList[store?.habbitIndex]

	return (
		<div className="w-screen max-h-screen overflow-y-auto scrollBar ">

			{
				checkData != undefined || checkData > 0
					?
					<div className="w-full h-fit p-20 flex flex-col gap-20">
						<Header title={habbit.title} goal={habbit.goal} days={habbit.days?.length} />
						<main className="flex flex-col gap-5 ">
							{habbit.days?.map((el, index) => <CommentDisplay key={index} index={index} text={el.text} />)}
							{habbit.days.length >= habbit.goal
								?
								<RemoveHabbit />
								:
								habbit.goal >= 20
									?
									<div>
										<CommentCreator index={habbit.days?.length} />
										<RemoveHabbit />
									</div>
									:
									<CommentCreator index={habbit.days?.length} />
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