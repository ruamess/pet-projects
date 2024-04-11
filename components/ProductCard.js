import Image from "next/image"
import ProductButton from "./ProductButton"

export default function ProductCard({ title, text, price }) {

	return (
		<div className="w-[301px] min-h-[801px] h-fit bg-acc2 p-2 flex flex-col justify-between rounded-lg text-black">
			<div>
				<div>
					<Image src="/Monkey.svg" width={400} height={1} alt="Обезяна" />
				</div>
				<div className="flex items-center justify-center mt-5">
					<span className="font-medium text-2xl">{title}</span>
				</div>
				<div className="break-words mt-5">
					<span className="text-xl">{text}</span>
				</div>
			</div>
			<div className="flex flex-col justify-end">
				<div className="flex items-end justify-center m-5">
					<span className="text-3xl font-medium">{price}$</span>
				</div>
				<ProductButton />
			</div>
		</div>
	)
}