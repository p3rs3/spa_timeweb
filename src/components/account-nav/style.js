import styled from 'styled-components';

export const AccountNavWrapper = styled.div`
    font-family: 'Proxima Nova Light', sans-serif;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #7A8185;
    font-size: 12px;
    margin-bottom: 20px;

    .notific {
        position: relative;
        margin-left: 20px;
        cursor: pointer;
    }

    .notific__logo {
        width: max-content;
    }

    .notific__logo img {
        width: 17px;
        height: 17px;
    }

    .notific__count {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12px;
        height: 12px;
        top: -1px;
        right: -5px;
        background-color: #D0021B;
        color: white;
        border-radius: 50%;
        font-size: 10px;
    }

    .username {
        margin-left: 11px;
        cursor: pointer;
    }

    .logout {
        margin-left: 30px;
        cursor: pointer;
    }
`;