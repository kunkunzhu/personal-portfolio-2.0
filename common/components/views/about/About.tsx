import React from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import {
    AiFillInstagram,
    AiFillGithub,
    AiFillLinkedin,
} from "react-icons/ai";
import Image from "next/image";
import me from "../../../images/me.jpg"

const Wrapper = styled.div`
    width: 55vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    margin: auto;
    * {
        &:hover{
            cursor: crosshair;
        }
    }
`

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-left: 5rem;
`

const TitleBar = styled.div`
    display: flex;
    flex-direction: row;
`

const SocialsBar = styled.div`
    border: 2px solid black;
    border-radius: 0.5rem;
    padding: 1rem;
    align-items: center;
    display: flex;
    margin: auto;
    height: 100%;
    width: 11.5rem;
    a {
        font-size: 1.5rem;
        margin: auto;
    }
`

const NameBar = styled.div`
    border: 2px solid black;
    padding: 1rem;
    font-size: 1.2rem;
    width: 15rem;
    border-radius: 0.5rem;
    margin-right: 1.5rem;
    font-weight:
`

const Paragraph = styled.div`
    border: 2px solid black;
    padding: 1rem;
    font-size: 1rem;
    display: inline-block;
    width: 28rem;
    border-radius: 0.5rem;
    line-height: 1.5rem;
    margin-top: 1rem;

    a{
        color: gray;
        &:hover{
            text-decoration: underline;
            text-decoration-style: wavy;
            text-decoration-color: gray;
        }
    }
`

const Tag = styled.div`
    margin: 1rem -10 10rem 20rem;
    font-size: 0.7rem;
    opacity: 0.2;
`

const ImageWrapper = {
    border: "2px solid black",
    borderRadius: "0.5rem",
    maxHeight: "24rem",
    maxWidth: "18rem",
    height: "auto",
    width: "auto",
    padding: "0.1rem",
    margin: "auto"
}   

function Workspace() {

    

    return (
        <Wrapper>
            <AboutWrapper>
                <Draggable>
                    <Image
                    className="image"
                    src={me}
                    alt="me"
                    style = {ImageWrapper}
                    />
                </Draggable>
                <Info>
                    <TitleBar>
                        <Draggable>
                            <NameBar>
                            Kun 鲲: /&thinsp; kwɪn &thinsp;/
                            </NameBar>
                        </Draggable>
                        <Draggable>
                            <SocialsBar>
                                <a href={'https://www.instagram.com/kunleidoscope/'} target='_blank' rel='noreferrer'>
                                    <AiFillInstagram/>
                                </a>
                                <a href={'https://www.linkedin.com/in/kun-zhu-05b53a193/'} target='_blank' rel='noreferrer'>
                                    <AiFillLinkedin/>
                                </a>
                                <a href={'https://github.com/kunkunzhu'} target='_blank' rel='noreferrer'>
                                    <AiFillGithub/>
                                </a>
                            </SocialsBar>
                        </Draggable>
                    </TitleBar>
                    <Draggable>
                        <Paragraph>
                        Kun is a third year student at the University of Waterloo,&thinsp; 
                        <a href={'https://bit.ly/3SZn58m'} target='_blank' rel='noreferrer'>studying</a> 
                        &thinsp;Statistics / Combinatorics & Optimization with a 
                        minor in Cognitive Science.
                        </Paragraph>
                    </Draggable>
                    <Draggable>
                        <Paragraph>
                        Creative expressions of all forms evoke her curiosity: 
                        literature, art, photography, mathematics. 
                        She feel the most at home while &thinsp;
                        <a href={'https://sincerelykun.substack.com/'} target='_blank' rel='noreferrer'>
                        writing,
                        </a> 
                        <a href={'https://curius.app/kun-zhu'} target='_blank' rel='noreferrer'>
                        reading,
                        </a> &thinsp; drawing, and listening to music.
                        </Paragraph>
                    </Draggable>
                </Info>
            </AboutWrapper>
            <Draggable>
                <Tag>
                p.s. feel free to drag everything on this page around ! (๑•͈ᴗ•͈)
                </Tag>
            </Draggable>
        </Wrapper>
    )
}

export default Workspace