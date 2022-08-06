import styled from '@emotion/styled';

export const UserProfile = styled.div`
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 0 0 0;
    background: #f5f4fa;
    text-align: center;
    border-radius: 8px;
`;
export const DescriptionWrap = styled.div`
display: flex;
`;
export const Avatar = styled.img`
height: 120px;
width: 120px;
border-radius: 50%;
background-color: #233C8E;
`;

export const UserName = styled.p`
font-family: 'Roboto';
font-size: 28px;
line-height: 1.17;
text-align: center;
font-weight: bold;
color: #000000;
margin: 10px 0;
`;

export const Tag = styled.p`
font-family: 'Roboto';
font-size: 18px;
text-align: center;
color: #5F7661;
margin: 0 0 10px 0;
`;

export const Location = styled.p`
font-family: 'Roboto';
font-size: 20px;
text-align: center;
color: #5F7661;
margin: 0 0 40px 0;
`;

export const Stats = styled.ul`
display: flex;
justify-content: space-around;
padding: 0 10px;
list-style: none;

border-top: 1px solid #5F7661;
`;

export const StatsItem = styled.li`
:nth-child(2n) {
    border-left: 1px solid #5F7661;
    border-right: 1px solid #5F7661;
}
`;

export const Label = styled.span`
font-family: 'Roboto';
font-weight: bold;
font-size: 20px;
`;

export const Quantity = styled.span`
font-family: 'Roboto';
font-weight: normal;
font-size: 20px;
`;