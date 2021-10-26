import { Menu } from '../components/menu/Menu';
import { AccountNav } from '../components/account-nav/AccountNav';
import { Journal } from '../components/journal/Journal';
import { Footer } from '../components/footer/Footer';
import { Page } from './style';

export const Main = () => {
    return (
        <div className='container'>
            <Page>
                <div className='side'>
                    <Menu />
                </div>
                <div className='content'>
                    <AccountNav />
                    <Journal />
                </div>
            </Page>
            <Footer />
        </div>
    );
}