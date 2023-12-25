import React, {ReactNode, useState} from "react";
// import Image from "next/image";
import expData from "@/common/data/portfolio/experience.js"
// import { generateRandomItem } from "@/common/utils/random";
import IconFrame from "@/common/components/elements/portfolio/IconFrame";
import PortfolioBox from "@/common/components/elements/portfolio/PortfolioBox";
import { 
    AllExpWrapper,
    ExpDescription,
    ExpPilLWrapper,
    ExpTitle,
    ExpYearWrapper,
    Header, 
    Arrow,
    // ClubImageWrapper,
} from "./PortfolioStyles";


interface ExperienceInterface {
    key: string,
    role: string,
    org: string,
    tagline: string,
    link: string | null,
    // images: string[],
    internship: boolean,
}

interface YearExperiencesInterface {
    year: string,
    exps: ExperienceInterface[];
}

interface YearExperiencesDataInterface {
    [key: string]: YearExperiencesInterface;
}

const ExpPill = ({ exp } : { exp: ExperienceInterface }) => {
    return (
        <ExpPilLWrapper>
            <div className="text">
                <ExpTitle>
                    <div className="role">{exp.role}</div>
                    •
                    {exp.link ? 
                    <a className="org" href={exp.link} target="_blank">{exp.org}</a>
                    :
                    <div className="org">{exp.org}</div>
                    }
                </ExpTitle>
                <ExpDescription>
                    <div className="tagline">{exp.tagline}.</div>
                </ExpDescription>
            </div>
            {/* <div className="images">
                {renderExpImages(exp.images)}
            </div> */}
        </ExpPilLWrapper>
    )
}

export default function MiscPortfolio() {

    const [isGif, setIsGif] = useState(false)

    const renderExperiences = (yearData : ExperienceInterface[]) => {
        let expsArray : Array<ReactNode> = []
        yearData.map((exp: ExperienceInterface) => (
            expsArray.push(
                <ExpPill exp={exp} key={exp.key}/>
            )
        ))
        return expsArray
    }

    const renderYears = (expData: YearExperiencesDataInterface) => {
        const expYears = Object.values(expData)
        let expYearsArray : Array<ReactNode> = []
        
        expYears.map((expYear) => {
            expYearsArray.push(
                <ExpYearWrapper>
                    <div className="year">
                        {expYear.year}
                    </div>
                    <div className="exp">
                        {renderExperiences(expYear.exps)}
                    </div>
                </ExpYearWrapper>
            )
            })
        return expYearsArray
    }

    return (
        <div>
            <PortfolioBox gifBackground={isGif}>
                <Header>
                    <div className="title">
                        Kun <span className="flora">{IconFrame()}</span> thrives in environments of
                        <div className="circle" onMouseEnter={() => setIsGif(true)} onMouseLeave={() => setIsGif(false)}>interdisciplinary</div> collaboration <span className="flora">✦.˖✶</span>
                    </div>
                    <div className="prompt">
                        For work-related experiences, grab a copy of her resume <a href="/resume.pdf" target="_blank">here</a>. <br/>
                        Alternatively, check out the spaces she’s been exploring & the communities she’s been a part of &ensp;
                        <Arrow>↓</Arrow>
                    </div>
                    <hr/>
                </Header>
                <AllExpWrapper>
                    {renderYears(expData)}
                </AllExpWrapper>
            </PortfolioBox>
        </div>
    )
}