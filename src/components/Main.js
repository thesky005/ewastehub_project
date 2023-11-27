import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <Container>
      <TextContent>
        <RenovateTag>
          <div className="box">
            {/* <div className="mail-button-wrapper"> */}
              {/* {/* <div className="mail-button"> */}
                <div className="overlap-group">
                  <div className="text-wrapper">Clean Earth, Green Earth</div>
                  {/* <img className="vector" alt="Vector" src="\images\Vector.svg" /> */}
                </div>
             </div>
            {/* </div> */}
          {/* </div> */}
        </RenovateTag>
        <RenovateText>


              <h1>
                <span>E-Waste Recycling: Where Technology Meets Sustainability</span>
              </h1>
          

        </RenovateText>
        <Text>

              <p>the transformation of electronic waste into sustainable solutions, preserving our environment and resources for a better future</p>
        
        </Text>
        <Button>
          <GetStarted>
            <Link to='trading'>
            <div className="box">
              <div className="get-started-box-wrapper">
                <div className="get-started-box">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="text-wrapper">Get Started</div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </GetStarted>
          <FindContractor>
            <Link to='findewastefacility'>
            <div className="box">
              <div className="find-contractors-box-wrapper">
                <div className="find-contractors-box">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="text-wrapper">Find EwasteHub</div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </FindContractor>
        </Button>
      </TextContent>
      <ImgContent>
        <div className="box">
          <img src="\images\ewastemainimg.png" alt="" />
        </div>
      </ImgContent>



    </Container>
  )
}

export default Main
const Container = styled.div`
  display: flex;
  //margin-top: 50px;
  align-items: center;
  margin: 2.875rem 8.625rem;
  min-height: 500px;
  //background-color: aliceblue;
  justify-content: space-around;
  @media screen and (max-width : 768px) {
     margin: 6% 6%;
    //max-width : 100px;
    //align-items: center;
    justify-content: flex-start;
    //font-size: 50%;
  }
`
const TextContent = styled.div`
    
`
const RenovateTag = styled.div`
  //padding-bottom: 100px;
    .box {
  background-color: transparent;
  display: flex;
  flex-direction: row;
  //justify-content: center;
  width: 100%;
  height: 70px;
}

.box .mail-button-wrapper {
  border: 0px none;
  height: 60px;
  overflow-x: hidden;
  width: 248px;
}

.box .mail-button {
  height: 60px;
  width: 250px;
}

.box .overlap-group {
  background: linear-gradient(180deg, rgb(255, 255, 255) 0%);
  border-radius: 20px;
  box-shadow: 0px 2px 4px 1px #00000040;
  height: 44px;
  position: relative;
  width: 278px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box .text-wrapper {
  color: #16c89e;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 18px;
  font-weight: 600;
 // left: 18px;
  letter-spacing: 0;
  line-height: normal;
  //position: absolute;
  //top: 26px;
  //width: 199px;
}

.box .vector {
  height: 26px;
  width: 19px;
}

 @media screen and (max-width: 768px) {
    .box {
      justify-content: flex-start;
    }

    .box .mail-button-wrapper {
     // justify-content: flex-start;
      height: 70%;
      width: 80%;
      //padding-left: auto;
    }

    .box .mail-button {
      height: 70%;
      width: 160px;
    }

    .box .overlap-group {
      height: 44px;
      position: relative;
      width: 160px;
      align-items: center; 

    }

    .box .text-wrapper {
      font-size: 12px;
      margin-top: 10px;
      align-items: center;
      padding-left: 15px;
      flex-wrap: wrap;
    }

    .box .vector {
      height: 17px;
      width: 15px;
      align-items: center;
      padding-right: 15px;
      padding-top: 10px;
      padding-left: 6px;
      
    }
     /* Adjust the styling for mobile view  */
  }
`
const RenovateText = styled.div`
    margin-bottom: 36px;

    h1{
      //color: transparent;
      font-family: "Inter-Bold", Helvetica;
      font-size: 3.0rem;
      width: 646px;
      font-weight: 700;
    // left: 0;
      letter-spacing: 0;
      line-height: 70px;
    }
@media screen and (max-width: 768px) {
  margin-bottom: auto;
  //width: 320px;
  //padding-left:0px ;

  h1{
      width: auto;
      font-size: 2.5rem;
      line-height: 50px;
    }
}

`
const Text = styled.div`

  p{
    color: #b9b9b9;
    font-family: "Inter-Medium", Helvetica;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    width: 623px;
    padding: 10px 0;
  }


   @media screen and (max-width:768px){
    p{
      color: #b9b9b9;
    font-family: "Inter-Medium", Helvetica;
    font-size: 20px;
    font-weight: 500;
   // left: 0;
    letter-spacing: 0;
    line-height: normal;
    //position: fixed;
    //top: 0;
    width: 325px;
    padding-left: 10px;
    }
   }
  `
const Button = styled.div`

        display: flex;
        cursor: pointer;
        margin-top: 40px;

        @media screen and (max-width: 768px) {
        display: table-row;
        align-items: center;
        
        }
    `
const GetStarted = styled.div`
    margin-right: 2.25rem;
    .box {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    }

    .box .get-started-box-wrapper {
    border: 0px none;
    height: 4.711rem;
    overflow-x: hidden;
    width: 11.65rem;
    }

    .box .get-started-box {
    height: 4.688rem;
    width: 10.25rem;
    }

    .box .overlap-group {
    height: 4.688rem;
    position: relative;
    width: 11.25rem;

    }

    .box .rectangle {
    background: linear-gradient(180deg, rgb(29, 3, 71) 0%, rgba(29, 3, 71, 0.75) 77.92%);
    border-radius: 20px;
    height: 4.188rem;
    width: 11rem;
    }

    .box .text-wrapper {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 1.25rem;
    font-weight: 600;
    left: 1.688rem;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 1.438rem;
    width: 8.313rem;
    }

    /* @media screen and (max-width: 768px) {
       // display: table-row;
        justify-content: center;
        } */

  @media screen and (max-width: 768px) {
  .box {
    //flex-direction: column;
   // align-items: center;
   //justify-content: center;
   padding: 20px 0;
   padding-left: 5px;
  }
  .box .overlap-group {
    //padding-left: 15px;

    }

  .box .get-started-box-wrapper {
    //width: 100%;
    //padding-left: 25px;
  }
}
`
const FindContractor = styled.div`

  opacity: 1;

    .box {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    }

    .box .find-contractors-box-wrapper {
    border: 0px none;
    height: 83px;
    overflow-x: hidden;
    width: 209px;
    }

    .box .find-contractors-box {
    height: 83px;
    /* left: 0;
    position: fixed;
    top: 0; */
    width: 183px;
    }

    .box .overlap-group {
    height: 83px;
    position: relative;
    width: 191px;
    }

    .box .rectangle {
    background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(245, 245, 245) 77.92%);
    border: 0.2px solid;
    border-color: #bdbcbc;
    border-radius: 20px;
    height: 69px;
    /* left: 0;
    position: absolute;
    top: 0; */
    width: 191px;
    }

    .box .text-wrapper {
    color: #1d0347;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    left: 17px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 23px;
    width: 174px;
    }

`

const ImgContent = styled.div`
    position: relative;
    /* top: 100px;
    left: 880px; */
    //margin-bottom: 80px;
    //padding-left: 250px;
    
    .box {
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  img{
    height: 626px;
  width: 472px;
  }
  

  @media screen and (max-width: 768px) {
    display: none;
    
  }
}
`
