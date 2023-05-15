import React from "react";
import styled from "styled-components";
import PortfolioBox from "@/common/components/elements/portfolio/PortfolioBox";

const Wrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-size: 2rem;
opacity: 0.2
`

export default function MiscPortfolio() {
    return (
        <div>
            <PortfolioBox>
                <Wrapper>
                    PAGE UNDER CONSTRUCTION ⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆
                </Wrapper>
            </PortfolioBox>
        </div>
    )
}