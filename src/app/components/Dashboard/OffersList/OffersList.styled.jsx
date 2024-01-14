import styled from "@emotion/styled";

export const List = styled.ul`
    width: 50%;
    height: 100vh;
    overflow: auto;
    background-color: var(--color-dark);

    background-color: ${({ theme }) =>
        theme.palette.mode === "dark" ? "var(--color-dark)" : "var(--color-light)"
    };
`;

export const Title = styled.h3`
    padding: 12px 0 ;
    text-align: center;

    font-size: 16px;
    font-weight: 500;
`;
