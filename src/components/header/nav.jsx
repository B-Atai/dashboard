import { navItems } from './const';
function Nav() {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        {navItems.map((item) => (
          <li className='nav__item' key={item}>
            <a className='nav__link' href={item}>
              <img src={item} alt='icon'/>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;