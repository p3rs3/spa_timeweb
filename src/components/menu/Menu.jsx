import { MenuItem } from '../menu-item/MenuItem';
import { MenuWrapper } from './style';
import MainLogo from '../../assets/menu/main_logo.svg';
import DomensLogo from '../../assets/menu-item/domens.svg';
import AccountLogo from '../../assets/menu-item/user.svg';
import VpsLogo from '../../assets/menu-item/vps.svg';
import JournalLogo from '../../assets/menu-item/journal.svg';

export const Menu = () => {
    const menuItems = [
        {
            name: 'аккаунт',
            logo: AccountLogo,
            isActive: false,
        },
        {
            name: 'vps',
            logo: VpsLogo,
            isActive: false,
        },  
        {
            name: 'домены',
            logo: DomensLogo,
            isActive: false,
        },
        {
            name: 'бортовой журнал',
            logo: JournalLogo,
            isActive: true,
        }
    ];

    return (
        <MenuWrapper>
            <div>
                <img src={MainLogo} alt='main-logo' />
            </div>
            <ul>
                {menuItems.map((menuItem, index) => {
                    return (
                        <MenuItem {...menuItem} key={index}/>
                    )
                })}
            </ul>
        </MenuWrapper>
    )
}