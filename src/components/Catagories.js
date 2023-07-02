import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const Catagories = () => {

    

    return (
        <Container id='categories-section'>
            <TextContent>
                <p>TOP SERVICES</p>
                <h1>Our Top Categories for you</h1>
            </TextContent>
            <ImgContent>
                <Img>
                    <img src="\images\Painting.png" alt="Painting" srcset="" />
                    <p>Painting Expert</p>
                </Img>
                <Img>
                    <img src="\images\Patching.png" alt="Painting" srcset="" />
                    <p>Patching and Repair Expert</p>
                </Img>
                <Img>
                    <img src="\images\tilling.png" alt="Painting" srcset="" />
                    <p>Tiling Expert</p>
                </Img>

            </ImgContent>
        </Container>
    )
}

export default Catagories;

const Container = styled.div`
    //position: relative;
    width: 100%;
    height: 597px;
    background: #F9F5FFBF;
    padding: 30px 0 ;
    top: 850px;
    @media (max-width: 768px) {
    height: auto;
    padding: 40px 0;
    top: auto;
    }
`
const TextContent = styled.div`
    margin: 0 170px;
    p{
        color:#16C99E;
        font-family: "Inter-SemiBold", Helvetica;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 0;
        line-height: normal;
        position: relative;
        //margin-top: 30px;
    }
    h1{
        display: flex;
        font-family: "Inter-SemiBold", Helvetica;
        width: 765px;
        //height: 159.91px;
        flex-direction: column;
        flex-shrink: 0;
        color: #0B0A31;
        font-size: 45px;
        font-family: Inter;
        font-weight: 700;
        line-height: 70px;
        @media (max-width: 768px) {
      width: 100%;
      font-size: 32px;
      line-height: 48px;
      //margin: 0 12px;
    }
    }

    @media screen and (max-width:768px){
        margin: 10%;
    }

`
const ImgContent = styled.div`
margin: 0 170px;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
  }

    img{
        width: 269px;
        height: 308px;
        flex-shrink: 0;
        border-radius: 20px;
        @media (max-width: 768px) {
      width: 100%;
      max-width: 350px;
      height: auto;
      margin-bottom: 20px;
    }
    }
    p{
        display: flex;
        width: 162px;
        height: 63px;
        flex-direction: column;
        flex-shrink: 0;
        color: #0B0A31;
        text-align: center;
        font-size: 20px;
        font-family: Inter;
        font-weight: 700;
        line-height: 30px;
        
    }
`
const Img = styled.div`
        display: block;
        justify-content: center;
        align-items: center;
    p{
        padding-left: 54px;
        color: #0B0A31;
        font-size: 20px;
        font-family: Inter;
        font-weight: 700;
        line-height: 30px;
    }
    @media (max-width: 768px) {
      padding-left: 0;
    }
`
