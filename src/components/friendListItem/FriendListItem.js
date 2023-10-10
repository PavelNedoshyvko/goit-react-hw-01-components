import { Avatar, ListItem, Name } from "./FriendListItem.styled";
import { Marker } from "./FriendListItem.styled";

export const FriendListItem = ({
	friendItem: { avatar, name, isOnline } }) => {
	return (
		<ListItem>
			<Marker $mark={isOnline}></Marker>
			<Avatar src={avatar} alt={name} />
			<Name>{name}</Name>
		</ListItem>
	);
};