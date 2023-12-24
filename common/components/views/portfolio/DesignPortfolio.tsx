import React, {ReactNode} from "react";
import PortfolioBox from "@/common/components/elements/portfolio/PortfolioBox";
import designData from "@/common/data/portfolio/design.js"
import { 
    ProjectWrapper,
    ProjectImage,
    ProjectInfo,
    ProjectLink,
    Header,
    IconWrapper,
    Arrow
 } from "./PortfolioStyles";
 import Image from "next/image";
 import * as myPics from "../../../../public/aboutImages"
import { generateRandomItem } from "../about/About";

interface DesignProjects {
    key: string,
    image: string,
    title: string,
    subtitle: string,
    description: string,
    prompt: string,
    link: string | null,
}

const iconFrame = () => {
    const myPicsArray = Object.values(myPics);

    return (
        <Image
            src={generateRandomItem(myPicsArray)}
            alt="Kun"
            style={IconWrapper}
            placeholder="blur"
            quality={75}
        />
    )
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
                    <div className="title">
                        Kun <span className="flora">{iconFrame()}</span> is a curiosity-driven designer <span className="flora">✺</span> aspiring to craft 
                        digital experiences that evoke curiosity and delight <span className="flora">✹˖꙳</span>
                    </div>
                    <div className="prompt">
                        Scroll to check out her design work &ensp;
                        <Arrow>↓</Arrow>
                    </div>
                    <hr/>
                </Header>
                {renderDesignProjects()}
            </PortfolioBox>
        </div>
    )
}