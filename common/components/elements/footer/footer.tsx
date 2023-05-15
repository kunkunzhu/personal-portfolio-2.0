import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    background-color: #333;
    opacity: 75%;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    .text{
        color: white;
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