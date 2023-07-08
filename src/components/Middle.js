import React from 'react'
import styled from 'styled-components'

const Middle = () => {
  return (
    <Container>
      <TextContent>
        <p>THE BEST IN TOWN</p>
        <h1>Why RENO is unique</h1>
      </TextContent>
      <Content>
        <ContentItem>
          <Wrap>
            <img src='\images\Project.svg'></img>
            <p>Project Timeline Management</p>
          </Wrap>
        </ContentItem>
        <ContentItem>
          <Wrap>
            <img src='\images\Group.svg'></img>
            <p>Transparent Communication</p>
          </Wrap>
        </ContentItem>
        <ContentItem>
          <Wrap>
            <img src='\images\Quality control.svg'></img>
            <p>Quality Assurance</p>
          </Wrap>
        </ContentItem>
        <ContentItem>
          <Wrap>
            <img src='\images\Operator.svg'></img>
            <p>Assistance in Bid Comparison</p>
          </Wrap>
        </ContentItem>
        <ContentItem>
          <Wrap>
            <img src='\images\Workers.svg'></img>
            <p>Contractor Accountability
</p>
          </Wrap>
        </ContentItem>
        <ContentItem>
          <Wrap>
            <img src='\images\Payment method.svg'></img>
            <p>Secure Payment System</p>
          </Wrap>
        </ContentItem>
      </Content>
      <TextContent1>
        <p>HOME REVIVE</p>
        <h1>How It Works?</h1>
      </TextContent1>
      <StepLine>

        <ImgLine>
          <div className='step'>
            <ImgLineWrap>
              <Wrapimg>
                <img src='\images\Presentation.svg'></img>
              </Wrapimg>
              <Wrap0>
                <Wrap1>
                  <p>1</p>
                </Wrap1>
              </Wrap0>
              <Wrap2><p>Post Your Project</p></Wrap2>
              {/* <Wrap3>Start by posting your project details and requirements on the app.</Wrap3> */}
            </ImgLineWrap>
            <ImgLineWrap>
              <Wrapimg>
                <img src='\images\Worker2.svg'></img>
              </Wrapimg>
              <Wrap0>
                <Wrap1>
                  <p>2</p>
                </Wrap1>
              </Wrap0>
              <Wrap2> <p>Connect with Contractors</p>  </Wrap2>
              {/* <Wrap3>Review the shortlisted contractors and choose the ones you would like to connect with.</Wrap3> */}
            </ImgLineWrap>
            <ImgLineWrap>
              <Wrapimg>
                <img src='\images\Bid.svg'></img>
              </Wrapimg>
              <Wrap0>
                <Wrap1>
                  <p>3</p>
                </Wrap1>
              </Wrap0>
              <Wrap0>
                <Wrap2> <p>Get Competitive Bids</p>  </Wrap2>
              </Wrap0>
              <Wrap0>
                {/* <Wrap3>Reach out to the chosen contractors and share your project details with them.</Wrap3> */}
              </Wrap0>
            </ImgLineWrap>
            <ImgLineWrap>
              <Wrapimg>
                <img src='\images\Cashless payment.svg'></img>
              </Wrapimg>
              <Wrap0>
                <Wrap1>
                  <p>4</p>
                </Wrap1>
              </Wrap0>
              <Wrap2><p>Secure Payments & Support</p></Wrap2>
              {/* <Wrap3>Provides a trusted and reliable platform for users to make payments to contractors.</Wrap3> */}
            </ImgLineWrap>
          </div>
        </ImgLine>
        {/* <img src='\images\Worker.svg'></img>
              <img src='\images\Bid.svg'></img>
              <img src='\images\Cashless payment.svg'></img> */}
      </StepLine>

      <Section>
        <div className="reno-for-shoppers">
          <h1 className="text-wrapper">Unleashing Renovation Innovation</h1>
          <p className="p">Effortlessly transform your homes and spaces with the Reno mobile app.</p>
          <a href='signup'>
          <div className="get-the-app-box">
            <div className="overlap-group">
              {/* <img className="ph-arrow-up" alt="Ph arrow up" src="ph-arrow-up.png" /> */}
              <div className="div">Get Started</div>
            </div>
          </div>
          </a>
        </div>
        <img className="rectangle" alt="Rectangle" src="\images\home.png" />
      </Section>
      <Section>
        <div className="reno-for-shoppers">
          <h1 className="text-wrapper">Grow your business with RENO</h1>
          <p className="p">Unleash the Power of Reno for Unprecedented Business Success.</p>
          <a href='merchant'>
          <div className="get-the-app-box">
            <div className="overlap-group1">
              {/* <img className="ph-arrow-up" alt="Ph arrow up" src="ph-arrow-up.png" /> */}
              <div className="div1">RENO for business</div>
            </div>
           
          </div>
          </a>

        </div>
        <div className="emptyspace"><p></p></div>
        <img className="rectangle" alt="Rectangle" src="\images\person.png" />
      </Section>
    </Container>
  )
}

