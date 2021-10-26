import styled from 'styled-components';

export const PreloaderWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    height: 300px;
    width: 300px;
    transform: translateX(-50%) translateY(-50%);

    .block {
        position: absolute;
        top: 0;
        left: 0;
        height: 200px;
        width: 200px;
        
        > .item {
            position: absolute;
            height: 20px;
            width: 20px;
            background: #fff;
            animation: move @duration linear infinite;
            
            &:nth-of-type(1) {
                top: -20px;
                left: -20px;
                animation-delay: 0s;
            }
            
            &:nth-of-type(2) {
                top: -20px;
                left: 0;
                animation-delay: -@duration / 8;
            }
            
            &:nth-of-type(3) {
                top: -20px;
                left: 20px;
                animation-delay: -2 * @duration / 8;
            }
            
            &:nth-of-type(4) {
                top: 0;
                left: 20px;
                animation-delay: -3 * @duration / 8;
            }
            
            &:nth-of-type(5) {
                top: 20px;
                left: 20px;
                animation-delay: -4 * @duration / 8;
            }
            
            &:nth-of-type(6) {
                top: 20px;
                left: 0;
                animation-delay: -5 * @duration / 8;
            }
            
            &:nth-of-type(7) {
                top: 20px;
                left: -20px;
                animation-delay: -6 * @duration / 8;
            }
            
            &:nth-of-type(8) {
                top: 0;
                left: -20px;
                animation-delay: -7 * @duration / 8;
            }
        }
    }

    @keyframes move {
        0% {
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        70% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }
`;