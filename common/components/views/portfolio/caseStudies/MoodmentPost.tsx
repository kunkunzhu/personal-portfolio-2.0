import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
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
} from './PostStyles'

const ImagesRow = styled.div`
    padding-top: 1rem;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    gap: 5rem;
`

function MoodmentPostContent() {
    return (
        <Wrapper>
            <Summary>
                <Title>
                    <div className="title">
                        Moodment.
                    </div>
                    <div className="subtitle">

                    </div>
                </Title>
            </Summary>
            <Section>
                <Heading>motivation:</Heading>
                <Paragraph>
                    <div className="paragraph">
                        Our emotions have a profound effect throughout every aspect of our lives. But often, 
                        we lack the vocabulary to accurately capture what we are feeling. <i>Sad, Mad, 
                        Glad </i> — Variations of these primary emotions are what we default to using
                        when describing how we are feeling, but they fail to encompass the complex terrain 
                        of human emotions. But when an emotion is not properly noticed and acknowledged, 
                        they may manifest in unhealthy ways, such as maladaptive coping mechanisms and 
                        emotional outbursts. 
                    </div>
                    <ImagesRow>
                        
                    <div className="paragraph">
                    <div 
                    className="quote"
                    style={{
                        fontSize: "1.5rem", 
                        padding: "0",
                        paddingBottom: "2rem"
                    }}>
                        <b>Emotional literacy</b>: the ability to recognize, understand, and express one’s 
                        emotions. 
                    </div>
                        A tool that assists with the acquisition of emotional literacy is the <b>emotional wheel</b>, a visual 
                        framework initially introduced by the psychologist Robert Plutchik (see right for an example from <a href="https://feelingswheel.com/">https://feelingswheel.com/</a>).
                         It maps emotions out 
                        along primary emotions with similar emotions closer in proximity. To use the emotional wheel, 
                        one begins by identifying their primary emotion, then navigate towards the specific term that 
                        describes their state of emotional experience. The tool thus empowers the individual to more 
                        precisely articulate their feelings as well as understand how different emotions 
                        may be related to each other.
                    </div>
                    <img 
                    src="https://feelingswheel.com/feelings-wheel.jpg" 
                    alt="sample of emotional wheel"
                    style={{
                        width: "30%",
                        height: "auto"
                    }}/>
                    </ImagesRow>
                </Paragraph>
            </Section>
            <SectionDivider/>
            <Section>
                <Heading>App ideation:</Heading>
                <Paragraph>
                    <div className="paragraph">
                        Inspired by the emotional wheel as a tool to deepen emotional awareness and enhance mental well-being, 
                        &thinsp;<b>Moodment</b> is a lightweight app that invites one to pause and reflect upon their emotions under 
                        the guidance of an emotional wheel. 
                        The tagline of the app — <i> take time to feel </i>— is a reminder to stay present with the emotion arises at each moment.
                    </div>
                    <div className="paragraph">
                        
                    </div>
                </Paragraph>
                <Paragraph>
                    <h5 className="subheading">1. lo-fi </h5>
                    <div className="paragraph">
                        To create a blueprint for the app, I mapped out a simple user flow and constructed the information 
                        architecture in order to brainstorm the structure and navigation within the app. From there, 
                        I created the lofi-wireframe to capture the general layout of the app.
                    </div>
                </Paragraph>
                <Paragraph>
                    <h5 className="subheading">2. visual design</h5>
                </Paragraph>
                <Paragraph>
                    <h5 className="subheading">3. hi-fi</h5>
                </Paragraph>
            </Section>
            <SectionDivider/>
            <Section>
                <Heading>Reflection:</Heading>
            </Section>
        </Wrapper>
    )
}

export default function MoodmentPost() {
    return (
        <PortfolioBox gifBackground={false}>
            <MoodmentPostContent/>
        </PortfolioBox>
    )
}