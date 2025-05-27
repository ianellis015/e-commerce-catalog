import React from "react";
import styled from 'styled-components';
import lightModeIcon from '../../assets/light-mode-icon.svg';
import darkModeIcon from '../../assets/dark-mode-icon.svg';
import lightHome from '../../assets/light-home.svg';
import darkHome from '../../assets/dark-home.svg';
import lightTag from '../../assets/light-tag.svg';
import darkTag from '../../assets/dark-tag.svg';
import lightCart from '../../assets/light-cart.svg';
import darkCart from '../../assets/dark-cart.svg';

const Nav = styled.nav`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
  height: 100vh;
  background: ${({ theme }) => theme.background};
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  cursor: pointer;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top:2rem;
  cursor: pointer;
`

export default function Navbar({ theme, toggleTheme, onCartClick }) {
    return (
        <Nav>
      <h2>NestShop</h2>
      {/* Home button */}
       <NavItem>
        <img
          src={theme === 'light' ? lightHome : darkHome}
          width="24"
          height="24"
        />
        Home
       </NavItem>

       <NavItem onClick={onCartClick}>
          <img
          src={theme === 'light' ? lightCart : darkCart}
          width="24"
          height="24"
          /> View Cart
      </NavItem>
       <NavItem>
      <ToggleButton onClick={toggleTheme} aria-label="Toggle Theme">
        <img
          src={theme === 'light' ? darkModeIcon : lightModeIcon}
          width="24"
          height="24"
          />Theme
      </ToggleButton>
      </NavItem>

        <NavItem>
            Categories
        </NavItem>

        <NavItem>
            <img
          src={theme === 'light' ? lightTag : darkTag}
          width="24"
          height="24"
        />
            Apparrel
        </NavItem>

        <NavItem>
            <img
          src={theme === 'light' ? lightTag : darkTag}
          width="24"
          height="24"
        />
            Accessories
        </NavItem>

        <NavItem>
            <img
          src={theme === 'light' ? lightTag : darkTag}
          width="24"
          height="24"
        />
            Electronics
        </NavItem>

        </Nav>
    );
}