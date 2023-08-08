import { FriendsList } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friends={friend}></FriendListItem>
      ))}
    </FriendsList>
  );
};