export default Middle

const Container = styled.div`

    padding: 30px 0;
    margin: 0 170px;
    @media screen and (max-width:768px){
        margin: 0 8%;
        
    }

`
const TextContent = styled.div`
    //margin: 0 170px;
    p{
        color:#16C99E;
        font-family: "Inter-SemiBold", Helvetica;
        font-size: 20px;
        font-weight: 600;
        //left: 0;
        letter-spacing: 0;
        line-height: normal;
        position: relative;
       // top: 0;
        //width: 199px;
        @media (max-width: 768px) {
      width: 100%;
      font-size: 14px;
      margin: 14px;
      //line-height: 48px;
    }
    }
    h1{
        display: flex;
        font-family: "Inter-Medium",Helvetica;
       // font-family: Inter;
        width: 765px;
        //height: 159.91px;
        flex-direction: column;
        flex-shrink: 0;
        color: #0B0A31;
        font-size: 45px;
        //font-family: Inter;
        font-weight: 700;
        line-height: 70px;
        @media (max-width: 768px) {
      width: 100%;
      font-size: 32px;
      line-height: 48px;
    }
    }

`
const Content = styled.div`

  display: grid;
  grid-gap: 25px;
  gap: 136px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media screen and (max-width:768px){
    display: grid;
    grid-gap: 15px;
    gap: 76px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const ContentItem = styled.div`

    width: 269px;
    height: 308px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #FAF9F9;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.40);
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:768px){
      width: 140px;
      height: 200px;
    }

    
`
const Wrap = styled.div`

@media screen and (max-width : 768px){
    
  }

      img{
      width: 94px;
      height: 94px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 2rem;
      padding-bottom: 36px;
    }
    p{
      //display: flex;
      width: 162px;
      height: 63px;
      //flex-direction: column;
      //flex-shrink: 0;
      color: #0B0A31;
      text-align: center;
      font-size: 1.25rem;
      font-family: "Inter-Medium",Helvetica;
      font-weight: 700;
      line-height: 30px;  
    }
    @media screen and (max-width:768px){
      img{
        width: 60px;
        height: 60px;
        //flex-shrink: 2;
        margin-left: 50px;
        padding: 24px 0;

      }
      p{
        //font-size: 14px;
        font-size: 93%;
        line-height: 20px;  
        //padding: 0 5px;

      }

    }
`
const TextContent1 = styled.div`
    padding: 62px 0;
    p{
        color:#16C99E;
        font-family: "Inter-Medium",Helvetica;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 0;
        line-height: normal;
        position: relative;
        @media (max-width: 768px){
          width: 100%;
          font-size: 14px;
          margin: 14px;
        }
    }
    h1{
        display: flex;
        font-family: "Inter-Medium",Helvetica;
        width: 765px;
        //height: 159.91px;
        flex-direction: column;
        flex-shrink: 0;
        color: #0B0A31;
        font-size: 45px;
        font-weight: 700;
        line-height: 70px;
        @media (max-width: 768px) {
          width: 100%;
          font-size: 32px;
          line-height: 48px;
        }
    }

`
const StepLine = styled.div`
  justify-content: center;
  display: flex;
  @media screen and (max-width : 768px){
    //font-size: 45%;
    //display: table-column;
  }

  /* span{
      position: absolute;
      width: 200px;
      height: 5.5px;
      background: linear-gradient(180deg, #1D0347 0%, rgba(29, 3, 71, 0.75) 77.92%);
      top: 1000px;
    } */
  
