import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    gap:12px;

`;

export const ButtonStyled = styled.button`
    width: 90px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1); 
    }
`;

export const Svg = styled.div`
    color: var(--color-light);
    border-radius: 50%;
    border-color: var(--color-accent);
        svg{
            font-size: 24px;
        }
`;


export const SvgWrap = styled.div`
    width: 46px;
    height: 44px;
    overflow: hidden;
    border-radius: 50%;
    background-color: var(--color-accent);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TypographyStyled = styled("p")(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "rgba(255,255,255,.80)" : "var(--color-dark)",
    fontSize: "0.875rem",
    // [theme.breakpoints.down("laptop")]: {
    //     display: "none",
    // },
}));
