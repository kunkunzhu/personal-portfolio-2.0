import React, { ReactNode, useState } from "react";
import PortfolioNav from "./PortfolioNav";
import styled from "styled-components";
import {
    AiOutlineLeftCircle,
    AiOutlineRightCircle,
    AiOutlineSearch,
} from "react-icons/ai";

const BrowserBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 1rem;
    height: 85vh;
    width: 85vw;
    margin: auto;
`

const SearchWrapper = styled.div`
    display: grid;
    grid-template-columns: 5rem auto;
    gap: 10rem;
    border-bottom: 2px solid;
    padding: 0.2rem;

    .navigation {
        padding: 0.2rem;
        margin-left: 1rem;
    }

    .search {
        border-radius: 1rem;
        border: 2px solid;
        margin-right: 2rem;
        height: 2rem;
        padding-left: 0.5rem;
        vertical-align: -50%;
        
        .icon {
            margin: auto;
            vertical-align: -50%;
        }
    }
`

interface PortfolioContentStyleProps {
    $gifBackground: boolean
}
//https://i.pinimg.com/originals/64/ae/15/64ae1599d5869869610983f2f02db226.gif

export const PortfolioContent = styled.div<PortfolioContentStyleProps>`
    overflow-y: scroll;
    margin: 0.5rem 0.5rem 1rem 0.5rem;
    border-radius: 1rem;
    transition: background-image 0.5s ease;
    background-image: ${(props) => (props.$gifBackground ? "url('https://i.pinimg.com/originals/80/e5/b5/80e5b5070a9a15dab79fe8d8f27378cc.gif')" : 'none')};
    background-repeat: no-repeat;
    background-size: 100%;

    .flora {
        color: ${(props) => (props.$gifBackground ? "var(--body-color)" : 'var(--highlight)')};
    }
    
    ::-webkit-scrollbar {
        width: 0.7em;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--highlight);
        border-radius: 15px;
    }
`


const BrowserSearchBar = () => {
    return (
        <SearchWrapper>
            <div className="navigation">
                <AiOutlineLeftCircle size={25} color={'var(--outline-color)'}/>
                <AiOutlineRightCircle size={25} color={'var(--outline-color)'}/>
            </div>
            <div className="search">
                <AiOutlineSearch size={20} color={'var(--outline-color)'} className="icon" />
            </div>
        </SearchWrapper>
    )
}

interface PortfolioBoxProps {
    children: ReactNode;
    gifBackground: boolean;
}

const PortfolioBox: React.FC<PortfolioBoxProps> = ({ children, gifBackground }) => {

    return (
        <div>
            <BrowserBox>
                <PortfolioNav/>
                <BrowserSearchBar/>
                <PortfolioContent $gifBackground={gifBackground}>
                    {children}
                </PortfolioContent>
            </BrowserBox>
        </div>
    )
}

export default PortfolioBox