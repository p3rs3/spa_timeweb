import styled from 'styled-components';
import arrow from '../../assets/journal-item/arrow.svg';

export const JournalItemWrapper = styled.li`
    font-family: 'Proxima Nova Light', sans-serif;
    position: relative;
    background-color: ${props => (props.isActive ? '#F3FCFF;' : '#fff')};
    border-bottom: 2px solid #F7FAFB;
    padding: 0 20px;
    font-size: 16px;
    font-weight: 100;
    line-height: 19px;
    color: #000000;
    transition: .5s;
    cursor: pointer;
    overflow: hidden;

    & > h3 {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

export const Text = styled.div`
    height: ${props => (props.height ? `${props.height}px` : 0)};
    padding-bottom: ${props => (props.height ? '20px' : 0)};
    transition: height .5s;

    & h1 {
        display: none;
    }

    & h2 {
        margin-bottom: 15px;
    }

    & p {
        margin-bottom: 10px;
    }

    & img {
        max-width: 500px;
    }
`;

export const ContorollArrow = styled.div`
    position: absolute;
    width: 10px;
    height: 6px;
    top: 30px;
    right: 20px;
    background-image: url('${arrow}');
    transform: ${props => (props.isActive ? 'rotate(0);' : 'rotate(180deg)')};
    transition: .5s;
`;