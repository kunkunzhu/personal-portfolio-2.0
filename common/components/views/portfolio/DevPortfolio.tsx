import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import PortfolioBox from "@/common/components/elements/portfolio/PortfolioBox";
import { AiOutlineLink } from "react-icons/ai";
import devData from "@/common/data/portfolio/dev.js"

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

const Projects = styled.ul`
    margin: 5rem auto auto auto;
    display: flex;
    flex-direction: row;
    width: 70vw;
    .projects {
        list-style: none;
        display: table-cell;
        width: 50%;
        padding: 2.5rem 2rem 5rem 2rem;
    }
    .image {
        display: table-cell;
        margin-left: 5rem;
        width: 50%;
    }
`

const ProjectWrapper = styled.li`
    .title {
        display: flex;
        flex-direction: row;
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: bold;
        letter-spacing: 0.2rem;
        .icon {
            margin-left: 0.5rem;
            cursor: crosshair;
        }
        :hover {
            opacity: 0.8;
        }
    }
    margin-bottom: 2rem;
`

const ProjectImage = styled.img`
    width: 26rem;
    height: 14.5rem;
    object-fit: cover;
    border: 2px solid black;
    border-radius: 15px;
    padding: 0.2rem;
`

export default function DevPortfolio() {

    const defaultDisplay = "https://venturebeat.com/wp-content/uploads/2014/10/loading_desktop_by_brianmccumber-d41z4h6.gif?fit=400%2C225&strip=all"

    const [display, setDisplay] = useState(defaultDisplay)

    const Project = ({ project }: { project: any }) => {
        return (
            <ProjectWrapper 
            onMouseOver={() => setDisplay(project.image)} 
            onMouseLeave={() => setDisplay(defaultDisplay)}>
                <div className="title">
                    {project.title}
                    <a href={project.site} target='_blank' rel='noreferrer'>
                        <AiOutlineLink className="icon"/>
                    </a>
                </div>
                <div className="description">
                    {project.description}
                </div>
            </ProjectWrapper>
        )
    }

    const renderDevProjects = () => {
        const projects = Object.values(devData)
        let projectsArray : Array<ReactNode> = []
        projects.map((project) => {
            projectsArray.push(
                <Project project={project}/>
            )
        })
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
                <Projects>
                    <ul className="projects">
                        {renderDevProjects()}
                    </ul>
                    <div className="image">
                        <ProjectImage src={display}/>
                    </div>
                </Projects>
            </PortfolioBox>
        </div>
    )
}