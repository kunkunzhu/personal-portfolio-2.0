/** @format */

import styled from "styled-components";

export const AllProjWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 0 auto 2rem auto;
`;

export const ProjPillWrapper = styled.div`
  border-bottom: 2px solid var(--outline-color);
  border-left: 2px solid var(--outline-color);
  padding: 2rem;

  * {
    font-size: 1rem;
  }

  &:hover {
    background: var(--dark);
    transition: 0.1s ease-out;
    border-bottom-right-radius: 1rem;
    color: var(--light);
    padding-top: 4.5rem;
    padding-bottom: 4.5rem;

    .tech {
      color: var(--light);
      opacity: 1;
    }
  }

  @media (max-width: 640px) {
  }
`;

export const ProjHeader = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  ${ProjPillWrapper}:hover & {
    gap: 1rem;
  }

  .title {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-family: var(--title-font);
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .subtitle {
    opacity: 0.75;
  }

  a {
    cursor: crosshair;
    text-decoration: underline solid var(--highlight);
  }

  @media (max-width: 640px) {
  }
`;

export const ProjTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  ${ProjPillWrapper}:hover & {
    // transition: 0.2s ease-in 0s;
    flex-direction: column;
  }
`;

export const ProjTags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  .main {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    color: var(--highlight);
  }

  .tech {
    opacity: 0;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    color: var(--outline-color);
  }

  .tag {
    font-family: var(--text-font);
    border: 2px solid;
    opacity: 0.75;
    border-radius: 25px;
    padding: 0.2rem 0.5rem;
    word-break: break-all;
  }
`;

export const ProjLinks = styled.div`
  display: none;
  opacity: 0.5;

  ${ProjPillWrapper}:hover & {
    display: flex;
    gap: 0.5rem;
    flex-direction: row;
  }
`;
