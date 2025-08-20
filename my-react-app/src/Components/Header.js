import React from 'react';

const NavigationLink = ({ isActive, onClick, children }) => (
  <li className={isActive ? 'active' : ''}>
    <a href="#" onClick={onClick}>{children}</a>
  </li>
);

const SocialIcon = ({ icon, label, href = "#" }) => (
  <li>
    <a href={href} className={`icon brands ${icon}`}>
      <span className="label">{label}</span>
    </a>
  </li>
);

const Header = ({ currentPage, setCurrentPage }) => {
  const navigationItems = [
    { key: 'massively', label: 'Portfolio' },
    { key: 'generic', label: 'About Me' },
    { key: 'elements', label: 'Projects' }
  ];

  const socialIcons = [
    { icon: 'fa-twitter', label: 'Twitter', href: 'https://twitter.com/justinsowden' },
    { icon: 'fa-linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/justin-sowden' },
    { icon: 'fa-github', label: 'GitHub', href: 'https://github.com/justinsowden' },
    { icon: 'fa-envelope', label: 'Email', href: 'mailto:justin@example.com' }
  ];

  return (
    <>
      {/* Nav */}
      <nav id="nav">
        <ul className="links">
          {navigationItems.map(item => (
            <NavigationLink
              key={item.key}
              isActive={currentPage === item.key}
              onClick={() => setCurrentPage(item.key)}
            >
              {item.label}
            </NavigationLink>
          ))}
        </ul>
        <ul className="icons">
          {socialIcons.map(icon => (
            <SocialIcon key={icon.label} {...icon} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
