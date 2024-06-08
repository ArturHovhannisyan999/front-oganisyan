import './index.css';
import Icon from '../../images/Path.png';

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>Demos <img alt='icon' src={Icon}></img></li>
                <li>Post <img alt='icon' src={Icon}></img></li>
                <li>Features <img alt='icon' src={Icon}></img></li>
                <li>Categories <img alt='icon' src={Icon}></img></li>
                <li>Shop <img alt='icon' src={Icon}></img></li>
                <li>Buy Now</li>
            </ul>
        </nav>
    )
}