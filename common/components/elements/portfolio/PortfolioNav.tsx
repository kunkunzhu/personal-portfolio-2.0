import React from "react";
import styled  from "styled-components";
import { useRouter } from 'next/router';
import { NavItemProps } from "../nav/Nav";
import Link from "next/link";
import { 
    AiOutlineCloseCircle,
    AiOutlinePlusCircle,
    AiOutlineMinusCircle,
} from "react-icons/ai";

const BrowserBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-bottom: 2px solid;
    height: 3rem;
`

const BrowserIcons = styled.div`
    * {
        margin-left: 5px;
    }
`

const NavWrapper = styled.div`
    position: relative;
    .divItems {
        position: absolute;
        bottom: 0rem;
        left: -0.5rem;
    }
`

const NavItem = styled(Link)<NavItemProps>`
    font-size: 1rem;
    padding: 0.5rem 2rem 0.5rem 2rem;
    text-transform: uppercase;
    border: 2px solid;
    border-bottom: 0;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    vertical-align: baseline;
    letter-spacing: 0.1rem;
    font-weight: 700;
    white-space: nowrap;

    background-color: ${(props) => (props.$current ? 'var(--highlight)' : 'transparent')};

    :hover {
        background: var(--outline-color);
        color: var(--body-color);
        cursor: crosshair
    }
`

export default function PortfolioNav() {

    const router = useRouter();
    const isDesign = router.pathname.includes('design')
    const isMisc = router.pathname.includes('misc')

    const renderBrowserBar = () => {
        return (
            <BrowserIcons>
                <AiOutlineMinusCircle size={25} color={'var(--outline-color)'}/>
                <AiOutlinePlusCircle size={25} color={'var(--outline-color)'}/>
                <AiOutlineCloseCircle size={25} color={'var(--outline-color)'}/>
            </BrowserIcons>
        )
    }

    return (
        <BrowserBar>
            <NavWrapper>
                <div className="divItems">
                    {/* <NavItem 
                    href="/portfolio" 
                    >
                    dev
                    </NavItem> */}
                    <NavItem 
                    $current={isDesign}
                    href="/portfolio/design" 
                    >
                    designs 
                    </NavItem>
                    <NavItem
                    $current={isMisc}
                    href="/portfolio/misc" 
                    >
                    Experiences
                    </NavItem>
                </div>
            </NavWrapper>
            {renderBrowserBar()}
        </BrowserBar>
    )
}