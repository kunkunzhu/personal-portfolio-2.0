import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 85vw;
    margin: auto;
    font-size: 0.7rem;
    padding: 0.4rem;
    text-align: right;
    color: var(--highlight);
    opacity: 0.5;
`

export default function Footer() {
    
    return (
        <Wrapper>
            &copy; Built by Kun Zhu 
        </Wrapper>
    )
}