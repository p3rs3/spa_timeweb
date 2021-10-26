import { AccountNavWrapper } from './style';
import NotificLogo from '../../assets/account-nav/notific-logo.svg';

export const AccountNav = () => {
    return (
        <AccountNavWrapper>
            <p className='money'>
                100.00 &#8381;
            </p>
            <div className='notific'>
                <div className='notific__logo'>
                    <img src={NotificLogo} alt='notific-logo'  />
                </div>
                <div className='notific__count'>1</div>
            </div>
            <div className='username'>
                vikavishny
            </div>
            <div className='logout'>
                Выйти
            </div>
        </AccountNavWrapper>
    )
}