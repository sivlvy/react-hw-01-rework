import Profile from './Profile/Profile';
import StatisticsList from './Statistics/StatisticsList';
import profileData from '../helpers/user.json';
import FriendsList from './FriendsList/FriendsList';
import TransactionsHistory from './TransactionsHistory/TransactionsHistory';
import transactions from '../helpers/transactions.json';

export const App = () => {
	return (
		<>
			<Profile items={profileData} />
			<StatisticsList title="Upload stats" />
			<FriendsList />
			<TransactionsHistory items={transactions} />
		</>
	);
};