`
const ImgLine = styled.div`
  //display: flex;
 // justify-content: space-between;
  margin: 0 30px;
  //align-items: center;
  .step{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
  @media screen and (max-width : 768px){
      
      //justify-content: center;
      //align-items: center;
      //display: none;
      .step{
        display: block;
        width: screen;
      }
  }
  img{
    width: 150px;
    height: 150px;
    @media screen and (max-width : 768px){
      width: 150px;
      height: 150px;
      justify-content: space-around;
    }
  }
  

`
const Wrapimg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom : 64px;
  margin: 0 30px;
  width: 150px;
    height: 150px;
  img{
    padding-left: 12px;
    
  }
 

`
const Wrap1 = styled.div`
    width: 90px;
    height: 67.143px;
    border-radius: 20px;
    background: linear-gradient(180deg, #1D0347 0%, rgba(29, 3, 71, 0.75) 77.92%);
    p{
    width: 15px;
    height: 26px;
    color: #FFF;
    font-size: 20px;
    font-family: "Inter-Medium",Helvetica;
    font-weight: 600;
    line-height: 30px;
    position: relative;
    //top: 10px;
    left:38px
    }

`
const Wrap0 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrap2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p{
      color: #0B0A31;
      text-align: center;
      font-size: 20px;
      font-family: "Inter-Medium",Helvetica;
      font-weight: 700;
      line-height: 35px;
      width: 185px;
      height: 60px;
      //padding: 10px 0;
      padding-bottom:10px;
  }
`
const Wrap3 = styled.div`
  //display: flex;
  width: 254px;
  height: 83px;
  color: #B9B9B9;
  font-size: 14px;
  font-family: "Inter-Medium",Helvetica;
  font-weight: 500;
  //justify-content: center;
  text-align: justify;
  //padding-left: 10px;
  //width: 150px;
`
const ImgLineWrap = styled.div`

  margin: 0 36px;
  padding: 0 30px;
`

const Section = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top:5.625rem ;

@media screen and (max-width : 768px){
  display: inline-block;
  font-size:12px;
  padding-top:2.625rem;
}
.emptyspace{
  padding-top: 20px;
}
.reno-for-shoppers {
  height: 20.1875rem;
  width: 68.9375rem;
  @media screen and (max-width : 768px){
    max-width: 768px;
    height: 15.1875rem;
  }
}

.text-wrapper {
  color: #0b0a31;
  font-family: "Inter-Bold", Helvetica;
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 4.025rem;
  //white-space: nowrap;
  width: 43.9375rem;
  margin-bottom: 1.75rem;
  //flex-wrap: wrap;
  @media screen and (max-width : 768px){
    display: flex;
    margin-bottom: 0.75rem;
    font-size: 1.2rem;
    //width: 45%;
  }
}

.p {
  color: #b9b9b9;
  font-family: "Inter-Medium", Helvetica;
  font-size: 1.15rem;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  width: 40.25rem;
  padding-bottom: 3.75rem;

  @media screen and (max-width : 768px){
    width: 40%;
    font-size:0.9375rem;
    padding-bottom: 1.75rem;
    line-height: 1.5;
    //height: 200px;
}

}

.rectangle {
  height: 21.5625rem;
  object-fit: cover;
  width: 20.1875rem;
  @media screen and (max-width : 768px){
    width: 12.6875rem;
    height: 12.5rem;
    border-radius: 16px;
    padding-top: 10px;
}
}

.get-the-app-box {
  height: 3.6875rem;
  width: 11.125rem;
  cursor: pointer;
}

.overlap-group {
  background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(245, 245, 245) 77.92%);
  border: 0.18px solid;
  border-color: #bdbcbc;
  border-radius: 18.39px;
  height: 3.6875rem;
  position: relative;
  width: 8.125rem;
}

.ph-arrow-up {
  height: 20px;
  width: 21px;
}

.div {
  color: #4b4b4b;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 1.15rem;
  font-weight: 600;
  left: 0.9375rem;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 1.1875rem;
  white-space: nowrap;
  width: 7.3125rem;
}

.overlap-group1 {
  background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(245, 245, 245) 77.92%);
  border: 0.18px solid;
  border-color: #bdbcbc;
  border-radius: 18.39px;
  height: 3.6875rem;
  position: relative;
  width: 12.5rem;
}

.ph-arrow-up {
  height: 20px;
  width: 21px;
}

.div1 {
  color: #4b4b4b;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 18.4px;
  font-weight: 600;
  left: 15px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 19px;
  white-space: nowrap;
  width: 117px;
}

`

