import styled from 'styled-components';

export const MenuItemWrapper = styled.li`
    display: flex;
    align-items: center;
    padding: ${props => (props.isActive ? '10px 12px 10px 17px' : '10px 12px 10px 23px')};
    border-left: ${props => (props.isActive ? '6px solid #3DBDF6' : 'none')};
    background-color: ${props => (props.isActive ? '#15526A' : 'none')};
    cursor: pointer;

    & > div {
        width: 22px;
        height: 22px;
    }

    & > img {
        width: 100%;
        height: 100%;
    }
    
    & > p {
        font-weight: bold;
        font-size: 14px;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-left: 10px;
    }
`;