import styled, { keyframes } from "styled-components";
import Link from "next/link";

// general styles
const wobble = keyframes`
  0%, 100% {
    transform: translateY(0.2rem);
  }
  50% {
    transform: translateY(-0.2rem); /* Adjust the distance to move up and down */
  }
`;

export const Header = styled.div`
    width: 70vw;
    margin: 4rem auto 1rem auto;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .title {
        font-size: 2.4rem;
        font-family: var(--title-font);
        .flora {
            color: var(--highlight);
        }
    }

    .prompt {
        font-size: 1.2rem;
    }

    hr {
        margin-top: -2rem;
        width: 40vw;
        border: none;
        height: 1px;
        background-color: var(--highlight);
    }
`

export const Arrow = styled.span`
    display: inline-block;
    color: var(--highlight);
    animation: ${wobble} 1.5s ease-in-out infinite;
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

export const IconWrapper = {
    outline: "2px solid var(--highlight)",
    borderRadius: "10rem",
    height: "2.8rem",
    width: "2.8rem",
    verticalAlign: "text-top",
}  

export const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 6rem;
    justify-content: center;

    .subtitle {
        font-size: 1rem;
    }
    .title {
        text-transform: uppercase;
        font-size: 2.5rem;
        margin-bottom: 0.8rem;
        font-weight: 600;
        font-family: var(--title-font);
    }
    .description {
        font-size: 1.2rem;
    }
    .link {
        margin-top: 1.5rem;
        align-self: flex-start;
        border-radius: 20px;
        color: var(--outline-color);
        border: 2px solid var(--outline-color);
        padding: 0.5rem 1rem 0.5rem 1rem;
        text-decoration: none;
        background: inherit;
        font-family: inherit;
        font-size: 1.2rem;
    }
    span {
        opacity: 0.5;
    }
    button {
        &:hover {
            margin-top: 1.2rem;
            font-size: 1.5rem;
            transition: 0.1s ease-out; 
            color: var(--body-color);
            background: var(--outline-color);
            border-radius: 10rem;
        }
        cursor: crosshair;
    }
`

export const ProjectImage = styled.img`
    width: 25rem;
    height: 100%;
    object-fit: contain;
    border: 2px solid var(--outline-color);
    border-radius: 15px;
    padding: 0.5rem;
`

export const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 70vw;
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
    gap: 2rem;
    padding: 5rem 0 5rem 0;
`

export const ExpYearWrapper = styled.div`
    display: flex;
    flex-direction: column;
    display: inline-flex;
    .year {
        font-style: italic;
        font-size: 1.5rem;
        opacity: 0.5;
        font-family: var(--title-font);
    }
`

export const ExpPilLWrapper = styled.div`
    border-bottom: 2px solid var(--dark);
    word-wrap: break-word;
    padding: 1rem 1.5rem 1rem 1.5rem;
    display: flex;
    flex-direction: row;
    
    * {
        font-size: 0.8rem;
    }

    &:hover {
        background: var(--dark);
        cursor: crosshair;
        transition: 0.1s ease-out; 
        color: var(--light);
    }
`
export const ExpTitle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    width: 50%;
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

