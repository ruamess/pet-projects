import { observer } from "mobx-react-lite"
import NoHabitInfo from "./NoHabitInfo"
import RemoveHabit from "./RemoveHabit"
import store from "@/modules/store"
import { CommentCreator, CommentDisplay } from "../../comments"
import { Header } from "@/modules/header"
import { useTranslation } from "react-i18next"



const HabitInfo = observer(() => {

	const { t } = useTranslation()
	const checkData = store?.habitList[store?.habitIndex]?.days?.length
	const habit = store?.habitList[store?.habitIndex]

	return (
		<div className="w-screen max-h-screen overflow-y-auto scrollBar flex-wrap ">

			{
				checkData != undefined || checkData > 0
					?
					<div className="w-full h-fit p-20 flex flex-col gap-20">
						<Header title={habit.title} goal={habit.goal} days={habit.days?.length} />
						<main className="flex flex-col gap-5 ">
							{habit.days?.map((el, index) => <CommentDisplay key={index} index={index} text={el.text} />)}
							{habit.days.length >= habit.goal
								?
								<RemoveHabit text={t('removeHabit')} />
								:
								habit.goal >= 20
									?
									<div>
										<CommentCreator index={habit.days?.length} />
										<RemoveHabit text={t('removeHabit')} />
									</div>
									:
									<CommentCreator index={habit.days?.length} />
							}
						</main>
					</div>
					:
					<NoHabitInfo text={t('noHabitInfo')} />
			}


		</div>
	)
})

export default HabitInfo