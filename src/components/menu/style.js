import styled from 'styled-components';

export const MenuWrapper = styled.div`
    width: 211px;
    height: 100%;
    min-height: calc(100vh - 101px);
    background: #062436;
    padding-top: 20px;

    & > div {
        padding-left: 23px;
        margin-bottom: 67px;
    }

    & > ul {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
`;