import { observer } from "mobx-react-lite"

const HabitIcon = observer(({ image, color }) => {

	return (
		<img src={`/${image}2.svg`}
			alt={`${image}`}
			width={40}
			style={color == 'white' ? { filter: 'brightness(0) invert(1)' } : null} />
	)
})

export default HabitIcon