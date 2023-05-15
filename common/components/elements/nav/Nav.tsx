import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.6rem;
    width: 90vw;
    margin: auto;
`

const NavItem = styled(Link)`
`

export default function Nav() {
    
    return (
        <NavWrapper>
            <NavItem href="/">About</NavItem>
            <NavItem href="/portfolio">Portfolio</NavItem>
        </NavWrapper>
    )
}