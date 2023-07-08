import React from 'react'
import styled from 'styled-components'

const Main = () => {
  return (
    <Container>
      <TextContent>
        <RenovateTag>
          <div className="box">
            <div className="mail-button-wrapper">
              <div className="mail-button">
                <div className="overlap-group">
                  <div className="text-wrapper">Renovate with ease</div>
                  <img className="vector" alt="Vector" src="\images\Vector.svg" />
                </div>
              </div>
            </div>
          </div>
        </RenovateTag>
        <RenovateText>


              <h1>
                <span>Renovate your home with RENO</span>
              </h1>
          

        </RenovateText>
        <Text>

              <p>We help you find the best contractor for your home renovation</p>
        
        </Text>
        <Button>
          <GetStarted>
            <a href='merchant'>
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
            </a>
          </GetStarted>
          <FindContractor>
            <div className="box">
              <div className="find-contractors-box-wrapper">
                <div className="find-contractors-box">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="text-wrapper">Find Contractors</div>
                  </div>
                </div>
              </div>
            </div>
          </FindContractor>
        </Button>
      </TextContent>
      <ImgContent>
        <div className="box">
          <div className="main-photo-ara-wrapper">
            <div className="main-photo-ara">
              <div className="overlap">
                <img className="rectangle" alt="Rectangle" src="\images\Rectangle3.png" />
                <div className="add-profile">
                  <img className="add-user" alt="Add user" src="\images\Add user.svg" />
                </div>
              </div>
              <div className="overlap-group">
                <img className="img" alt="Rectangle" src="\images\Rectangle4.png" />
                <div className="send-message">
                  <img className="send" alt="Send" src="\images\Send.svg" />
                </div>
              </div>

              <div className="div">
                <img className="rectangle-2" alt="Rectangle" src="\images\Rectangle5.png" />
                <div className="top-workers">
                  <div className="overlap-group-2">
                    <div className="rec" />
                    <div className="text-wrapper">Top Contractors</div>
                    <img className="worker" alt="Worker" src="\images\Worker.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ImgContent>



    </Container>
  )
}

export default Main
const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 1.875rem 10.625rem;
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
  box-shadow: 0px 4px 4px #00000040;
  height: 54px;
  position: relative;
  width: 248px;
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
  width: 199px;
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
      font-size: 3.5rem;
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
  

  @media screen and (max-width: 768px) {
    display: none;
    
  }
}

.box .main-photo-ara-wrapper {
  border: 0px none;
  height: 626px;
  position: relative;
  width: 472px;
  margin-bottom: 50px;
}

.box .main-photo-ara {
  height: 726px;
  /* left: 0;
  position: fixed;
  top: 0; */
  width: 472px;
}

.box .overlap {
  height: 355px;
  left: 204px;
  position: absolute;
  top: 0;
  width: 294px;
}

.box .rectangle {
  height: 305px;
  left: 0;
  position: absolute;
  top: 0;
  //width: 210px;
}

.box .add-profile {
  background-color: #efc14c;
  border-radius: 41.89px/38.54px;
  height: 60px;
  left: 180px;
  position: absolute;
  top: 42px;
  width: 64px;
}

.box .add-user {
  height: 30px;
  left: 18px;
  object-fit: cover;
  position: absolute;
  top: 14px;
 // width: 40px;
}

.box .overlap-group {
  height: 494px;
  left: 7px;
  position: absolute;
  top: 115px;
  width: 188px;
}

.box .img {
  height: 408px;
  left: 0;
  position: absolute;
  top: 0;
  //width: 182px;
}

.box .send-message {
  background-color: #16c89e;
  border-radius: 44.02px/40.5px;
  height: 71px;
  left: 120px;
  position: absolute;
  top: 363px;
  width: 72px;
}

.box .send {
  height: 33px;
  left: 19px;
  object-fit: cover;
  position: absolute;
  top: 22px;
  width: 33px;
}

.box .div {
  height: 347px;
  left: 204px;
  position: absolute;
  top: 379px;
  width: 305px;
}

.box .rectangle-2 {
  height: 305px;
  left: 0;
  position: relative;
  bottom: 48px;
  width: 220px;
}

.box .top-workers {
  //height: 88px;
  left: 155px;
  position: absolute;
  top: 160px;
  width: 195px;
}


.box .overlap-group-2 {
  height: 88px;
  position: relative;
  width: 176px;
}
.box .rec {
  //background: linear-gradient(180deg, rgb(255, 255, 255) 0%);
  background-color:rgb(255, 255, 255) ;
  border-radius: 20px;
  box-shadow: 0px 4px 4px #00000040;
  height: 70px;
  /* left: 0;
  position: absolute;
  top: 0; */
  width: 175px;
}
.box .text-wrapper {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 15px;
  font-weight: 600;
  left: 51px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 28px;
  width: 122px;
}

.box .worker {
  //height: 45px;
  left: 8px;
  object-fit: cover;
  position: absolute;
  top: 17px;
  width: 32px;
}
`
