import { FooterWrapper } from './style';

export const Footer = () => {
    return (
        <FooterWrapper>
            <div className='license'>
                &#169; 2001- 2018 ООО <a href='#'>«СпейсВэб»‎</a>
                Все права защищены.
                Лицензия <a href='#'>№163230</a>
            </div>
            <ul className='phones'>
                <li>
                    <a href="tel:+78123341222">
                        +7 (812) 334-12-22
                    </a>
                    <span>
                        (в Санкт-Петербурге)
                    </span>
                </li>
                <li>
                    <a href="tel:+4956631612">
                        +7 (495) 663-16-22
                    </a>
                    <span>
                        (в Москве)
                    </span>
                </li>
                <li>
                    <a href="tel:8001001615">
                        (800) 100-16-15
                    </a>
                    <span>
                        (бесплатно по России)
                    </span>
                </li>
            </ul>
        </FooterWrapper>
    )
}