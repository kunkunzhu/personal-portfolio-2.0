import styled from "styled-components";
import Link from "next/link";

// general styles
export const Header = styled.div`
    width: 70vw;
    margin: auto;
    margin-top: 5rem;

    .header {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
`

export const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    opacity: 0.2
`

// DESIGN portfolio styles
export const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 4rem;
    width: 25rem;
    justify-content: center;

    .subtitle {
        font-size: 1rem;
    }
    .title {
        text-transform: uppercase;
        font-size: 2.5rem;
        margin-bottom: 1rem;
        font-weight: 600;
    }
    .description {
        font-size: 1.2rem;
    }
    .link {
        margin-top: 1rem;
        align-self: flex-start;
        border-radius: 20px;
        border: 2px solid #333;
        padding: 0.5rem 1rem 0.5rem 1rem;
        text-decoration: none;
        background: inherit;
        font-family: inherit;
        font-size: 1rem;
    }
    span {
        opacity: 0.5;
    }
    button {
        &:hover {
            margin-top: 0.9rem;
            font-size: 1.1rem;
            transition: 0.1s ease-out; 
            color: white;
            background: #333;
        }
        cursor: crosshair;
    }
`

export const ProjectImage = styled.img`
    width: 25rem;
    height: 100%;
    object-fit: contain;
    border: 2px solid #333;
    border-radius: 15px;
    padding: 0.5rem;
`

export const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 60vw;
    margin: auto;
    padding-top: 5rem;
`

export const ProjectLink = styled(Link)``

// MISC portfolio styles
export const AllExpWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    gap: 5rem;
    padding: 5rem 0 5rem 0;
`

export const ExpYearWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    display: inline-flex;
    .year {
        padding-bottom: 0.5rem;
    }
`

export const ExpPilLWrapper = styled.div`
    border-radius: 5rem;
    border: 2px solid #333;
    word-wrap: break-word;
    padding: 1rem 1.5rem 1rem 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    * {
        font-size: 0.8rem;
    }
    &:hover {
        background: #333;
        cursor: crosshair;
        transition: 0.1s ease-out; 
        color: white;
    }
`
export const ExpTitle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    .role {
        font-weight: bold;
    }
    .org {
        font-style: italic;
    }
`

export const ExpDescription = styled.div`
    opacity: 0.5
`   

