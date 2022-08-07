import styled from '@emotion/styled';

// export const UserStatistics = styled.section`
//     width: 300px;
//     margin-top: 30px;
//     margin-left: auto;
//     margin-right: auto;
//     padding-top: 10px;
//     background: #f5f4fa;
//     text-align: center;
//     border-radius: 8px;
//     box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
//     0px 2px 1px rgba(0, 0, 0, 0.2);
// `;

export const Title = styled.h2`
font-family: 'Roboto';
font-size: 20px;
text-align: center;
text-transform: uppercase;
margin-bottom: 10px;
`;

// export const StatList = styled.ul`
// display: flex;

// border-top: 1px solid #5F7661;
// `;

export const Item = styled.li`
width: 80px;

display: flex;
flex-direction: column;
align-items: center;
padding: 10px 0 10px 0;

:nth-child(2n) {
    border-left: 1px solid #5F7661;
    border-right: 1px solid #5F7661;
}
`;

export const Label = styled.span`
font-family: 'Roboto';
font-size: 18px;
text-align: center;
`;

export const Percentage = styled.span`
font-family: 'Roboto';
font-size: 28px;
text-align: center;
margin-top: 15px;
`;

