import React, { ReactNode } from "react";
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
    height: 90vh;
    width: 90vw;
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

const PortfolioContent = styled.div`
    overflow-y: scroll;
    margin: 0rem 0.5rem 1rem 0.5rem;
    border-radius: 1rem;
    
    ::-webkit-scrollbar {
        width: 0.7em;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--light);
        outline: 2px solid var(--dark);
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

export default function PortfolioBox({ children } : { children: ReactNode } ) {

    return (
        <div>
            <BrowserBox>
                <PortfolioNav/>
                <BrowserSearchBar/>
                <PortfolioContent>
                    {children}
                </PortfolioContent>
            </BrowserBox>
        </div>
    )
}