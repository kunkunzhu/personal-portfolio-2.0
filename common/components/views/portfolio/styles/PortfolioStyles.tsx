/** @format */

import { NavItemProps } from "@/common/components/elements/nav/Nav";
import styled, { keyframes } from "styled-components";

const wobble = keyframes`
  0%, 100% {
    transform: translateY(0.2rem);
  }
  50% {
    transform: translateY(-0.2rem); /* Adjust the distance to move up and down */
  }
`;

export const TogglePillWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

export const TogglePill = styled.div<NavItemProps>`
  margin-top: 1.5rem;
  align-self: flex-start;
  border-radius: 50px;
  color: ${(props) =>
    props.$current ? "var(--body-color)" : "var(--outline-color)"};
  border: 2px solid var(--outline-color);
  background: ${(props) => (props.$current ? "var(--highlight)" : "none")};
  padding: 0.8rem 1.5rem 0.8rem 1.5rem;
  font-size: 1.2rem;

  :hover {
    cursor: crosshair;
  }
`;

export const Header = styled.div`
  width: 70vw;
  margin: 6rem auto 6rem auto;
  display: flex;
  height: 50vh;
  flex-direction: column;
  justify-content: space-between;

  .title {
    width: 65vw;
    font-size: 3rem;
    font-family: var(--title-font);
    font-weight: 500;
    margin-bottom: 4rem;

    .circle {
      border-radius: 100%;
      border: 2px solid var(--highlight);
      padding: 0 1rem 0 1rem;
      display: inline-block;
      cursor: crosshair;
    }
  }
`;

export const PromptWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Arrow = styled.span`
  display: inline-block;
  animation: ${wobble} 1.5s ease-in-out infinite;
`;

export const IconWrapper = {
  outline: "2px solid var(--highlight)",
  borderRadius: "10rem",
  height: "2.8rem",
  width: "2.8rem",
  verticalAlign: "text-top",
};
