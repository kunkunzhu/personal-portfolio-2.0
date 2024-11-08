/** @format */

import React, { ReactNode, useState } from "react";
import { projectsData } from "@/common/data/portfolio/projects.js";
import Image from "next/image";
import PortfolioBox from "@/common/components/elements/portfolio/PortfolioBox";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import IconFrame from "@/common/components/elements/portfolio/IconFrame";
import { Arrow, Header } from "./styles/PortfolioStyles";
import {
  AllProjWrapper,
  ProjHeader,
  ProjLinks,
  ProjPillWrapper,
  ProjTags,
  ProjTitle,
} from "./styles/ProjPortfolioStyles";

interface DevProject {
  key: string;
  image?: string;
  title: string;
  subtitle: string;
  code?: string;
  url?: string;
  tech: string[];
  tags: string[];
}

const ProjectBox = ({ project }: { project: DevProject }) => {
  return (
    <ProjPillWrapper>
      <ProjHeader>
        <ProjTitle>
          <div className="title">
            {project.title}{" "}
            <ProjLinks>
              {project.url && (
                <a href={project.url} target="_blank">
                  <AiOutlineLink size={25} color={"var(--body-color)"} />
                </a>
              )}
              {project.code && (
                <a href={project.code} target="_blank">
                  <AiOutlineGithub size={25} color={"var(--body-color)"} />
                </a>
              )}
            </ProjLinks>
          </div>

          <ProjTags>
            <div className="main">
              {project.tags.map((tag, key) => (
                <div className="tag" key={key}>
                  {tag}
                </div>
              ))}
            </div>
            <div className="tech">
              {project.tech.map((tag, key) => (
                <div className="tag" key={key}>
                  {tag}
                </div>
              ))}
            </div>
          </ProjTags>
        </ProjTitle>
        <div className="subtitle">{project.subtitle}. ᵕ̈</div>
      </ProjHeader>
    </ProjPillWrapper>
  );
};

export default function ProjectsPortfolio() {
  const [isGif, setIsGif] = useState(false);

  const renderDevProjects = () => {
    const projects = Object.values(projectsData.dev);
    let projectsArray: Array<ReactNode> = [];
    projects.map((project) => {
      projectsArray.push(<ProjectBox key={project.key} project={project} />);
    });
    return projectsArray;
  };

  return (
    <div>
      <PortfolioBox gifBackground={isGif}>
        <Header>
          <div className="title">
            Kun <span className="icon">{IconFrame()}</span> aspires to
            <span
              className="circle"
              onMouseEnter={() => setIsGif(true)}
              onMouseLeave={() => setIsGif(false)}
            >
              craft
            </span>
            digital experiences that evoke serendipity{" "}
            <span className="flora">✺</span> and delight{" "}
            <span className="flora">✹˖꙳</span>
          </div>
          <div className="prompt">
            Scroll to check out the projects she's been building &ensp;
            <Arrow className="flora">↓</Arrow>
          </div>
          <hr />
        </Header>
        <AllProjWrapper>{renderDevProjects()}</AllProjWrapper>
      </PortfolioBox>
    </div>
  );
}
