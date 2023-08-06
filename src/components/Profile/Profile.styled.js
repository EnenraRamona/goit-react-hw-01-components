import styled from 'styled-components';

export const ProfileCard = styled.div``;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 500px;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  background-color: #e7ecf2;
  border-radius: 14px;
  outline: 2px solid black;
`;

export const UserPhoto = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  outline: 3px solid black;
`;

export const UserName = styled.p`
  font-weight: 600;
  font-size: 24px;
  margin-top: 25px;
  margin-bottom: 0;
`;

export const UserTag = styled.p`
  font-weight: 400;
  margin-top: 5px;
  margin-bottom: 0;
  text-align: center;
  color: gray;
`;
export const UserLocation = styled.p`
  margin-top: 5px;
  margin-bottom: 25px;
  color: gray;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const Followers = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
`;
export const Views = styled.li`
  display: flex;
  width: 90px;
  flex-direction: column;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #ccc;
`;

export const Likes = styled.li`
  display: flex;
  width: 90px;
  flex-direction: column;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #ccc;
`;
export const StatsName = styled.span`
  margin-bottom: 5px;
`;
export const StatsQuantity = styled.span`
  font-weight: 500;
`;
