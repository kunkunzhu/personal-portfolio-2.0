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
    Wrapper
 } from './PostStyles'

function Technova21PostContent() {
    return (
        <Wrapper>
            <Summary>
                <Title>
                    <div className="title">
                        Technova 2021
                    </div>
                    <div className="subtitle">
                        Innovating the visual identity for UWaterloo's inaugural gender empowerment hackathon.
                    </div>
                </Title>
                <Hero src="https://i.ibb.co/1ddn0L6/Hero.png"/>
            </Summary>
            <Section>
                <Paragraph>
                    <div className="paragraph">
                        Tech has traditionally been a male-dominated industry. Creating opportunities in tech for female-identifying
                        individuals is about leveling the playing field and empowering everyone to pursue their potentials 
                        despite the systemic barriers and gender expectations. 
                    </div>
                    <div className="paragraph">
                        With this mission in mind, Technova is the first global hackathon hosted by the University of Waterloo that 
                        focuses on empowering marginalized genders. 
                        Participants gathered from 30+ countries - including 500 hackers, 80 volunteers, and 20 organizers - joined 
                        together at TechNova 2021 for a week of preparing, connecting, and hacking. 
                        From May to August 2021, I had the opportunity to work alongside 5 other designers to define the visual identity, 
                        deliver the website design, and create social media content for this event.
                    </div>
                </Paragraph>
            </Section>
            <SectionDivider/>
                <Section>
                    <Heading>Process //</Heading>
                    <Paragraph>
                        <h5 className="subheading">1. Branding + Style Guide</h5>
                        <div className="paragraph">
                            Establishing the visual identity for the event is the first task given to the design team. 
                            We wanted to define the logo, colours, and typography which will represent the branding of the hackathon 
                            As an inaugural event, these initial branding decisions will critically impact how TechNova will be perceived as 
                            an organization. As a team, we spent days brainstorming and exchanging feedbacks on Figma:
                        </div>
                        <img 
                        src="https://i.ibb.co/jVP2Drm/1-ideations.png" 
                        alt="Here are some snapshots of our collaborative workspaces on Figma!"
                        className="imgDisplay"/>
                        <div className="paragraph">
                            The Triple Tile became our logo as it concisely communicates the pillars 
                            of our values, which are <b> career, community, and community</b>.
                            As for typography, &thinsp;<a href="https://www.lexend.com/">Lexend</a>, 
                            a font specifically designed to accommadate diverse reading needs, was 
                            chosen for our wordmark. Quicksand and Poppins were selected 
                            for subtitles and text.
                        </div>
                        <img 
                        src="https://i.ibb.co/BsxvKwK/1-typography.png" 
                        alt="typography & logo marks"
                        className="imgDisplay"/>
                        <div className="paragraph">
                            We wanted the feelings conveyed by our visual branding to be in congruence 
                            with the community-centered values held by the organization, so we chose 
                            vibrant and contrasting tones of pink, teal, and purple for a &thinsp;
                            <a href="https://color.adobe.com/create/color-accessibility">colour blind safe palette</a>
                            &thinsp;that portrayed a bright and friendly impression. 
                        </div>
                        <img 
                        src="https://i.ibb.co/dmy4J77/1-color.png" 
                        alt="color schemes"
                        className="imgDisplay"/>
                        <h5 className="subheading">2. Website UX</h5> 
                        <div className="paragraph">
                            I supported the project manager the design lead in creating the website for the hackathon, 
                            which serves as a one-stop location for all the relevant information regarding the event.
                        </div>
                        <div className="paragraph">
                            Different users (e.g. hackers, mentors, and sponsers) will have different priorities 
                            in mind while visiting the hackathon site. For the single-page application, we defined 
                            the navigation bar with the most important sections of the website, so that individuals 
                            can easily be directed the section of the website that is the most meaningful to them and 
                            perform their desired actions.
                        </div>
                        <img 
                        src="https://i.ibb.co/B4kwvp3/2-problem.png" 
                        alt="define the problem" />
                        <div className="paragraph">
                            However, we wanted to especially prioritize the experience 
                            of the hackers and ensure that they can find the information they need with ease. This is 
                            reflected in the top-to-bottom hierachy of the webpage.
                        </div>
                        <img src="https://i.ibb.co/RjbNsWf/2-navbar.png" alt="nav bar" className="smallerDisplay"/>
                        <img src="https://i.ibb.co/qmVDXXz/2-userjourney.png" alt="hacker user journey" className="smallerDisplay"/>
                        <h6 className="subsubheading">Landing Page</h6>
                        <div className="paragraph">
                            As the first thing the user sees upon visiting the website, our landing page serves 
                            the purpose of delivering the most critical information about the event and enticing 
                            the user to read more.
                        </div>
                        <div className="paragraph">
                            Initially, our design mimiced after the Glassmorphism effect currently in trend. Upon 
                            receiving the feedback that the *vibe* that conveyed through the visuals did not match 
                            the mood we want to create for our event, we made a pivot and created a new design. 
                            Through this process, I learned that <b> what is aesthetic may not always be the most accessible</b>, 
                            and it is always important to ensure that the design is in alignment with the brand.
                        </div>
                        <img src="https://i.ibb.co/DMFF2Kq/2-landing2.png" alt="landing page initial design" className="smallerDisplay"/>
                        <div className="paragraph">
                            In order to create a more accesible viewing experience, we also included a toggle bar to 
                            allow the user to shift between light and dark mode!
                        </div>
                        <img src="https://i.ibb.co/g7tfS7f/2-landing.png" alt="landing page final design" className="smallerDisplay"/>
                        <h6 className="subsubheading">Our Story</h6>
                        <div className="paragraph">
                            As a first-time event, how could we convince a potential participant of the value within 
                            our event?  In the Our Story section, various quoted testimonials are included in order 
                            to invite users to glimpse into the perspectives of different individuals (new and experienced 
                            hacker, mentor, and organizer) in order to find how this event will resonate with them. For 
                            the UI, we decided on a concise layout and a progress bar that gamified the user experience 
                            in order to encourage the user to view through each different story.
                        </div>
                        <img src="https://i.ibb.co/zQ0CR3f/2-ourstory.png" alt="testimonial section initial design" className="smallerDisplay"/>
                        <img src="https://i.ibb.co/K9Sgf0D/2-ourstory1.png" alt="testimonial section final design" className="smallerDisplay"/>
                        <div className="paragraph">
                            After numerous iterations on Figma, we handed the hi-fidelity wireframes off to the dev team, 
                            who made the design come to life through code ✨👀
                        </div>
                        <div className="paragraph">
                            Check out our <a href="https://www.figma.com/file/nmoby3dv4F4I0qDoQEq30L/Hi-Fidelity-Website?node-id=1%3A6">Figma files
                            </a> and the <a href="https://www.2021.itstechnova.org/">final website</a>!
                        </div>
                        <hr className="subdivider"/>
                        <h5 className="subheading">3. Social Media Graphics</h5> 
                        <div className="paragraph">
                            As the hackathon is approaching and hacker applications are open, my role as a designer 
                            became more marketing-oriented — we wanted to encourage engagement by creating a social 
                            media presence for everyone to stay informed on our event updates.
                        </div>
                        <div className="paragraph">
                            Below are some of the social media assets that I helped to create!
                        </div>
                        <img
                        src="https://i.ibb.co/DrmbMjr/3-socialposts.png"
                        alt="sample social media posts"/>
                    </Paragraph>
                </Section>
                <SectionDivider/>
                <Section>
                    <Heading>Reflection //</Heading>
                    <Paragraph> 
                        <div className="paragraph">
                            For me, TechNova's mission is about 
                            <b> building an inclusive and uplifting community</b>. 
                            I am grateful to have been a part of such a passionate and multidisciplinary 
                            team, where each individual seeks to contribute to a more inclusive tech 
                            culture through uplifting the underrepresented individuals ✨
                        </div>
                        <div className="paragraph">
                            As my first time partifipating in the behind-the-scene process of building a virtual event
                            and collaborating with the developing team to create a complete wireframe, there were many 
                            valuable takeaways. To name a few,
                            <ol>
                                <li>
                                    The iterative process of receiving and improving upon feedbacks is a 
                                    foundational aspect of any design project. Don't expect everything to 
                                    be perfect on the first try!
                                </li>
                                <li>
                                    Accessibility should be prioritized over aesthetics.
                                </li>
                                <li>
                                    Listening to the unique perspectives of others help immensely in expanding the 
                                    context. When everyone's voice is involved, better ideas are generated.
                                </li>
                            </ol>
                        </div>
                    </Paragraph>
                </Section>
        </Wrapper>
    )
}

export default function Technova21Post() {
    return (
        <PortfolioBox>
            <Technova21PostContent/>
        </PortfolioBox>
    )
}