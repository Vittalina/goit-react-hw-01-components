import styled from '@emotion/styled';

export const FriendsList = styled.ul`
    width: 300px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
    list-style: none;
`;

export const Item = styled.li`
display: flex;
align-items: center; 
padding: 10px 0 10px 0;
background: #f5f4fa; 
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 4px 4px 4px 4px;
    &:not(:last-child) {
    margin-bottom: 30px;
    }
`;

export const Avatar = styled.img`
background-color: #233C8E;
border-radius: 50%;
margin-right: 15px;
`;

export const FriendName = styled.p`
font-family: 'Roboto';
font-size: 28px;
line-height: 1.17;
text-align: center;
font-weight: bold;
color: #000000;
`;