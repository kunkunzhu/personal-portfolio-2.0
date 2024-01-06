import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import PortfolioBox from "@/common/components/elements/portfolio/PortfolioBox";
import { 
    HeroStyle, 
    GeneralImageStyle,
    Summary, 
    Title,
    Heading,
    Paragraph,
    Section,
    SectionDivider,
    Wrapper,
    Nutshell,
} from './PostStyles'

const ImagesRow = styled.div`
    padding-top: 1rem;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    overflow: hidden;
    * {
        max-width: 50%;
        height: auto;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        * {
            max-width: 100%;
        }
    }
`

const ImagesCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    * {
        max-width: 70%;
        height: auto;
    }
`

const ButtonRow = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`

const OptionButtons = styled.button`
    margin-top: 1rem;
    align-self: flex-start;
    border-radius: 20px;
    border: 2px solid var(--outline-color);
    color: var(--outline-color);
    padding: 0.5rem 1rem 0.5rem 1rem;
    text-decoration: none;
    background: inherit;
    font-family: inherit;
    font-size: 1rem;
    text-transform: uppercase;
    width: 25%;
    font-family: var(--title-font);
    
    &:hover {
        margin-top: 0.9rem;
        font-size: 1.1rem;
        transition: 0.1s ease-out; 
        color: var(--body-color);
        background: var(--outline-color);
    }
    cursor: crosshair;

    @media (max-width: 480px) {
        font-size: 0.8rem;
        width: 80%;
    }
`

const Technova22Reflection = () => {
    
    return (
        <Wrapper>
            HELLO WORLD
        </Wrapper>
    )
}

const Technova22DesignProjects = () => {

    return (
        <Wrapper>
            <Section>
                <Heading>1. Branding + Style Guide</Heading>
                <Paragraph>
                    <div className="paragraph">
                        Last year, we intentionally avoided adhering to a specific theme in order to 
                        shape a memorable visual identity of our inaugural event. With the brand now 
                        clearly defined, we now had more creative freedom. As such, we chose to have 
                        a space theme for the second iteration of the hackathon 🚀🌌👩🏼‍🚀🪐 
                    </div>
                    <div className="paragraph">
                        In order to maintain brand consistency, we inherited the same style guide from 
                        the previous year. But in preparation of the new theme, we incorporated dark mode 
                        into the existing color palette.
                    </div>
                </Paragraph>
                <ImagesRow>
                    <ImagesCol>
                        <Image 
                            src="https://i.ibb.co/tmCg2dy/Typography-1.png"
                            alt="typography"
                            style={GeneralImageStyle}
                            width={450}
                            height={500}
                            />
                        <Image 
                            src="https://i.ibb.co/9Txv8Cx/Logo-1.png"
                            alt="logo"
                            style={GeneralImageStyle}
                            width={500}
                            height={450}
                            />
                    </ImagesCol>
                    <Image
                        src="https://i.ibb.co/YkBFJd1/Colours-1.png"
                        alt="colours"
                        style={GeneralImageStyle}
                        width={900}
                        height={600}
                        />
                </ImagesRow>
            </Section>
            <SectionDivider/>
            <Section>
                <Heading>2. Website UX</Heading>
                <Paragraph>
                    <ImagesRow>
                        <div className="paragraph">
                            As a central resources hub, the hackathon website played a key role in introducing 
                            the event and attracting potential attendees — both hackers and sponsors. As such, 
                            it’s one of the largest and most important projects the design team worked on over 
                            the course of the term. Each designer participated in the project by taking ownership 
                            of one part of the website, and we replied on feedbacks from each other to create 
                            refinements and compile into the final version. Check out the <a href="https://2022.itstechnova.org/" target="_blank">
                            implemented website</a> and the <a href="https://bit.ly/3SV3XIx" target="_blank">Figma prototype</a> :)
                        </div>
                        <Image 
                            style={{marginLeft: "2.5rem"}} 
                            src="https://i.ibb.co/Wfs8wGD/ezgif-5-4f1190c7d5.gif"
                            alt="gif scroll of website"
                            width={800}
                            height={400}
                            />
                    </ImagesRow>
                    <div className="paragraph">
                        Designing a website entirely in dark mode turned out to be both a fun and challenging 
                        experience! The Design team worked in close collaboration with the Engineering team, 
                        who was responsible for implementation of the website, in order to create an navigational 
                        experience that prioritized usability and technical feasibility. We wanted to keep the 
                        website visually appealing and implementable all while keeping accessibility in mind by 
                        conducting extensive cross-device testing and adhering to accessibility guidelines such 
                        as <a href="https://bit.ly/3GilkLD" target="_blank">WCAG compliance checker</a> and 
                        <a href="https://color.adobe.com/create/color-accessibility" target="_blank">Adobe color accessibility tool</a>. 
                    </div>
                    <div className="paragraph">
                        One of my personal favourite part of the website was the Sponsorship + Partnership Showcase. 
                        We decided to showcase the information for each organization that generously sponsored or 
                        partnered with the hackathon in the format of space ticket, which was so fun to make.
                    </div>
                    <Image 
                        src="https://i.ibb.co/80wF2Rg/Frame-772-1.png"
                        alt="space ticket"
                        style={GeneralImageStyle}
                        width={1920}
                        height={1080}
                        />
                    <div className="paragraph">
                        Recognizing that many of hackers access the website from their mobile devices, we also sought 
                        to prioritize <a href="https://bit.ly/3SWx1iI" target="_blank">mobile UX design</a> for this term. 
                        One of the challenges that we came across is the mobile display for the Sponsorship + Partnership 
                        Showcase section. To resolve this, we synced up with the developers from Engineering team to explore 
                        possible alternatives and eventually arriving at a consensus — optimizing for a smooth navigational 
                        experience keeping within the constraints of what is technically feasible. This was one of the many 
                        moments across this experience that I really gained a sense of the indispensable value within cross-team 
                        collaboration :)
                    </div>
                </Paragraph>
            </Section>
            <Section>
                <Heading>3. Social Media Graphics</Heading>
                <Paragraph>
                    <div className="paragraph">
                        Maintaining an active social media presence was important for attracting potential attendees and ensuring 
                        information about the event was easily accessible. Working closely with the Marketing team, we designed regular 
                        social media posts to promote the event. 
                    </div>
                    <div className="paragraph">
                        One thing that we to ensure a cohesive visual theme for our Instagram feed is creating connected backgrounds 
                        for the individual Instagram posts — with the background fading from a darker to a lighter tone. 
                    </div>
                    <div className="paragraph">
                        Some of my favourite designs that I had worked on were graphics showcasing the logos of our sponsors, 
                        whose generousity enabled the success of the event. It was a fun experience coming up with ways to seamlessly incorporate the
                        unique logo of each company into the 🚀space🪐 theme of the event.
                    </div>
                    <Image 
                        src="https://i.ibb.co/D84dssc/Untitled-18.png"
                        alt="sponsors"
                        style={GeneralImageStyle}
                        width={2000}
                        height={500}
                        />
                </Paragraph>
            </Section>
            <Section>
                <Heading>4. Swags</Heading>
                <Paragraph>
                    <div className="paragraph">
                        Swag is probably everyone’s favourite part about attending a hackathon. As a designer, this was also one of my 
                        favourite project that I worked on for the hackathon! Each hacker at TechNova received a wide range of swag items: 
                        from T-shirt, waterbottle, to stickers. In particular, I created the design for the tote bag. 
                    </div>
                    <div className="paragraph">
                        It was my first time designing a swag item, and I absolutely loved the whole experience. I would occasionally see someone
                        carrying a tote bag that I designed walking through campus, and it always makes me feel so happy whenever that happens :)
                    </div>
                    <Image 
                        src="https://i.ibb.co/Wvk3BCL/TOTES.png"
                        alt="sponsors"
                        style={GeneralImageStyle}
                        width={1920}
                        height={1080}
                        />
                </Paragraph>
            </Section>
        </ Wrapper>
    )
}

