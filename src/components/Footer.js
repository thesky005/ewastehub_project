import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Container>


            <Logo>
                <img src='\images\ewastehub-high-resolution-logo-white-transparent.svg'></img>
                <SocialMedia>
                    <a><img src='\images\Facebook.svg'></img></a>
                    <a><img src='\images\Instagram.svg'></img></a>
                    <a><img src='\images\Twitter.svg'></img></a>
                </SocialMedia>
            </Logo>
            <FooterContent>
                <Content>
                    <ContentItem>
                        <h3>About Us</h3>
                        <ul>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>FAQs</li>
                            <li>Contact Us</li>
                        </ul>
                    </ContentItem>
                    <ContentItem>
                        <h3>Contractors</h3>
                        <ul>
                            <li>Unlock Your Potential</li>
                                <li>Join Our Premier General</li>
                                <li>Contractor Network</li>
                                <li>Expand Your Horizons</li>
                        </ul>
                    </ContentItem>
                    <ContentItem>
                        <h3>Renovations</h3>
                        <ul>
                        <li>Renovation Simplified</li>
                    <li>How It Works</li>
                    <li>Contractor Vetting Excellence</li>
                    <li>Streamlined Bidding</li>
                        </ul>
                    </ContentItem>
                </Content>
            </FooterContent>

        </Container>
    )
}

export default Footer

const Container = styled.div`
   
    max-width: 100%;
    min-height: 31.25rem;
    background: #3C3A3A;
    display: flex;
    //margin: 0 170px;

    @media screen and (max-width : 768px){
        display: inline-block;
        width: 100%;
    }
`

const Logo = styled.div`
    margin-left:10.625rem;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:768px){
        margin-left: 20px;
    }
    
    img{
        max-width: 14.75rem;
        height: 3rem;
        //padding: 60px;
        padding-top:2.5rem;
        padding-bottom:3.75rem;

        @media screen and (max-width:768px){
        max-width: 6.75rem;
        height: 1.85rem;
        //padding: 60px;
        padding-top:1.35rem;
        padding-bottom:0.1rem;

    }
        
    }
`
const SocialMedia = styled.div`
    display: flex;
    //padding: 0 10px;
    a{
        padding: 0 0.625rem;
        cursor: pointer;
    }
    
    //justify-content: space-around;
    //align-items: center;
`
const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10.625rem;
    margin-left: 6.25rem;

    @media screen and (max-width:768px){
        margin-right: 5px;
        margin-left: 5px;
        display: inline-block;

    }
    
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:768px){
        display: contents;
    }

`

const ContentItem = styled.div`
    color: #ffffff;
    
    margin: 0 0.75rem;
    @media screen and (max-width:768px){
        margin: 0 0.25%;
        //display: flex;
    }
     
    h3{
        color: #F5F5F5;
        font-size: 1.25rem;
        font-family: "Inter-Bold", Helvetica;
        font-weight: 600;
        line-height: 3.4375rem;
        padding-left: 2.25rem;
        @media screen and (max-width:768px){
            line-height: 1.4375rem;
    }
    }
    ul{
        color: #FFF;
        font-size: 0.95rem;
        font-family: "Inter-Semibold", Helvetica;
        font-weight: 500;
        line-height: 3.375rem;
        list-style-type: none;
        width: 15.625rem;
        @media screen and (max-width:768px){
            line-height: 1.4375rem;
            letter-spacing: 1.2px;
            width: 300px;
    }
    }
`
//const Logo = styled.div``
