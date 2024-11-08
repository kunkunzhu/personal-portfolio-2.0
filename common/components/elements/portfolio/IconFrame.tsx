/** @format */

import Image from "next/image";
import * as myPics from "../../../../public/aboutImages";
import { generateRandomItem } from "../../../utils/random";
import { IconWrapper } from "../../views/portfolio/styles/PortfolioStyles";

export default function IconFrame() {
  const myPicsArray = Object.values(myPics);

  return (
    <Image
      src={generateRandomItem(myPicsArray)}
      alt="Kun"
      style={IconWrapper}
      placeholder="blur"
      quality={75}
    />
  );
}
