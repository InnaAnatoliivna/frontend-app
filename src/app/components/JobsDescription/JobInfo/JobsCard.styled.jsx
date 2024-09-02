import styled from "@emotion/styled";

export const JobsWrapper = styled.div`

    background-color: ${({ theme }) =>
        theme.palette.mode === "dark" ? "transparent" : "var(--color-active-second)"
    };

        padding: 18px;
`