/** @format */

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Squeeze } from "hamburger-react";

export interface NavItemProps {
  $current: boolean;
}

interface NavProps {
  onThemeChange: (isDark: boolean) => void;
}

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 2rem 0.5rem 2rem;
  justify-content: space-between;
  width: 85vw;
  margin: auto;

  @media (max-width: 780px) {
    width: 100vw;
  }
`;

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;

  @media (max-width: 780px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  margin-top: -0.5rem;

  @media (min-width: 780px) {
    display: none;
  }
`;

const HamburgerWrapper = styled.div`
  width: 100vw;
  height: 16rem;
  position: absolute;
  top: 5rem;
  left: -1rem;
  padding: 2rem;
  padding-left: 4rem;
  display: flex;
  z-index: 100;
  flex-direction: column;

  justify-content: space-around;
  background-color: var(--body-color);
  border-bottom: 2px solid var(--outline-color);
`;

const NavItem = styled(Link)<NavItemProps>`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  font-family: var(--title-font);
  text-decoration: ${(props) =>
    props.$current ? "line-through solid var(--highlight)" : "none"};

  :hover {
    cursor: crosshair;
  }
`;

export const Nav = (props: NavProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  const path = usePathname();
  const isPortfolio = path.includes("portfolio");

  const setDisplayMode = (isDark: boolean) => {
    setDarkMode(isDark);
    props.onThemeChange(isDark);
  };

  return (
    <NavWrapper>
      <TabsWrapper>
        <NavItem $current={!isPortfolio} href="/">
          About
        </NavItem>
        <NavItem $current={isPortfolio} href="/portfolio">
          Portfolio
        </NavItem>
      </TabsWrapper>
      <HamburgerMenu>
        <Squeeze
          color="var(--highlight)"
          size={30}
          toggled={hamburgerOpen}
          toggle={setHamburgerOpen}
        />
        {hamburgerOpen && (
          <HamburgerWrapper>
            <NavItem $current={!isPortfolio} href="/">
              About
            </NavItem>
            <NavItem $current={isPortfolio} href="/portfolio/design">
              Portfolio
            </NavItem>
          </HamburgerWrapper>
        )}
      </HamburgerMenu>
      <ThemeToggle toggled={darkMode} onClick={setDisplayMode} />
    </NavWrapper>
  );
};