function Technova22PostContent() {

    const [displayProjects, setDisplayProjects] = useState(true)

    return(
        <>
            <Wrapper>
                <Summary>
                    <Title>
                        <div className="title">
                            TechNova 2022
                        </div>
                        <div className="subtitle">
                            Evolving the visual experience of UWaterloo's gender empowerment hackathon.
                        </div>
                    </Title>
                    <Image 
                        src="https://i.ibb.co/dBhmQ7S/15-Macbook-Pro-Mockup-Left-View.png"
                        alt="Project Hero"
                        width={1200}
                        height={800}
                        style={HeroStyle}
                        />
                </Summary>
                <Section>
                    <Paragraph>
                        <div className="paragraph">
                            TechNova’s mission is to create safe, inclusive and empowering spaces for women 
                            and non-binary individuals to start, grow and thrive in the technology industry. 
                            While traditional hackathons tend to place an emphasis on competition and feel 
                            like a somewhat intimidating space, TechNova focuses on creating a welcoming 
                            environment for individuals of underrepresented genders to connect and learn.
                        </div>
                        <div className="paragraph">
                            Volunteering at TechNova marked the beginning of my journey in UX design and 
                            graphic design. Returning to the same team as a Design Lead for the second iteration 
                            of the hackathon felt like an incredibly rewarding and exciting opportunity. From 
                            May to August 2022, I had the opportunity to lead a very talented team of designers 
                            to see through the fruition of another successful event :)
                        </div>
                        <Nutshell
                        role="Product Manager, UX Designer, Graphic Designer"
                        team={[
                            "Tianke, Cat, Grace, Ananya, Chatumini (Designers)", 
                            "Amanda, Kelly, Mahzabin (Web Developers)",
                            "Elizabeth (Marketing Lead)"
                        ]}
                        timeline="April - Aug 2022 (4 months)"
                        />
                        <SectionDivider/>
                        <Paragraph>
                            <div className="paragraph">
                                Click below to view more!
                            </div>
                        </Paragraph>
                        <ButtonRow>
                            <OptionButtons onClick={() => setDisplayProjects(true)}>
                                design projects
                            </OptionButtons>
                            <OptionButtons onClick={() => setDisplayProjects(false)}>
                                reflection
                            </OptionButtons>
                            <OptionButtons>
                                <Link href="/portfolio/design/technova21">
                                    Technova 2022
                                </Link>
                            </OptionButtons>
                        </ButtonRow>
                    </Paragraph>
                    </Section>
                <SectionDivider/>
            </Wrapper>
            {displayProjects ?
                Technova22DesignProjects()
                :
                Technova22Reflection()
            }
        </>
    )
}

export default function Technova22Post() {
    return (
        <PortfolioBox gifBackground={false}>
            <Technova22PostContent/>
        </PortfolioBox>
    )
}