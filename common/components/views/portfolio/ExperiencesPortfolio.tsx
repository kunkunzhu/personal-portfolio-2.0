/** @format */

import React, { ReactNode, useState } from "react";
import {
  extraExpData,
  workExpData,
} from "@/common/data/portfolio/experience.js";
import IconFrame from "@/common/components/elements/portfolio/IconFrame";
import PortfolioBox from "@/common/components/elements/portfolio/PortfolioBox";
import {
  AllExpWrapper,
  ExpDescription,
  ExpPillWrapper,
  ExpTitle,
  ExpYearWrapper,
} from "./styles/ExpPortfolioStyles";
import {
  Arrow,
  Header,
  PromptWrapper,
  TogglePill,
  TogglePillWrapper,
} from "./styles/PortfolioStyles";

interface ExperienceInterface {
  key: string;
  role: string;
  org: string;
  tagline?: string[];
  link: string | null;
  internship: boolean;
}

interface YearExperiencesInterface {
  year: string;
  exps: ExperienceInterface[];
}

interface YearExperiencesDataInterface {
  [key: string]: YearExperiencesInterface;
}

const ExpPill = ({ exp }: { exp: ExperienceInterface }) => {
  return (
    <ExpPillWrapper>
      <div className="text">
        <ExpTitle>
          <div className="role">{exp.role}</div>
          <span className="dot">•</span>
          {exp.link ? (
            <a className="org" href={exp.link} target="_blank">
              {exp.org}
            </a>
          ) : (
            <div className="org">{exp.org}</div>
          )}
        </ExpTitle>
        {exp.tagline && <ExpDescription>{exp.tagline}.</ExpDescription>}
      </div>
    </ExpPillWrapper>
  );
};

export default function ExpPortfolio() {
  const [isGif, setIsGif] = useState<boolean>(false);
  const [isWork, setIsWork] = useState<boolean>(true);

  const renderExperiences = (yearData: ExperienceInterface[]) => {
    let expsArray: Array<ReactNode> = [];
    yearData.map((exp: ExperienceInterface) =>
      expsArray.push(<ExpPill exp={exp} key={exp.key} />)
    );
    return expsArray;
  };

  const renderYears = (expData: YearExperiencesDataInterface) => {
    const expYears = Object.values(expData);
    let expYearsArray: Array<ReactNode> = [];

    expYears.map((expYear) => {
      expYearsArray.push(
        <ExpYearWrapper>
          <div className="year">{expYear.year}</div>
          <div className="exp">{renderExperiences(expYear.exps)}</div>
        </ExpYearWrapper>
      );
    });
    return expYearsArray;
  };

  return (
    <div>
      <PortfolioBox gifBackground={isGif}>
        <Header>
          <div className="title">
            Kun <span className="icon">{IconFrame()}</span> thrives in spaces of
            interdisciplinary
            <div
              className="circle"
              onMouseEnter={() => setIsGif(true)}
              onMouseLeave={() => setIsGif(false)}
            >
              collaboration
            </div>{" "}
            <span className="flora">✦.˖✶</span>
          </div>
          <PromptWrapper>
            <div className="prompt">
              Scroll to see the spaces she’s been exploring &ensp;
              <Arrow className="flora">↓</Arrow>
            </div>
            <TogglePillWrapper>
              <TogglePill onClick={() => setIsWork(true)} $current={isWork}>
                work
              </TogglePill>
              <TogglePill onClick={() => setIsWork(false)} $current={!isWork}>
                not work
              </TogglePill>
            </TogglePillWrapper>
          </PromptWrapper>
          <hr />
        </Header>
        {isWork ? (
          <AllExpWrapper>{renderYears(workExpData)}</AllExpWrapper>
        ) : (
          <AllExpWrapper>{renderYears(extraExpData)}</AllExpWrapper>
        )}
      </PortfolioBox>
    </div>
  );
}
