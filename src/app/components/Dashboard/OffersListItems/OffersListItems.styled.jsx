import styled from "@emotion/styled";

export const MainWrapper = styled.div`
display: flex;
gap: 10px;

`;

export const Card = styled.li`
padding: 5px 10px;
margin: 0 12px 12px 12px;
/* background-color: #2C2C2C; */
border-radius: var(--border-radius-cards);
box-shadow: var(--card-shadow);
cursor: pointer;

background-color: ${({ theme }) =>
        theme.palette.mode === "dark" ? "#2C2C2C" : "#fff"
    };
`;

export const LastWrap = styled.div`
// /* display: flex;
// justify-content: space-between; */
    margin-left: auto;
`;