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
    margin: 6rem auto 0 auto;
    display: flex;
    height: 50vh;
    flex-direction: column;
    justify-content: space-between;

    .title {
        width: 65vw;
        font-size: 3rem;
        font-family: var(--title-font);
        font-weight: 500;
        margin-bottom: 4rem;

        .flora {
            color: var(--highlight);
        }

        .circle {
            border-radius: 100%;
            border: 2px solid var(--highlight);
            padding: 0 1rem 0 1rem;
            display: inline-block;
            cursor: crosshair;
        }

    }


    .prompt {
        font-size: 1.2rem;

        a {
            cursor: crosshair;
            text-decoration: underline solid var(--highlight);
        }
    }

    hr {
        margin-top: -3rem;
        border: none;
        height: 2px;
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
    padding-top: 4rem;
    padding-bottom: 2rem;
`

export const ProjectLink = styled(Link)``

// MISC portfolio styles
export const AllExpWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 75vw;
    margin: 4rem auto 2rem auto;
`

export const ExpYearWrapper = styled.div`
    display: inline-flex;
    flex-direction: row;
    gap: 0.5rem;

    .year {
        text-orientation: upright;
        writing-mode: vertical-rl;
        white-space: nowrap;
        letter-spacing: -0.2rem;
        color: var(--highlight);
        font-size: 0.8rem;
    }
    .exp {
        display: flex;
        width: 100%;
        flex-direction: column;
    }
`

export const ExpPilLWrapper = styled.div`
    border-bottom: 2px solid var(--outline-color);
    border-left: 2px solid var(--outline-color);
    padding: 1rem 1.5rem 1rem 1.5rem;

    .text {
        display: flex;
        flex-direction: row;
    }
    
    * {
        font-size: 0.8rem;
    }

    &:hover {
        background: var(--dark);
        cursor: crosshair;
        transition: 0.1s ease-out; 
        border-bottom-right-radius: 1rem;
        color: var(--light);
    }

    .images: {
        display: none;
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

    a {
        cursor: crosshair;
        text-decoration: underline solid var(--highlight);
    }
`

export const ExpDescription = styled.div`
    opacity: 0.5
`   

export const ClubImageWrapper = {
    border: "2px solid var(--outline-color)",
    borderRadius: "0.5rem",
    height: "100%",
    width: "100%",
    maxWidth: "5rem",
    maxHeight: "auto",
    padding: "0.1rem",
}  

