import { FriendListItem } from "components/FriendListItem/FriendListItem"
import { List, ListItem } from "./FriendList.styled"

export const FriendList = ({ friends }) => {
	return (
		<List>
			{friends.map(friend => (
				<ListItem key={friend.id}>
					<FriendListItem friendItem={friend} />
				</ListItem>
			))}
		</List>
	);
};