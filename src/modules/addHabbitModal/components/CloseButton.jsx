import store from "@/modules/store"

const CloseButton = () => {

	return (
		<div className="flex justify-end">
			<button onClick={() => store.updateModalVisible()} className=" hover:opacity-50 duration-500 cursor-pointer">
				<img src="/Cross.svg" className="w-8" />
			</button>
		</div>
	)
}

export default CloseButton