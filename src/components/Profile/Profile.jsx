import { UserPhoto, Description, Followers, Likes, ProfileCard, StatsList, StatsName, StatsQuantity, UserLocation, UserName, UserTag, Views } from "./Profile.styled";

export const Profile = ({ user }) => {
    // console.log(props.items);
    const { avatar, username, location, tag, stats} = user;
    return (
       <ProfileCard>
            <Description>
                <UserPhoto src={avatar} alt="User avatar" />
                <UserName>{username}</UserName>
                <UserTag>@{tag}</UserTag>
                <UserLocation>{location}</UserLocation>
                <StatsList>
                    <Followers>
                        <StatsName>Followers</StatsName>
                        <StatsQuantity>{ stats.followers }</StatsQuantity>
                    </Followers>
                      <Views>
                        <StatsName>Views</StatsName>
                        <StatsQuantity>{stats.views}</StatsQuantity>
                    </Views>
                      <Likes>
                        <StatsName>Likes</StatsName>
                        <StatsQuantity>{stats.likes}</StatsQuantity>
                    </Likes>
                </StatsList>

            </Description>
       </ProfileCard>
    );
}