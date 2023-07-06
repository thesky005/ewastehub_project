import React, { useEffect } from 'react'
import styled from 'styled-components'
import SignUp from './SignUp'
import { useNavigate, useParams } from 'react-router-dom'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const Verification = () => {

  const navigate = useNavigate();
  const auth = firebase.auth();
  const user = firebase.auth().currentUser;
  const email = user.email;


  const handleVerifyEmail = () => {
    user
      .sendEmailVerification()
      .then(() => {
        console.log('Verification email sent.');
      })
      .catch((error) => {
        console.error('Failed to send verification email:', error);
      });
    console.log(user)
    console.log("User email", user.email)
    console.log("Email is verify or Not", user.emailVerified)
    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((user) => {
    //       if (user && user.emailVerified) {
    //         // Email verified, redirect to thank you page
    //         navigate('/thankyou');
    //         console.log('Email is verified')
    //       }
    //     });

    //     return () => unsubscribe();
    //   }, [auth , navigate]);
  };

  return (
    <Container>

      <Img><img className="email" alt="Email" src="\images\Email.png" /></Img>
      <Text1>
        <p>You have entered {email} as the email adrress for your account</p>
        <p className="p">Please verify this email adress by clicking button below</p>
      </Text1>
      <Wrap3>
        <div className="group">
          <div className="overlap-group" onClick={handleVerifyEmail}>
            <h1 className="text-wrapper">Verify Email</h1>
          </div>
        </div>
      </Wrap3>
    </Container>
  )
}

export default Verification

const Container = styled.div`

  margin-top: 100px;
  align-items: center;
  

`
const Text1 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 25px;
  font-weight: 400;
  p{
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  @media screen and (max-width : 768px){
    font-size: 16px;
    p{
      /* max-width: 200px;
      justify-content: center; */
      margin: 0 15px;
      text-align: center;
      padding: 20px 20px;
    }
  }
  

`
const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;

  @media screen and (max-width : 768px){
    img{width: 60%;}
  }

`
const Wrap3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .group {
  height: 75px;
  width: 299px;
  cursor: pointer;
}

.overlap-group {
  background: linear-gradient(180deg, rgb(29, 3, 71) 0%, rgba(29, 3, 71, 0.75) 100%);
  border-radius: 15px;
  box-shadow: 0px 4px 4px #00000040;
  height: 55px;
  position: relative;
  width: 299px;
}

.text-wrapper {
  color: #ffffff;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 22px;
  font-weight: 600;
  //left: 108px;
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:15px;
}

`