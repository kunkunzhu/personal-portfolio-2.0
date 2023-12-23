import styled from "styled-components";

interface CollapsableProps {
    collapse: boolean;
    onClick: () => void;
}

interface CollapsableProps {
    collapse: boolean;
    onClick: () => void;
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
    max-width: 45vw;
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

export const CollapsedText = styled.span`
    .colored {
        color: var(--highlight)
    }
`

export const EmojiSticker = styled.a<EmojiStickerProps>`
    font-size: 5rem;
    position: absolute;
    top: ${(props) => props.y};
    left: ${(props) => props.x}
`

export const ImageWrapper = {
    border: "2px solid var(--outline-color)",
    borderRadius: "0.5rem",
    height: "18rem",
    width: "18rem",
    padding: "0.1rem",
}  