import { observer } from "mobx-react-lite"


const Setting = observer(({ title, ...children }) => {

	return (
		<div className="bg-[#F3F6FD] dark:bg-acc2 flex items-between justify-around container h-20 rounded-lg">
			<div className="flex justify-center items-center">
				<span>{title}</span>
			</div>
			<div className="flex items-center gap-1">
				<button className="border-black dark:border-white border rounded-lg p-1 hover:opacity-50 duration-500 h-fit"
					{...children}>
				</button>
			</div>
		</div>
	)
})

export default Setting