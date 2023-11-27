import React from "react";
import PortfolioBox from "@/common/components/elements/portfolio/PortfolioBox";
import { 
    Hero, 
    Summary, 
    Title,
    Heading,
    Paragraph,
    Section,
    SectionDivider,
    Wrapper,
    ImageRow
} from './PostStyles'

function Technova22PostContent() {
    return(
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
                <Hero src="https://i.ibb.co/dBhmQ7S/15-Macbook-Pro-Mockup-Left-View.png"/>
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
                </Paragraph>
            </Section>
            <SectionDivider/>
            <Section>
                <Heading>1. Branding + Style Guide</Heading>
                <Paragraph>
                    <div className="paragraph">
                        Last year, we intentionally avoided adhering to a specific theme in order to 
                        shape a memorable visual identity of our inaugural event. With the brand now 
                        clearly defined, we had more creative freedom in exploring specific themes for 
                        the second iteration of the hackathon. Thus introducing: space theme  🚀🌌👩🏼‍🚀🪐 
                    </div>
                    <div className="paragraph">
                        In order to maintain brand consistency, we inherited the same style guide from 
                        the previous year. But in preparation of the new theme, we incorporated dark mode 
                        into the existing color palette.
                    </div>
                </Paragraph>
            </Section>
            <Section>
                <Heading>2. Website UX</Heading>
                <Paragraph>
                    <div className="paragraph">
                        As a central resources hub, the hackathon website played a key role in introducing 
                        the event and attracting potential attendees — both hackers and sponsors. As such, 
                        it’s one of the largest and most important projects the design team worked on over 
                        the course of the term. Each designer participated in the project by taking ownership 
                        of one part of the website, and we replied on feedbacks from each other to create 
                        refinements and compile into the final version. Check out the <a href="https://2022.itstechnova.org/" target="_blank">
                        implemented website</a> and the <a href="https://bit.ly/3SV3XIx" target="_blank">Figma prototype</a> :)
                    </div>
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
                    <ImageRow> 
                        {/* make custom style for this ahhhhh*/}
                        <img src="https://i.ibb.co/b2tGrYv/Goovy-1.png"/>
                        <img src="https://i.ibb.co/wSr46nL/IMG-4841.jpg"/>
                    </ImageRow>
                    <div className="paragraph">
                        It was my first time designing a swag item, and I absolutely loved the whole experience. I would occasionally see someone
                        carrying a tote bag that I designed walking through campus, and it always makes me feel so happy whenever that happens :)
                    </div>
                </Paragraph>
            </Section>
        </Wrapper>
    )
}

export default function Technova22Post() {
    return (
        <PortfolioBox>
            <Technova22PostContent/>
        </PortfolioBox>
    )
}