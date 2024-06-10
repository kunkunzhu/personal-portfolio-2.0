import React, { ReactNode, useState } from "react";
import devData from "@/common/data/portfolio/dev";
import Image from "next/image";
import PortfolioBox from "@/common/components/elements/portfolio/PortfolioBox";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import {
  Header,
  Arrow,
  DevProjTagWrapper,
  DevProjWrapper,
  DevProjInfo,
  DevProjLinkWrapper,
  DevProjHeader,
  DevProjTag,
  DevProjDescription,
  DevProjectImageWrapper,
  DevProjectsWrapper,
} from "./PortfolioStyles";
import IconFrame from "@/common/components/elements/portfolio/IconFrame";

interface DevProject {
  key: string;
  image: string;
  title: string;
  subtitle: string;
  code?: string;
  url?: string;
  description?: string;
  tech: string[];
  tags: string[];
}

const ProjectBox = ({ project }: { project: DevProject }) => {
  const renderTags = () => {
    let tagsArray: Array<ReactNode> = [];
    const techTags = project.tech;
    const miscTags = project.tags;

    miscTags.map((tag) => {
      tagsArray.push(<DevProjTag $misc={true}>{tag}</DevProjTag>);
    });
    techTags.map((tag) => {
      tagsArray.push(<DevProjTag $misc={false}>{tag}</DevProjTag>);
    });

    return tagsArray;
  };

  return (
    <DevProjWrapper>
      <DevProjDescription>
        <DevProjInfo>
          <DevProjHeader>
            <div className="title text">{project.title}</div>
            <DevProjLinkWrapper>
              {project.url && (
                <a href={project.url} target="_blank">
                  <AiOutlineLink size={30} color={"var(--outline-color)"} />
                </a>
              )}
              {project.code && (
                <a href={project.code} target="_blank">
                  <AiOutlineGithub size={30} color={"var(--outline-color)"} />
                </a>
              )}
            </DevProjLinkWrapper>
          </DevProjHeader>
          <div className="subtitle text">{project.subtitle}</div>
        </DevProjInfo>
        <DevProjTagWrapper> {renderTags()}</DevProjTagWrapper>
      </DevProjDescription>
      <Image
        className="image"
        src={project.image}
        alt="Project Thumbnail"
        style={DevProjectImageWrapper}
        placeholder="blur"
        blurDataURL={project.image}
        layout="responsive"
        width={300}
        height={200}
      />
    </DevProjWrapper>
  );
};

export default function DevPortfolio() {
  const [isGif, setIsGif] = useState(false);

  const renderDevProjects = () => {
    const projects = Object.values(devData);
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
            Kun <span className="icon">{IconFrame()}</span> is a
            curiosity-driven
            <span
              className="circle"
              onMouseEnter={() => setIsGif(true)}
              onMouseLeave={() => setIsGif(false)}
            >
              developer
            </span>{" "}
            aspiring to craft digital experiences that evoke serendipity{" "}
            <span className="flora">✺</span> and delight{" "}
            <span className="flora">✹˖꙳</span>
          </div>
          <div className="prompt">
            Scroll to check out the projects she's been building &ensp;
            <Arrow className="flora">↓</Arrow>
          </div>
          <hr />
        </Header>
        <DevProjectsWrapper>{renderDevProjects()}</DevProjectsWrapper>
      </PortfolioBox>
    </div>
  );
}
