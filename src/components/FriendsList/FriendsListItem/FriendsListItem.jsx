const FriendsListItem = ({ items }) => {
	return items.map(({ avatar, name, isOnline, id }) => (
		<li
			className="flex gap-2 items-center justify-between border-2 bg-slate-200 w-44 items-center justify-center mb-2 rounded-md border-2 border-slate-700 p-2"
			key={id}
		>
			<span
				className={`w-6 h-6 rounded-full ${
					isOnline ? 'bg-green-500' : 'bg-red-500'
				} block`}
			></span>
			<div className="flex justify-between items-center gap-2">
				<img className="avatar" src={avatar} alt={name} width="48" />
				<p className="text-center">{name}</p>
			</div>
		</li>
	));
};

export default FriendsListItem;
