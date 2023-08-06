import styled from 'styled-components';

export const FriendsList = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 500px
height: 250px
margin: 0;
padding: 0;

`;

export const FriendItem = styled.li`
display: flex;
background-color: ghostwhite;
justify-content: flex-start;
width: 500px;
height: 110px;
margin: 0;
margin-bottom: 5px;
padding: 0;
border: 2px solid black;
gap: 15px;
`;

export const FriendPhoto = styled.img`
display: inline-flex;
align-self: center;
margin: 0;
padding: 0;
width: 90px;
height: 90px;

`;

export const Name = styled.p`
margin: 0;
font-weight: 400;
font-size: large;
padding-right: 15px;
text-align: center;
padding-top: 50px;

`;


const changeByColor = props => props.type === "true" ? "green" : "red"
    // if (props.type != "true") {
    //     return "red";    
    // } else 
    //     return "green"
;

export const Status = styled.span`
display: block;
align-self: center;
border: 1px solid black;
border-radius: 50px;
background-color: ${changeByColor};
width: 25px;
height: 25px;
margin-left: 15px;
`;