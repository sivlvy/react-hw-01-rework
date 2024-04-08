

const Profile = ({ items }) => {
	const {
		username,
		tag,
		location,
		avatar,
		stats: { followers, views, likes },
	} = items;

	return (
		<div className="w-72 mx-auto pt-10 bg-slate-300 border-2 border-slate-800 rounded-md mt-20">
			<div className="text-center border-b-2 border-slate-800 pb-4">
				<img
					src={avatar}
					alt={username}
					className="w-28 mb-10 mx-auto rounded-full"
				/>
				<p className="text-center text-lg font-bold">{username}</p>
				<p className="text-sm text-slate-600 mb-1">@{tag}</p>
				<p className="text-sm text-slate-600 mb-1">{location}</p>
			</div>

			<ul className="flex justify-between bg-slate-400">
				<li className="flex flex-col justify-center basis-1/3 justify-center p-5">
					<span className="text-slate-700 text-center">Followers</span>
					<span className="text-center font-bold">{followers}</span>
				</li>
				<li className="flex flex-col justify-center basis-1/3 justify-center p-5 border-l-2 border-slate-800">
					<span className="text-slate-700 text-center">Views</span>
					<span className="text-center font-bold">{views}</span>
				</li>
				<li className="flex flex-col justify-center basis-1/3 justify-center p-5 border-l-2 border-slate-800">
					<span className="text-slate-700 text-center">Likes</span>
					<span className="text-center font-bold">{likes}</span>
				</li>
			</ul>
		</div>
	);
};

export default Profile;
