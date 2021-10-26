import { MenuItemWrapper } from './style';

export const MenuItem = ({name, logo, isActive}) => {
    return (
        <MenuItemWrapper isActive={isActive}>
            <div>
                <img src={logo} alt='menu-item-logo' />
            </div>
            <p>
                {name}
            </p>
        </MenuItemWrapper>
    )
}