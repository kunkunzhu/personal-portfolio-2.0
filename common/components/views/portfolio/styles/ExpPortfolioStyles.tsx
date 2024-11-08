/** @format */

import styled from "styled-components";

export const AllExpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 4rem auto 2rem auto;
`;

export const ExpDescription = styled.div`
  color: var(--body-color);

  @media (max-width: 640px) {
    .tagline {
      margin-top: 1rem;
    }
  }
`;

export const ExpPillWrapper = styled.div`
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
