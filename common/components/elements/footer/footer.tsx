import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    background-color: var(--dark);
    opacity: 75%;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    .text{
        color: var(--dark);
    }
`

export default function Footer() {
    
    return (
        <Wrapper>
            <div className="text">
                designed + developed by Kun Zhu ʕっ• ᴥ • ʔっ
            </div>
        </Wrapper>
    )
}