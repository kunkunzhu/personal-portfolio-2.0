/** @format */

import React from "react";

import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { NavItemProps } from "../../elements/nav/Nav";

type ComponentProps = {
  className?: string;
  children?: React.ReactNode;
};

// general styles
const wobble = keyframes`
  0%, 100% {
    transform: translateY(0.2rem);
  }
  50% {
    transform: translateY(-0.2rem); /* Adjust the distance to move up and down */
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

  .prompt {
    font-size: 1.2rem;

    a {
      cursor: crosshair;
      text-decoration: underline solid var(--highlight);
    }
  }

  hr {
    margin-top: -3rem;
    border: none;
    height: 2px;
    background-color: var(--highlight);
  }

  @media (max-width: 640px) {
    height: 70vh;
    margin-top: 4rem;

    .title {
      font-size: 1.8rem;
    }

    .icon {
      display: none;
    }
  }
`;

export const Arrow = styled.span`
  display: inline-block;
  animation: ${wobble} 1.5s ease-in-out infinite;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  opacity: 0.2;
`;

// DEV portfolio styles

export const DevProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 0 4rem 8rem;

  @media (max-width: 640px) {
    margin: 0;
    margin-left: 2rem;
  }
`;

export const DevProjWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  border: 2px solid;
  border-radius: 25px;

  .hover-show {
    opacity: 0;
  }
  &:hover {
    box-shadow: -2rem 1rem 0 var(--highlight);
    transform: translate(2rem, -1rem);
    transition: 0.2s ease-in-out;
    .hover-show {
      opacity: 1;
      transition: 0.2s ease-in-out;
    }
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const DevProjDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0 auto 0;
  gap: 1.6rem;
`;

export const DevProjHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  .title {
    text-transform: uppercase;
    font-size: 1.8rem;
    font-family: var(--title-font);
  }

  @media (max-width: 640px) {
    .title {
      font-size: 1.5rem;
    }
  }
`;

export const DevProjInfo = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  gap: 0.2rem;

  .subtitle {
    font-size: 1.2rem;
    margin-right: 2rem;
    opacity: 0.75;
    text-transform: lowercase;
  }
`;

export const DevProjLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  opacity: 0.5;
  * {
    cursor: crosshair;
  }
`;

interface DevProjProps {
  $misc: boolean;
}

export const DevProjTag = styled.div<DevProjProps>`
  font-family: var(--text-font);
  border: 2px solid;
  opacity: ${(props) => (props.$misc ? 1 : 0.5)};
  border-radius: 25px;
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  word-break: break-all;
  color: ${(props) =>
    props.$misc ? "var(--highlight)" : "var(--outline-color)"};
`;

export const DevProjTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;

  @media (max-width: 780px) {
    flex-direction: column;
    * {
      max-width: fit-content;
    }
  }
`;

export const DevProjectImageWrapper = {
  maxWidth: "22rem",
  borderRadius: "15px",
};

// DESIGN portfolio styles

export const IconWrapper = {
  outline: "2px solid var(--highlight)",
  borderRadius: "10rem",
  height: "2.8rem",
  width: "2.8rem",
  verticalAlign: "text-top",
};

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6rem;
  justify-content: center;

  .subtitle {
    font-size: 1rem;
  }
  .title {
    text-transform: uppercase;
    font-size: 2.5rem;
    margin-bottom: 0.8rem;
    font-weight: 600;
    font-family: var(--title-font);
  }
  .description {
    font-size: 1.2rem;
  }
  .link {
    margin-top: 1.5rem;
    align-self: flex-start;
    border-radius: 20px;
    color: var(--outline-color);
    border: 2px solid var(--outline-color);
    padding: 0.5rem 1rem 0.5rem 1rem;
    text-decoration: none;
    background: inherit;
    font-family: inherit;
    font-size: 1.2rem;
  }
  span {
    opacity: 0.5;
  }
  button {
    &:hover {
      margin-top: 1.2rem;
      font-size: 1.5rem;
      transition: 0.1s ease-out;
      color: var(--body-color);
      background: var(--outline-color);
      border-radius: 10rem;
    }
    cursor: crosshair;
  }

  @media (max-width: 640px) {
    margin-top: 1rem;
    margin-left: 0.5rem;

    .title {
      font-size: 1.8rem;
    }
    .subtitle {
      font-size: 0.8rem;
    }
    .description {
      font-size: 1rem;
    }
  }
`;

export const ProjectImageWrapper = {
  maxWidth: "25rem",
  border: "2px solid var(--outline-color)",
  borderRadius: "15px",
  padding: "0.5rem",
};

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 4rem;
  width: 70vw;
  margin: auto;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const ProjectLink = styled(Link)``;

// Exp portfolio styles
export const AllExpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  margin: 4rem auto 2rem auto;
`;

export const ExpYearWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 0.5rem;

  .year {
    text-orientation: upright;
    writing-mode: vertical-rl;
    white-space: nowrap;
    letter-spacing: -0.2rem;
    color: var(--highlight);
    font-size: 0.8rem;
  }
  .exp {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const ExpPilLWrapper = styled.div`
  border-bottom: 2px solid var(--outline-color);
  border-left: 2px solid var(--outline-color);
  padding: 1.5rem 2rem 1.5rem 1.5rem;

  .text {
    display: flex;
    flex-direction: row;
  }

  * {
    font-size: 1rem;
  }

  &:hover {
    background: var(--dark);
    cursor: crosshair;
    transition: 0.1s ease-out;
    border-bottom-right-radius: 1rem;
    color: var(--light);
  }

  .images: {
    display: none;
  }

  @media (max-width: 640px) {
    .text {
      display: flex;
      flex-direction: column;
    }
  }
`;
export const ExpTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 50%;

  .role {
    font-weight: bold;
  }
  .org {
    font-style: italic;
  }

  a {
    cursor: crosshair;
    text-decoration: underline solid var(--highlight);
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    width: 100%;

    .dot {
      display: none;
    }
  }
`;

export const ExpDescription = styled.div`
  color: var(--body-color);

  @media (max-width: 640px) {
    .tagline {
      margin-top: 1rem;
    }
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

export const PromptWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
