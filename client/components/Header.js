import Link from 'next/link';
import React from 'react';

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' }
  ]
    .filter(linkConfig => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className='nav-item'>
          <Link href={href} passHref legacyBehavior>
            <a className={`nav-link`}>{label}</a>
          </Link>
        </li>
      );
    });

  return (
    <nav className='navbar navbar-light bg-light'>
      <Link href='/' passHref legacyBehavior>
        <a className='navbar-brand'>Ticketing</a>
      </Link>
      <div className='d-flex justify-content-end'>
        <ul className='nav d-flex align-items-center'>{links}</ul>
      </div>
    </nav>
  );
};

export default Header;
