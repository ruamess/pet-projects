import Image from "next/image"


export default function Loader() {

	return (
		<div >
			<Image src="/Loader.svg" alt="Загрузка" width={20} height={20} className="animate-spin" />
		</div>
	)
}