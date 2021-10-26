import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    font-family: 'Proxima Nova Light',sans-serif;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 36px 20px;
    background-color: #E5E5E5;

    > .license {
        max-width: 170px;
        font-size: 12px;
        font-weight: 600;
        line-height: 15px;
        color: #000000;
    }

    > .phones {
        font-size: 12px;
        line-height: 15px;

        span {
            margin-left: 5px;
        }
    }

    a {
        display: inline-block;
        color: #3DBDF6;
        cursor: pointer;
        text-decoration: none;
    }
`;