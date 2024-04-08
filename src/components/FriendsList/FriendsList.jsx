import FriendsListItem from './FriendsListItem/FriendsListItem';
import friendsData from '../../helpers/friends.json';

const FriendsList = () => {
	return (
		<ul className="flex flex-col items-center justify-center mt-20 mb-20 w-32 p-4 rounded-md mx-auto">
			<FriendsListItem items={friendsData} />
		</ul>
	);
};

export default FriendsList;
