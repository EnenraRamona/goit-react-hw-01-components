import styled from 'styled-components';

export const StatCard = styled.section`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
width: 375px;
height: 252px;
margin-right: auto;
margin-left: auto;
`;

export const Title = styled.h2`
font-weight: 700;
font-size: 36px;
margin-bottom: 36px;
`;

export const StatsList = styled.ul`
list-style: none;
display: flex;
text-align: center;
margin: 0;
padding: 0;
gap: 10px;

:nth-last-child(5){
    background-color: #50c4f3;
}
:nth-last-child(4){
    background-color: #a83bf0;
}

:nth-last-child(3){
    background-color: #e84b66;
}

:nth-child(4){
    background-color: #21b7c5;
}

:nth-child(5){
    background-color: tomato;
}

`; 

export const StatItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 75px;
height: 75px;
border: 2px solid;

`;

export const Label = styled.span`
font-weight: 500;
font-size: 20px;
margin-bottom: 5px;
`;

export const Persentage = styled.span`
font-weight: 500;
font-size: 20px;
`
