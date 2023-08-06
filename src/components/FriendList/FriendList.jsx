import { FriendsList, FriendItem, FriendPhoto, Name, Status } from "./FriendList.styled"

export const FriendList = ({friends}) => {
    return (
        <FriendsList>
            {friends.map(friend => (
                <FriendItem key={friend.id}>
                    <Status type = {friend.isOnline.toString()}>{friend.isOnline}</Status>
                    <FriendPhoto src={friend.avatar} alt="User avatar" />
                    <Name>{friend.name}</Name>
                </FriendItem>
            ))}
    </FriendsList>
)
}