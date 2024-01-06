import React, {ReactNode, useState} from "react";
import Image from "next/image";
import PortfolioBox from "@/common/components/elements/portfolio/PortfolioBox";
import IconFrame from "@/common/components/elements/portfolio/IconFrame";
import designData from "@/common/data/portfolio/design.js"
import { 
    ProjectWrapper,
    ProjectImageWrapper,
    ProjectInfo,
    ProjectLink,
    Header,
    Arrow
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
            <Image
                src={project.image}
                alt="Project Thumbnail"
                style={ProjectImageWrapper}
                placeholder="blur"
                blurDataURL={project.image}
                layout="responsive"
                width={1000}
                height={500}
                />
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

    const [isGif, setIsGif] = useState(false)

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
            <PortfolioBox gifBackground={isGif}>
                <Header>
                    <div className="title">
                        Kun <span className="flora">{IconFrame()}</span> is a curiosity-driven
                        <span className="circle" onMouseEnter={() => setIsGif(true)} onMouseLeave={() => setIsGif(false)}>designer</span> aspiring to craft 
                        digital experiences that evoke curiosity <span className="flora">✺</span> and delight <span className="flora">✹˖꙳</span>
                    </div>
                    <div className="prompt">
                        Scroll to check out her past design work &ensp;
                        <Arrow className="flora">↓</Arrow>
                    </div>
                    <hr/>
                </Header>
                {renderDesignProjects()}
            </PortfolioBox>
        </div>
    )
}