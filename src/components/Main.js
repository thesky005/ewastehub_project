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
                    <div className="label">
                        <div className="renovate-your-home-wrapper">
                            <h1 className="renovate-your-home">
                                <span className="text-wrapper">Renovate your home with</span>
                                <span className="span">&nbsp;</span>
                                <span className="text-wrapper-2">RENO</span>
                                <span className="text-wrapper-3">&nbsp;</span>
                            </h1>
                        </div>
                    </div>
                </RenovateText>
                <Text>
                    <div className="label">
                        <div className="p-wrapper">
                            <p className="text-wrapper">We help you find the best contractor for your home renovation</p>
                        </div>
                    </div>
                </Text>
                <Button>
                    <GetStarted>
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
  align-items: flex-start;
  margin: 100px 170px;
  min-height: 600px;
  //background-color: aliceblue;
  //justify-content: center;
  @media screen and (max-width : 768px) {
    margin: 7px 18px ;
    //max-width : 100px;
    align-items: center;
    justify-content: center;
  }
`
const TextContent = styled.div`

`
const RenovateTag = styled.div`
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
      height: 60px;
      width: 160px;
      padding-left: 10px;
    }

    .box .mail-button {
      height: 60px;
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
      //margin-top: 10px;
      align-items: center;
      padding-left: 15px;
      //flex-wrap: wrap;
    }

    .box .vector {
      height: 18px;
      width: 15px;
      align-items: center;
      padding-right: 15px;
    }
     /* Adjust the styling for mobile view  */
  }
`
const RenovateText = styled.div`
    margin-bottom: 36px;
    .label {
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.label .renovate-your-home-wrapper {
  border: 0px none;
  height: 159.91px;
  width: 646px;
}

.label .renovate-your-home {
  color: transparent;
  font-family: "Inter-Bold", Helvetica;
  font-size: 56px;
  font-weight: 700;
 // left: 0;
  letter-spacing: 0;
  line-height: 70px;
 // position: fixed;
 // top: 0;
  width: 646px;
}

.label .text-wrapper {
  color: #0b0a31;
}

.label .span {
  color: #16c89e;
}

.label .text-wrapper-2 {
  color: #0b0a31;
}

.label .text-wrapper-3 {
  color: #16c89e;
}

@media screen and (max-width: 768px) {
  margin-bottom: 11px;

  .label {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
}

  .label .renovate-your-home-wrapper {
    width: 100%;
  }

  .label .renovate-your-home {
    font-size: 36px;
    line-height: 50px;
    width: 380px;
    padding-left: 10px;
  }
}

`
const Text = styled.div`.label {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  .label .p-wrapper {
    border: 0px none;
    height: 83.36px;
    width: 623px;
  }
  
  .label .text-wrapper {
    color: #b9b9b9;
    font-family: "Inter-Medium", Helvetica;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    width: 623px;
  }

   @media screen and (max-width:768px){

    .label {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    //width: 100%;
  }
  
  .label .p-wrapper {
    border: 0px none;
    height: 83.36px;
    width: 400px;
  }
  
  .label .text-wrapper {
    color: #b9b9b9;
    font-family: "Inter-Medium", Helvetica;
    font-size: 20px;
    font-weight: 500;
   // left: 0;
    letter-spacing: 0;
    line-height: normal;
    //position: fixed;
    //top: 0;
    width: 360px;
    padding-left: 10px;
  }

   }
  `
const Button = styled.div`

        display: flex;
        cursor: pointer;
        margin-top: 20px;
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
    width: 11rem;
    }

    .box .get-started-box {
    height: 4.688rem;
    width: 10.25rem;
    }

    .box .overlap-group {
    height: 4.688rem;
    position: relative;
    width: 10.25rem;

    }

    .box .rectangle {
    background: linear-gradient(180deg, rgb(29, 3, 71) 0%, rgba(29, 3, 71, 0.75) 77.92%);
    border-radius: 20px;
    height: 4.188rem;
    width: 10rem;
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
  }
  .box .overlap-group {
    padding-left: 5px;

    }

  .box .get-started-box-wrapper {
    //width: 100%;
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
    width: 199px;
    }

    .box .find-contractors-box {
    height: 83px;
    /* left: 0;
    position: fixed;
    top: 0; */
    width: 193px;
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
    position: absolute;
    top: 100px;
    left: 880px;
    margin-bottom: 80px;
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
  height: 726px;
  position: relative;
  width: 672px;
  margin-bottom: 50px;
}

.box .main-photo-ara {
  height: 726px;
  /* left: 0;
  position: fixed;
  top: 0; */
  width: 672px;
}

.box .overlap {
  height: 355px;
  left: 204px;
  position: absolute;
  top: 0;
  width: 294px;
}

.box .rectangle {
  height: 355px;
  left: 0;
  position: absolute;
  top: 0;
  width: 250px;
}

.box .add-profile {
  background-color: #efc14c;
  border-radius: 41.89px/38.54px;
  height: 77px;
  left: 210px;
  position: absolute;
  top: 82px;
  width: 84px;
}

.box .add-user {
  height: 40px;
  left: 22px;
  object-fit: cover;
  position: absolute;
  top: 19px;
  width: 40px;
}

.box .overlap-group {
  height: 494px;
  left: 0;
  position: absolute;
  top: 115px;
  width: 188px;
}

.box .img {
  height: 448px;
  left: 0;
  position: absolute;
  top: 0;
  width: 182px;
}

.box .send-message {
  background-color: #16c89e;
  border-radius: 44.02px/40.5px;
  height: 81px;
  left: 100px;
  position: absolute;
  top: 413px;
  width: 88px;
}

.box .send {
  height: 43px;
  left: 19px;
  object-fit: cover;
  position: absolute;
  top: 22px;
  width: 43px;
}

.box .div {
  height: 347px;
  left: 204px;
  position: absolute;
  top: 379px;
  width: 470px;
}

.box .rectangle-2 {
  height: 324px;
  left: 0;
  position: relative;
  top: 0;
  width: 250px;
}

.box .top-workers {
  height: 88px;
  left: 155px;
  position: absolute;
  top: 259px;
  width: 315px;
}


.box .overlap-group-2 {
  height: 88px;
  position: relative;
  width: 313px;
}
.box .rec {
  //background: linear-gradient(180deg, rgb(255, 255, 255) 0%);
  background-color:rgb(255, 255, 255) ;
  border-radius: 20px;
  box-shadow: 0px 4px 4px #00000040;
  height: 80px;
  /* left: 0;
  position: absolute;
  top: 0; */
  width: 216px;
}
.box .text-wrapper {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 51px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 28px;
  width: 262px;
}

.box .worker {
  height: 45px;
  left: 8px;
  object-fit: cover;
  position: absolute;
  top: 17px;
  width: 45px;
}
`
