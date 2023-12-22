import React, {ReactNode, useState, useEffect} from "react";
import { 
    EmojiSticker,
    Wrapper,
    AboutWrapper,
    ImageWrapper,
    Info,
    CollapsableText,
    CollapsedText,
 } from "./AboutStyles";
import Draggable from "react-draggable";
import Image from "next/image";
import * as myPics from "../../../images"

const emojisLinks = new Map([
    ['🎧', ['https://open.spotify.com/user/eliinaz.z?si=c08e9317db4e4a97']],
    ['📷', ['https://www.instagram.com/kunleidoscope/']],
    ['📝', ['https://www.notion.so/kunleidoscope/Study-Repository-9f179ada5dd34d64815ea99820ad8a4a']],
    ['💼', ['https://www.linkedin.com/in/kun-zhu-05b53a193/']],
    ['🎬', ['https://letterboxd.com/kunleidoscopic/']],
    ['📚', ['https://www.goodreads.com/user/show/155344030-kun-zhu']],
    // ['🦜', ['']],
    ['💌', ['https://sincerelykun.substack.com/']],
    ['💬', ['mailto:zkzhu@uwaterloo.ca']]
])

const hobbies1: string[] = ['watching Studio Ghibli films', 'thrifting', 'scrap-journalling']
const hobbies2: string[] = ['eating egg tarts', 'drinking rooibos tea', 'going out for brunch']


const generateRandomItem = (arr: any[]) => {
    let max = arr.length 
    let idx = Math.floor(Math.random() * max);

    return arr[idx]
}

const renderEmojiStickers = () => {

    const getRandomPosition = (range: number, dimension: 'x' | 'y') => {
        // make it avoid the text box??
        let num = Math.random() * (range - 10) + 10;
        let dim;
        dimension == 'x' ? dim = 'vw' : dim = 'vh'

        let position = `${num}${dim}`
        return position
    };

    const emojis: string[] = Array.from(emojisLinks.keys());

    let emojiStickers : Array<ReactNode> = []
    emojis.map((emoji) => {
        // direct on double click only??
        let info = emojisLinks.get(emoji)
        let link
        info ? link = info[0] : link = ''
        emojiStickers.push(
            <Draggable>
                <EmojiSticker 
                    y={getRandomPosition(80, 'y')} 
                    x={getRandomPosition(80, 'x')}
                    href={link}
                    target='_blank' rel='noreferrer'
                >
                    {emoji}
                </EmojiSticker>
            </Draggable>
        )
        })

    return emojiStickers
}

function Workspace() {

    const [displayName, setDisplayName] = useState<boolean>(false)
    const [displayMajor, setDisplayMajor] = useState<boolean>(false)
    const [displayInspo, setDisplayInspo] = useState<boolean>(false)
    const [displayLinks, setDisplayLinks] = useState<boolean>(false)

    const [hobbies, setHobbies] = useState<string[]>([])

    const myPicsArray = Object.values(myPics);
    
    useEffect(() => {
        setHobbies([generateRandomItem(hobbies1), generateRandomItem(hobbies2)])
    }, [])

    return (
        <Wrapper>
            <AboutWrapper>
                <Image
                    src={generateRandomItem(myPicsArray)}
                    alt="Kun"
                    style={ImageWrapper}
                    placeholder="blur"
                    />
                <Info>
                    <div className="section">
                        <CollapsableText collapse={displayName} onClick={() => setDisplayName(!displayName)}>Kun</CollapsableText> {displayName && <CollapsedText><i className="colored">/&thinsp; kwɪn &thinsp;/ &thinsp;</i></CollapsedText>}
                        is in her final year at the University of Waterloo, 
                        studying <CollapsableText collapse={displayMajor} onClick={() => setDisplayMajor(!displayMajor)}>math</CollapsableText> 
                        {displayMajor && <CollapsedText> <span className="colored">(statistics & optimization)</span></CollapsedText>} with a minor in cognitive science.
                        She enjoys {hobbies[0]} and {hobbies[1]}.
                    </div>
                    <div className="section">
                        <CollapsableText collapse={displayInspo} onClick={() => setDisplayInspo(!displayInspo)}>Many</CollapsableText> things inspire her
                        {displayInspo && <CollapsedText>, such as empathy, creativity, and interdisciplinarity</CollapsedText>}. 
                        She can also be found <CollapsableText collapse={displayLinks} onClick={() => setDisplayLinks(!displayLinks)}> elsewhere</CollapsableText>
                        {displayLinks && <CollapsedText> by clicking around on these emojis •ᴗ•</CollapsedText>}.
                    </div>
                </Info>
            </AboutWrapper>
            {displayLinks && renderEmojiStickers()}
        </Wrapper>
    )
}

export default Workspace