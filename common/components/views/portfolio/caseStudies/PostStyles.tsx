/** @format */

import { ReactNode } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70vw;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

/* NEXT JS IMAGE WRAPPERS */

export const HeroStyle = {
  width: "60%",
  height: "auto",
  maxheight: "35rem",
  paddingTop: "1.5rem",
};

export const TallHeroStyle = {
  height: "24rem",
  width: "auto",
  paddingTop: "1.5rem",
};

export const GeneralImageStyle = {
  width: "100%",
  margin: "1rem 0 1rem 0",
  height: "auto",
  borderRadius: "1rem",
};

/* HEADER STYLE */

export const Title = styled.div`
  max-width: 35vw;
  .title {
    font-size: 3rem;
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  .subtitle {
    font-size: 1.2rem;
    font-family: var(--title-font);
  }

  @media (max-width: 640px) {
    max-width: 80vw;

    .title {
      font-size: 2rem;
    }
  }
`;

export const Summary = styled.header`
  padding-top: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

export const NutshellWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  gap: 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const NutshellCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .title {
    font-weight: bold;
    font-size: 1.2rem;
    font-family: var(--title-font);
    padding-bottom: 1rem;

    hr {
      margin-top: 1rem;
      width: 75%;
    }
  }
  ul {
    list-style-type: none;
    li {
      opacity: 0.7;
      padding-bottom: 0.5rem;
    }
  }
`;

interface NutshellProps {
  timeline: string;
  role: string;
  team: string[];
}

export const Nutshell = (props: NutshellProps) => {
  const TeamDisplay = (team: string[]) => {
    let teamArray: Array<ReactNode> = [];
    team.map((team_member) => teamArray.push(<li>{team_member}</li>));
    return <ul>{teamArray}</ul>;
  };

  return (
    <NutshellWrapper>
      <NutshellCol>
        <div className="title">
          Team
          <hr />
        </div>
        <div className="content">{TeamDisplay(props.team)}</div>
      </NutshellCol>
      <NutshellCol>
        <div className="title">
          Role
          <hr />
        </div>
        <div className="content">{props.role}</div>
      </NutshellCol>
      <NutshellCol>
        <div className="title">
          Timeline
          <hr />
        </div>
        <div className="content">{props.timeline}</div>
      </NutshellCol>
    </NutshellWrapper>
  );
};

/* CONTENT STYLE */

export const Content = styled.div``;

export const Paragraph = styled.div`
  .subheading {
    font-family: var(--title-font);
    font-size: 1.5rem;
    padding: 2.5rem 1.5rem 1.5rem 0;
  }
  .subsubheading {
    font-size: 1.2rem;
    padding: 1rem 0 0 0.5rem;
    text-transform: uppercase;
    color: var(--highlight);
    opacity: 0.75;
  }
  .quote {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 2rem;
    line-height: 2rem;
    color: var(--highlight);
    padding: 15px;
    padding-left: 50px;
    font-family: var(--title-font);
  }
  .paragraph {
    font-size: 0.9rem;
    padding: 1rem 0 1rem 0;
    b {
      font-family: inherit;
      &:hover {
        color: var(--highlight);
      }
    }
    a {
      font-family: inherit;
      color: inherit;
      opacity: 0.6;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        text-decoration-style: wavy;
        text-decoration-color: var(--highlight);
      }
    }
    ol {
      max-width: 75%;
      margin: auto;
      padding-top: 1rem;
      li {
        font-size: 0.9rem;
        opacity: 0.8;
      }
    }
  }
  .imgRow {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }

  @media (max-width: 640px) {
    .quote {
      font-size: 1rem;
      line-height: 1.2rem;
    }
  }
`;

export const Heading = styled.h3`
  margin: 2rem;
  margin-left: 0;
  font-size: 2.5rem;
  font-weight: bold;
  font-family: var(--title-font);
  text-transform: uppercase;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

export const SectionDivider = styled.hr`
  margin-top: 1rem;
  border: 0;
  border-top: 0.5px solid;
  opacity: 0.3;
`;

export const Section = styled.div`
  padding: 2rem 0 2rem 0;
  margin-top: 2rem;
  line-height: 150%;
`;
