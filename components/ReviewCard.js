
export default function ReviewCard({ id, text }) {

	// const delteScript = text.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

	return (
		<div className="flex justify-center w-full sm:w-max">
			<div className="container max-w-[468px] sm:w-[468px] min-h-[611px] h-fit bg-acc2 rounded-lg p-5 text-black text-xl" >
				<div>
					<span className="text-2xl">Отзыв {id}</span>
				</div>
				<div className="break-words mt-10">
					{text}
				</div>
			</div>
		</div>
	)
}