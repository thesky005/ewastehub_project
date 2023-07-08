import React from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app';
import 'firebase/auth';

const ThankYou = () => {
  
  return (
    <Container>
      <Wrap>
        <img src='\images\Illustrations.svg'></img>
        <span>THANK YOU</span>
        <p>Get ready for best home renovation</p>
      </Wrap>
    </Container>
  )
}

export default ThankYou


const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;


`
const Wrap = styled.div`
width: 380px;
justify-content: center;
padding-top: 100px;
  img{
width: 300px;
height: 300px;
//padding-bottom: 0px;
align-items: center;
flex-shrink: 0;
//align-items: center;
padding-left: 30px;

}
span{
width: 299px;
height: 39px;
flex-direction: column;
flex-shrink: 0;
color: #000;
font-size: 45px;
font-family:"Inter-SemiBold", Helvetica ;
font-style: normal;
font-weight: 700;
line-height: normal;
align-items:center ;
display: flex;
justify-content: center;
padding-left: 30px;
}
p{
  color: #000;
font-size: 25px;
font-family: "Inter-SemiBold", Helvetica;
font-style: normal;
font-weight: 500;
line-height: normal;
width: 770px;
height: 39px;
flex-direction: column;
flex-shrink: 0;
display: flex;
justify-content: center;
//margin-right: 50px;
}

@media screen and (max-width: 768px) {
  img{
width: 220px;
height: 220px;
//padding-bottom: 0px;
padding-left: 80px;

}
span{
  font-size: 35px;
}
p{
font-size: 20px;
padding-left: 28px;
}
}

`