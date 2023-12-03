import styled from "styled-components";

export const Wrapper = styled.div`
    width: 70vw;
    margin: auto;
    display: flex;
    flex-direction: column;
`

/* HEADER STYLE */

export const Hero = styled.img`
    width: 60%;
    height: auto;
    maxheight: 35rem;
    padding-top: 1.5rem;
`

export const TallHero = styled.img`
    height: 25rem;
    width: auto;
    padding-top: 1.5rem;
`

export const Title = styled.div`
    max-width: 35vw;
    .title {
        font-size: 3rem;
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 1rem;
        font-weight: bold;
        text-transform: uppercase;
    }
    .subtitle {
        font-size: 1.2rem;
    }
`

export const Summary = styled.header`
    padding-top: 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

/* CONTENT STYLE */

export const Content = styled.div`
`

export const Paragraph = styled.div`
    .subheading {
        font-size: 1.2rem;
        padding: 2rem 1.5rem 0 0;
    }
    .subsubheading {
        font-size: 1.2rem;
        padding: 1rem 0 0 0.5rem;
        text-transform: uppercase;
        color: pink;
        opacity: 0.75;
    }
    .quote {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 2rem;
        line-height: 2rem;
        color: var(--bg-clr);
        background-color: var(--rain);
        padding: 15px;
        padding-left: 50px;
    }
    .paragraph {
        font-size: 0.9rem;
        padding: 1rem 0 1rem 0;
        b {
            font-family: inherit;
            &:hover {
                color: pink;
            }
        }
        a {
            font-family: inherit;
            color: inherit;
            opacity: 0.6;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
                text-decoration-style: wavy;
                text-decoration-color: blue;
            }
        }
        ol {
            max-width: 75%;
            margin: auto;
            padding-top: 1rem;
            li { 
                font-size: 0.9rem;
                opacity: 0.8;
            }
        }
    }
    img {
        margin: auto;
        max-width: 100%;
        padding: 1rem 0 1rem 0;
        height: auto;
    }
    .imgRow{
        display: flex;
        flex-direction: row; 
        flex-wrap: wrap;
        align-content: center; 
        justify-content: center;
        .smallerDisplay {
            padding: 1px;
            width: 45%;
        }
    }
`

export const Heading = styled.h3`
    margin: 0.5rem;
    margin-left: 0;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
`

export const SectionDivider = styled.hr`
    margin-top: 1rem;
    border: 0;
    border-top: 0.5px solid black;
    opacity: 0.3;
`

export const Section = styled.div`
    padding: 2rem 0 2rem 0;
    margin-top: 2rem;
    line-height: 150%;
`