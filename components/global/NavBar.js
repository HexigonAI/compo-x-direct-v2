import { signOut } from 'next-auth/react';

import Link from 'next/link';

const logo = '../../images/Compo---Logo.svg';

const NavBar = () => {
  const handleLogout = () => {
    signOut();
  };

  return (
    <div className='nav wf-section'>
      <div
        data-collapse='medium'
        data-animation='default'
        data-duration='400'
        data-easing='ease'
        data-easing2='ease'
        role='banner'
        className='navbar w-nav'
      >
        <div className='container-full w-container'>
          <Link href={'/servers'}>
            <div className='dashabord-logo w-nav-brand'>
              <img src={logo} width='90' alt='' className='logo' />
            </div>
          </Link>

          <div className='site-nav-search'></div>
          <nav role='navigation' className='nav-menu w-nav-menu'>
            <div className='nav-mobile'>
              <p
                className='nav-link last w-nav-link'
                style={{ cursor: 'pointer' }}
                onClick={handleLogout}
              >
                Logout
              </p>
              <img src={'../images/user-avatar.svg'}></img>
            </div>
          </nav>
            <nav role='navigation' className='nav-menu w-nav-menu'>
              <p
                className='nav-link last w-nav-link'
                style={{ cursor: 'pointer' }}
              >
                Sandboxes
              </p>
            </nav>
          <div className='menu-button w-nav-button'>
            <div className='w-icon-nav-menu'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
