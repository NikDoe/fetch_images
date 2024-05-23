import { useGlobalContext } from '../hooks';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

function Header() {
	const { isDarkTheme, toggleTheme } = useGlobalContext();
	
	return (
		<section className='toggle-container'>
			<button className='dark-toggle' onClick={toggleTheme}>
				{
					isDarkTheme ? <BsFillSunFill className='toggle-icon'/> : <BsFillMoonFill className='toggle-icon'/>
				}
			</button>
		</section>
	);
}

export default Header;
