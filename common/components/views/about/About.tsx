/** @format */

import React, { ReactNode, useState, useEffect } from "react";
import {
  EmojiSticker,
  Wrapper,
  AboutWrapper,
  ImageWrapper,
  Info,
  CollapsableText,
  CollapsedText,
  InspoText,
} from "./AboutStyles";
import Draggable from "react-draggable";
import Image from "next/image";
import { generateRandomItem } from "../../../utils/random";
import * as myPics from "../../../../public/aboutImages";

const emojisLinks = new Map([
  [
    "🎧",
    [
      "https://open.spotify.com/user/eliinaz.z?si=c08e9317db4e4a97",
      "where she obsessively creates playlists",
    ],
  ],
  [
    "📷",
    [
      "https://www.instagram.com/kunleidoscope/",
      "where she keeps a photographic archive",
    ],
  ],
  [
    "📝",
    [
      "https://www.notion.so/kunleidoscope/Study-Repository-9f179ada5dd34d64815ea99820ad8a4a",
      "where she dumps all her study notes",
    ],
  ],
  [
    "💼",
    [
      "https://www.linkedin.com/in/kun-zhu-05b53a193/",
      "where she tries to find a job lol (& stalk other people's achievements)",
    ],
  ],
  [
    "🎬",
    [
      "https://letterboxd.com/kunleidoscopic/",
      "where she logs the films she's seen",
    ],
  ],
  [
    "📚",
    [
      "https://www.goodreads.com/user/show/155344030-kun-zhu",
      "where she occasionally writes book reviews",
    ],
  ],
  // ['🦜', ['']],
  [
    "🗺️",
    [
      "https://www.corner.inc/kun",
      "where she documents her favourite places in different cities",
    ],
  ],
  [
    "💌",
    [
      "https://sincerelykun.substack.com/",
      "where she writes about thoughts and feelings",
    ],
  ],
  [
    "💬",
    [
      "mailto:zkzhu@uwaterloo.ca",
      "where you can reach out to her about anything!",
    ],
  ],
]);

const hobbies1: string[] = [
  "watching Studio Ghibli films",
  "thrifting",
  "scrap-journalling",
];
const hobbies2: string[] = [
  "eating egg tarts",
  "drinking rooibos tea",
  "going out for brunch",
];

const renderEmojiStickers = () => {
  const getRandomPosition = (range: number, dimension: "x" | "y") => {
    // TODO: make the stickers avoid the textbox??
    let num = Math.random() * (range - 10) + 10;
    let dim;
    dimension == "x" ? (dim = "vw") : (dim = "vh");

    let position = `${num}${dim}`;
    return position;
  };

  const navigateTo = (url: string) => {
    window.open(url, "_blank");
  };

  const emojis: string[] = Array.from(emojisLinks.keys());

  let emojiStickers: Array<ReactNode> = [];
  emojis.map((emoji) => {
    let info = emojisLinks.get(emoji);
    let link = "";
    let description = "";
    if (info) {
      link = info[0];
      description = info[1];
    }
    emojiStickers.push(
      <Draggable>
        <EmojiSticker
          y={getRandomPosition(70, "y")}
          x={getRandomPosition(70, "x")}
          onDoubleClick={() => navigateTo(link)}
        >
          <div className="tooltip">{description}</div>
          <div className="emoji">{emoji}</div>
        </EmojiSticker>
      </Draggable>
    );
  });

  return emojiStickers;
};

function Workspace() {
  const [displayName, setDisplayName] = useState<boolean>(false);
  const [displayMajor, setDisplayMajor] = useState<boolean>(false);
  const [displayInspo, setDisplayInspo] = useState<boolean>(false);
  const [displayLinks, setDisplayLinks] = useState<boolean>(false);

  const [hobbies, setHobbies] = useState<string[]>([]);

  const myPicsArray = Object.values(myPics);

  useEffect(() => {
    setHobbies([generateRandomItem(hobbies1), generateRandomItem(hobbies2)]);
  }, []);

  return (
    <Wrapper>
      <AboutWrapper>
        <Image
          src={generateRandomItem(myPicsArray)}
          alt="Kun"
          style={ImageWrapper}
          placeholder="blur"
          quality={75}
        />
        <Info>
          <div className="section">
            <CollapsableText
              collapse={displayName}
              onClick={() => setDisplayName(!displayName)}
            >
              Kun
            </CollapsableText>{" "}
            {displayName && (
              <CollapsedText>
                <i className="colored">/ kwɪn / &thinsp;</i>
              </CollapsedText>
            )}
            is in her final year at the University of Waterloo, studying{" "}
            <CollapsableText
              collapse={displayMajor}
              onClick={() => setDisplayMajor(!displayMajor)}
            >
              math
            </CollapsableText>
            {displayMajor && (
              <CollapsedText>
                {" "}
                <span className="colored">(statistics & optimization)</span>
              </CollapsedText>
            )}{" "}
            with a minor in cognitive science. She enjoys {hobbies[0]} and{" "}
            {hobbies[1]}.
          </div>
          <div className="section">
            <CollapsableText
              collapse={displayInspo}
              onClick={() => setDisplayInspo(!displayInspo)}
            >
              Many
            </CollapsableText>{" "}
            things inspire her
            {displayInspo && (
              <CollapsedText>
                , such as <InspoText>empathy</InspoText>
                ,&thinsp;
                <InspoText>creativity</InspoText>, and&thinsp;
                <InspoText>interdisciplinarity</InspoText>
              </CollapsedText>
            )}
            . She can also be found{" "}
            <CollapsableText
              collapse={displayLinks}
              onClick={() => setDisplayLinks(!displayLinks)}
            >
              {" "}
              elsewhere
            </CollapsableText>
            {displayLinks && (
              <CollapsedText>
                {" "}
                by double clicking on any of these emojis •ᴗ•
              </CollapsedText>
            )}
            .
          </div>
        </Info>
      </AboutWrapper>
      {displayLinks && renderEmojiStickers()}
    </Wrapper>
  );
}

export default Workspace;
