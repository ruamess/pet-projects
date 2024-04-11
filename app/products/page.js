import ProductCard from "@/components/ProductCard";

export default function page() {

	const data = [
		{
			id: 1,
			title: 'Обезяна',
			text: 'ПИЫВГщойлпйшр3птйлцпзщошйцщтпшйцощптйлоцщпшощйцлпщйшощплйщцпшойтцпльщзйцшопщтйлдьцпзойлтцьпщйзоцплтйьзцпшот',
			price: 1200
		},
		{
			id: 2,
			title: 'Обезяна',
			text: 'ПИЫВГщойлпйшр3птйлцпзщошйцщтпшйцощптйлоцщпшощйцлпщйшощплйщцпшойтцпльщзйцшопщтйлдьцпзойлтцьпщйзоцплтйьзцпшот',
			price: 1200
		},
		{
			id: 3,
			title: 'Обезяна',
			text: 'ПИЫВГщойлпйшр3птйлцпзщошйцщтпшйцощптйлоцщпшощйцлпщйшощплйщцпшойтцпльщзйцшопщтйлдьцпзойлтцьпщйзоцплтйьзцпшот',
			price: 1200
		},
		{
			id: 4,
			title: 'Обезяна',
			text: 'ПИЫВГщойлпйшр3птйлцпзщошйцщтпшйцощптйлоцщпшощйцлпщйшощплйщцпшойтцпльщзйцшопщтйлдьцпзойлтцьпщйзоцплтйьзцпшот',
			price: 1200
		},
		{
			id: 5,
			title: 'Обезяна',
			text: 'ПИЫВГщойлпйшр3птйлцпзщошйцщтпшйцощптйлоцщпшощйцлпщйшощплйщцпшойтцпльщзйцшопщтйлдьцпзойлтцьпщйзоцплтйьзцпшот',
			price: 1200
		}
	]

	return (
		<div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-10">
			{data.map(el => <ProductCard key={el.id} title={el.title} text={el.text} price={el.price} />)}
		</div>
	)
}