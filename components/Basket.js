'use client'

import OrderButton from "./OrderButton"
import PhoneInput from "./PhoneInput"

export default function Basket() {

	return (
		<div className="flex justify-center">
			<main className="container md:w-[708px] h-contain bg-acc2 rounded-lg text-black p-3 flex flex-col gap-3">
				<div>
					<span className="text-[36px]">Добавленные товары</span>
				</div>
				<div className="font-medium">
					<div className="text-xl flex gap-14">
						<div>
							<span>товар 1</span>
						</div>
						<div className="flex gap-8">
							<span>x3</span>
							<span>44$</span>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap sm:flex-nowrap gap-5 ">
					<PhoneInput />
					<OrderButton />
				</div>
			</main>
		</div>
	)
}