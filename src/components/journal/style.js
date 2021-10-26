import styled from 'styled-components';

export const JournalWrapper = styled.div`
    min-height: calc(100vh - 162px);
    background-color: white;
    box-shadow: 1px 1px 4px rgb(191 191 191);

    & > .title {
        padding: 16px 20px;
        border-bottom: 2px solid #F7FAFB;
    }

    & > .title > .subtitle {
        font-family: 'Proxima Nova Light', sans-serif;
        font-size: 12px;
        line-height: 15px;
        text-transform: uppercase;
        color: #062436;
        margin-bottom: 10px;
    }

    & > .title > h2 {
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        text-transform: uppercase;
        color: #062436;
    }
`;

export const JournalList = styled.ul`
    
`;