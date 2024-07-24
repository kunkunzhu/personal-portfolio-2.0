/** @format */

import React from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";
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
`;

const BrowserIcons = styled.div`
  * {
    margin-left: 5px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const NavWrapper = styled.div`
  position: relative;

  @media (min-width: 780px) {
    .divItems {
      position: absolute;
      bottom: 0rem;
      left: -0.5rem;
    }
  }

  @media (max-width: 780px) {
    height: 2rem;
    margin-top: 0.2rem;
  }
`;

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

  background-color: ${(props) =>
    props.$current ? "var(--highlight)" : "transparent"};

  :hover {
    background: var(--outline-color);
    color: var(--body-color);
    cursor: crosshair;
  }

  @media (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

export default function PortfolioNav() {
  const path = usePathname();
  const isDesign = path.includes("design");
  const isMisc = path.includes("misc");
  const isDev = path.includes("portfolio") && !isDesign && !isMisc;

  const renderBrowserBar = () => {
    return (
      <BrowserIcons>
        <AiOutlineMinusCircle size={25} color={"var(--outline-color)"} />
        <AiOutlinePlusCircle size={25} color={"var(--outline-color)"} />
        <AiOutlineCloseCircle size={25} color={"var(--outline-color)"} />
      </BrowserIcons>
    );
  };

  return (
    <BrowserBar>
      <NavWrapper>
        <div className="divItems">
          <NavItem $current={isDev} href="/portfolio" id="no-sm">
            dev
          </NavItem>
          <NavItem $current={isDev} href="/portfolio" id="sm-only">
            💻
          </NavItem>
          <NavItem $current={isDesign} href="/portfolio/design" id="no-sm">
            designs
          </NavItem>
          <NavItem $current={isDesign} href="/portfolio/design" id="sm-only">
            🎨
          </NavItem>
          <NavItem $current={isMisc} href="/portfolio/misc" id="no-sm">
            Experiences
          </NavItem>
          <NavItem $current={isMisc} href="/portfolio/misc" id="sm-only">
            ✨
          </NavItem>
        </div>
      </NavWrapper>
      {renderBrowserBar()}
    </BrowserBar>
  );
}
