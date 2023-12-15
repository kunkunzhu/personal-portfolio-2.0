import React from "react";
import styled  from "styled-components";
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
    border-bottom: 2px solid black;
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

const NavItem = styled(Link)`
    font-size: 1rem;
    padding: 0.5rem 2rem 0.5rem 2rem;
    text-transform: uppercase;
    border: 2px solid black;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    vertical-align: baseline;

    :hover {
        background: #333;
        color: white;
        cursor: crosshair
    }
`

export default function PortfolioNav() {

    const renderBrowserBar = () => {
        return (
            <BrowserIcons>
                <AiOutlineMinusCircle size={25} color={'black'}/>
                <AiOutlinePlusCircle size={25} color={'black'}/>
                <AiOutlineCloseCircle size={25} color={'black'}/>
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
                    href="/portfolio/design" 
                    >
                    design
                    </NavItem>
                    <NavItem
                    href="/portfolio/misc" 
                    >
                    experiences
                    </NavItem>
                    <NavItem
                    href="/resume.pdf"
                    target="_blank"
                    >
                    resume
                    </NavItem>
                </div>
            </NavWrapper>
            {renderBrowserBar()}
        </BrowserBar>
    )
}