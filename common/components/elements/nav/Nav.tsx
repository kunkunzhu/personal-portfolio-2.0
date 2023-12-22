import React,  { useState } from "react";
import { useRouter } from 'next/router';
import styled from "styled-components";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2rem 2rem 0.5rem 2rem;   
    justify-content: space-between;
    width: 85vw;
    margin: auto;
`

const TabsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5rem;
`

export interface NavItemProps {
    $current: boolean;
}

const NavItem = styled(Link)<NavItemProps>`
    font-size: 2rem;
    letter-spacing: 0.1rem;
    font-family: var(--title-font);
    :hover {
        cursor: crosshair;
    }
    text-decoration: ${(props) => (props.$current ? 'line-through solid var(--highlight)' : 'none')};
`

interface NavProps {
    onThemeChange: (isDark: boolean) => void;
}

export const Nav = (props: NavProps) => {

    const [darkMode, setDarkMode] = useState<boolean>(false)

    const router = useRouter();
    const isPortfolio = router.pathname.includes('portfolio')

    const setDisplayMode = (isDark: boolean) => {
        setDarkMode(isDark)
        props.onThemeChange(isDark)
    }
    
    return (
        <NavWrapper>
            <TabsWrapper>
                <NavItem $current={!isPortfolio} href="/">About</NavItem>
                <NavItem $current={isPortfolio} href="/portfolio/design">Portfolio</NavItem>
            </TabsWrapper>
            <ThemeToggle
                toggled={darkMode}
                onClick={setDisplayMode}
            />
        </NavWrapper>
    )
}