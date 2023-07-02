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
      <div className="email-verification">
        <div className="div">
          <img className="email" alt="Email" src="email.png" />
          <div className="group">
            <div className="overlap-group" onClick={handleVerifyEmail}>
              <h1 className="text-wrapper">Verify Email</h1>
            </div>
          </div>
          <p className="you-have-entered">
            <span className="span">You have entered </span>
            <span className="text-wrapper-2">{email}</span>
            <span className="span"> as the email adrress for your account </span>
          </p>
          <p className="p">Please verify this email adress by clicking button below</p>
        </div>
      </div>
    </Container>
  )
}

export default Verification

const Container = styled.div`
.email-verification {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.email-verification .div {
  background-color: #ffffff;
  border: 1px none;
  height: 1024px;
  position: relative;
  width: 1440px;
}

.email-verification .email {
  height: 273px;
  left: 583px;
  object-fit: cover;
  position: absolute;
  top: 163px;
  width: 273px;
}

.email-verification .group {
  height: 75px;
  /* left: 526px;
  position: absolute;
  top: 610px; */
  width: 411px;
  cursor: pointer;
}

.email-verification .overlap-group {
  background: linear-gradient(180deg, rgb(29, 3, 71) 0%, rgba(29, 3, 71, 0.75) 100%);
  border-radius: 15px;
  box-shadow: 0px 4px 4px #00000040;
  height: 75px;
  position: relative;
  width: 409px;
}

.email-verification .text-wrapper {
  color: #ffffff;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 30px;
  font-weight: 600;
  left: 108px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 18px;
  white-space: nowrap;
  width: 193px;
}

.email-verification .you-have-entered {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 25px;
  font-weight: 400;
  left: 234px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 487px;
  width: 1015px;
}

.email-verification .span {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 0;
}

.email-verification .text-wrapper-2 {
  font-family: "Inter-Bold", Helvetica;
  font-weight: 700;
}

.email-verification .p {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 25px;
  font-weight: 400;
  left: 383px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 533px;
  width: 674px;
}

`
