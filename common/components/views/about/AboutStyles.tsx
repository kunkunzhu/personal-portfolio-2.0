import styled from "styled-components";

interface CollapsableProps {
    collapse: boolean | string;
    onClick: () => void;
}

interface InspoProps {
    onHover: () => void;
}

interface EmojiStickerProps {
    x: string;
    y: string;
}

export const Wrapper = styled.div`
    width: 80vw;
    height: 85vh;
    display: flex;
    flex-direction: column;
    margin: auto;
    * {
        &:hover{
            cursor: crosshair;
        }
    }
`

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 100%;
`

export const Info = styled.div`
    display: flex;
    font-family: var(--title-font);
    font-size: 1.5rem;
    line-height: 150%;
    width: 45vw;
    height: 18rem;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    margin-left: 4rem;
    margin-top: 1.5rem;
`

export const CollapsableText = styled.span<CollapsableProps>`
    text-decoration: ${(props) => (props.collapse ? 'none' : 'underline solid var(--highlight)')}; 
`

export const InspoText = styled.span<InspoProps>`
    opacity: 0.6;
    &:hover {
        opacity: 1;
        color: var(--highlight);
    }
`


export const CollapsedText = styled.span`
    .colored {
        color: var(--highlight)
    }
`

export const EmojiSticker = styled.div<EmojiStickerProps>`
    position: absolute;
    top: ${(props) => props.y};
    left: ${(props) => props.x};

    .emoji {
        font-size: 5rem;
    }
    
    .tooltip {
        opacity: 0;
        background-color: var(--body-color);
        z-index: 999;
        max-width: 10rem;
        margin: auto auto -0.5rem -1rem;
        font-size: 0.7rem;
        transition: opacity 0.5s;
        border-radius: 1rem;
        text-align: center;
        padding: 0.4rem 0.8rem 0.4rem 0.8rem;
        border: 2px solid var(--highlight);
        color: var(--highlight);
    }

    :hover .tooltip {
        opacity: 1;
    }
`

export const ImageWrapper = {
    border: "2px solid var(--outline-color)",
    borderRadius: "0.5rem",
    height: "18rem",
    width: "18rem",
    padding: "0.1rem",
}  