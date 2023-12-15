import React, {ReactNode} from "react";
import expData from "@/common/data/portfolio/experience.js"
import PortfolioBox from "@/common/components/elements/portfolio/PortfolioBox";
import { 
    AllExpWrapper,
    ExpDescription,
    ExpPilLWrapper,
    ExpTitle,
    ExpYearWrapper,
    Header, 
} from "./PortfolioStyles";


interface ExperienceInterface {
    key: string,
    role: string,
    org: string,
    tagline: string,
    link: string | null,
    internship: boolean,
}

interface YearExperiencesInterface {
    year: string,
    exps: ExperienceInterface[];
}

interface YearExperiencesDataInterface {
    [key: string]: YearExperiencesInterface;
}

const ExpPill = ({ exp } : { exp: any }) => {
    return (
        <ExpPilLWrapper>
            <ExpTitle>
                <div className="role">{exp.role}</div>
                •
                <div className="org">{exp.org}</div>
            </ExpTitle>
            <ExpDescription>
                <div className="tagline">{exp.tagline}</div>
            </ExpDescription>
        </ExpPilLWrapper>
    )
}

export default function MiscPortfolio() {

    const renderExperiences = (yearData : ExperienceInterface[]) => {
        let expsArray : Array<ReactNode> = []
        yearData.map((exp: any) => (
            expsArray.push(
                <ExpPill exp={exp} key={exp.key}/>
            )
        ))
        return expsArray
    }

    // const renderYear = (yearExps: Experience[]) => {
    //     let expYearArray : Array<ReactNode> = []
    //     yearExps.forEach((exp) => {
    //         expYearArray.push(
    //             <
    //         )
    //     })
    //     return expYearArray
    // }

    const renderYears = (expData: YearExperiencesDataInterface) => {
        const expYears = Object.values(expData)
        let expYearsArray : Array<ReactNode> = []
        
        expYears.map((expYear) => (
            expYearsArray.push(
                <ExpYearWrapper>
                    <div className="year">
                        {expYear.year}
                    </div>
                    {renderExperiences(expYear.exps)}
                </ExpYearWrapper>
            )
        ))
        return expYearsArray
    }

    return (
        <div>
            <PortfolioBox>
                <Header>
                    <div className="header">
                        welcome! I'm kun •ᴗ•
                    </div>
                    <div className="about">
                        catch a glimpse into what I've been up to outside of work:
                    </div>
                </Header>
                <AllExpWrapper>
                    {renderYears(expData)}
                </AllExpWrapper>
            </PortfolioBox>
        </div>
    )
}