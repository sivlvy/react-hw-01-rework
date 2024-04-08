import StatisticsItem from './StatisticsItem/StatisticsItem';
import items from '../../helpers/statistic.json';

const StatisticsList = ({ title }) => {
	return (
		<ul className="flex flex-row justify-center mt-20 h-10 bg-slate-200 w-20 mx-auto items-center ">
			<StatisticsItem title={title} items={items} />
		</ul>
	);
};

export default StatisticsList;
