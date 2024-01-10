import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    gap:12px;

`;

export const ButtonStyled = styled.button`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

