import './Header.css';
import LOGO from '../../assets/clickmarketlogo.jpeg'


export default function Header () {
    return (
        <header>
            <img src={LOGO} alt="logo" className='logo' />
        </header>
    )
}