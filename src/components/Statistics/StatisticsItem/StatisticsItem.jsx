const StatisticsItem = ({ items }) => {
	const color = function getRandomHexColor() {
		return `#${Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, 0)}`;
	};

	return items.map(({ id, label, percentage, title }) => (
		<li
			className="flex flex-col justify-between p-3 basis-1/5 text-white "
			style={{ backgroundColor: color() }}
			key={id}
		>
			<span className="">{label}</span>
			<span className="">{percentage}%</span>
		</li>
	));
};

export default StatisticsItem;
