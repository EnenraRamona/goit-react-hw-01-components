import { FriendItem, FriendPhoto, Name, Status } from './FriendList.styled';

export const FriendListItem = ({ friends }) => {
  return (
    <FriendItem key={friends.id}>
      <Status type={friends.isOnline.toString()}>{friends.isOnline}</Status>
      <FriendPhoto src={friends.avatar} alt="User avatar" />
      <Name>{friends.name}</Name>
    </FriendItem>
  );
};
