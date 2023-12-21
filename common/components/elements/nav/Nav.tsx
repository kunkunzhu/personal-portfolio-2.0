import React,  { useState } from "react";
import styled, { useTheme } from "styled-components";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2rem 2rem 1rem 2rem;   
    justify-content: space-between;
    width: 90vw;
    margin: auto;
`

const TabsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5rem;
`

const NavItem = styled(Link)`
    font-size: 2rem;
    letter-spacing: 0.1rem;
    font-family: var(--title-font);
    :hover {
        cursor: crosshair;
    }
`

interface NavProps {
    onThemeChange: (isDark: boolean) => void;
}

export const Nav = (props: NavProps) => {

    const [darkMode, setDarkMode] = useState<boolean>(false)

    const setDisplayMode = (isDark: boolean) => {
        setDarkMode(isDark)
        props.onThemeChange(isDark)
    }
    
    return (
        <NavWrapper>
            <TabsWrapper>
                <NavItem href="/">About</NavItem>
                <NavItem href="/portfolio/design">Portfolio</NavItem>
            </TabsWrapper>
            <ThemeToggle
                toggled={darkMode}
                onClick={setDisplayMode}
                />
        </NavWrapper>
    )
}