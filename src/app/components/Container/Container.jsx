import styled from '@emotion/styled';

export const Container = styled.div`
    width: calc(100vw - (100vw - 100%));
    padding-left: 8px;
    padding-right: 8px;
    margin: 0 auto;
    overflow-x: hidden;
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1440px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

export default Container;
