import React, {ReactNode} from "react";
import PortfolioBox from "@/common/components/elements/portfolio/PortfolioBox";
import designData from "@/common/data/portfolio/design.js"
import styled from "styled-components";
import Link from "next/link";

const Header = styled.div`
    width: 70vw;
    margin: auto;
    margin-top: 5rem;

    .header {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
`

const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 4rem;
    width: 25rem;
    justify-content: center;

    .subtitle {
        font-size: 1rem;
    }
    .title {
        text-transform: uppercase;
        font-size: 2.5rem;
        margin-bottom: 1rem;
        font-weight: 600;
    }
    .description {
        font-size: 1.2rem;
    }
    .link {
        margin-top: 1rem;
        align-self: flex-start;
        border-radius: 20px;
        border: 2px solid #333;
        padding: 0.5rem 1rem 0.5rem 1rem;
        text-decoration: none;
        background: inherit;
        text-decoration: none;
        font-family: inherit;
        font-size: 1rem;
    }
    span {
        opacity: 0.5;
    }
    button {
        &:hover {
            margin-top: 0.9rem;
            font-size: 1.1rem;
            transition: 0.1s ease-out; 
            color: white;
            background: #333;
        }
        cursor: crosshair;
    }
`

const ProjectImage = styled.img`
    width: 25rem;
    height: 100%;
    object-fit: contain;
    border: 2px solid black;
    border-radius: 15px;
    padding: 0.5rem;
`

const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 60vw;
    margin: auto;
    padding-top: 5rem;
`

const ProjectLink = styled(Link)``


const ProjectBox = ({ project }:{ project: any }) => {
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
                        welcome! I'm kun •ᴗ•
                    </div>
                    <div className="about">
                        an aspiring creative technologist
                        eager to craft experiences that evoke 
                        curiosity and delight.
                    </div>
                </Header>
                {renderDesignProjects()}
            </PortfolioBox>
        </div>
    )
}