
import ProgressText from "./ProgressText"
import ProgressLine from "./ProgressLine"


export default function Progress({ goal, days }) {

	const progress = Math.round((days / goal) * 100)

	return (
		<div className="flex flex-col gap-5 w-[340px]">
			<ProgressText progress={progress} />
			<ProgressLine progress={progress} />
		</div>
	)
}