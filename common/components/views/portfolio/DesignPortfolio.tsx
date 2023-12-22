import React, {ReactNode} from "react";
import PortfolioBox from "@/common/components/elements/portfolio/PortfolioBox";
import designData from "@/common/data/portfolio/design.js"
import { 
    ProjectWrapper,
    ProjectImage,
    ProjectInfo,
    ProjectLink,
    Header
 } from "./PortfolioStyles";

interface DesignProjects {
    key: string,
    image: string,
    title: string,
    subtitle: string,
    description: string,
    prompt: string,
    link: string | null,
}

const ProjectBox = ({ project }:{ project: DesignProjects }) => {
    return (
        <ProjectWrapper>
            <ProjectImage src={project.image}/>
            <ProjectInfo>
                <div className="subtitle">
                    {project.subtitle}
                </div>
                <div className="title">
                    {project.title}
                </div>
                <div className="description">
                    {project.description}
                </div>
                {project.link ?
                    <ProjectLink href={project.link}>
                        <button className="link">
                            {project.prompt}
                        </button>
                    </ProjectLink>
                    :
                    <span className="link">
                        {project.prompt}
                    </span>
                }
            </ProjectInfo>
        </ProjectWrapper>
    )
}


export default function DesignPortfolio() {

    const renderDesignProjects = () => {
        const projects = Object.values(designData)
        let projectsArray : Array<ReactNode> = []
        projects.map((project) => (
            projectsArray.push(
                <ProjectBox project={project} key={project.key}/>
            )
        ))
        return projectsArray
    }

    return (
        <div>
            <PortfolioBox>
                <Header>
                    <div className="header">
                    {/* As a self-taught designer, I aspire to integrate empathy and creativity  
                    in order to craft digital experiences that evoke curiosity and delight. */}
                    </div>
                </Header>
                {renderDesignProjects()}
            </PortfolioBox>
        </div>
    )
}