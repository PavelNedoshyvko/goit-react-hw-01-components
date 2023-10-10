export const FriendListItem = ({
	friendItem: { avatar, name, isOnline } }) => {
	return (
		<>
			<span></span>
			<img src={avatar} alt={name} width="48px" />
			<p>{name}</p>
		</>
	);
};