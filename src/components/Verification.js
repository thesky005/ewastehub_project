import React from 'react'
import  styled  from 'styled-components'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const Verifaction = () => {

    const user = firebase.auth().currentUser;
  const email = user.email;


  const handleVerifyEmail = () => {
    user
      .sendEmailVerification()
      .then(() => {
        console.log('Verification email sent.');
        alert('Verification email sent.')
       // setIsUserLoggedIn(true);
      })
      .catch((error) => {
        console.error('Failed to send verification email:', error);
      });
    console.log(user)
    console.log("User email", user.email)
    console.log("Email is verify or Not", user.emailVerified)
  };
    return (
        <Container>
            <div className="wrap">
            <div className="verify">
                <div className="rectangle-23"></div>

                <div className="wrap1">

                <img className="email" src="\images\Emailv.svg" />
                <div className="emailtext">You have entered {email} as the email adrress for your account</div>

                <div className="please-verify-this-email-adress-by-clicking-button-below">
                    Please verify this email adress by clicking button below
                </div>
                <div className="overlap-group" onClick={handleVerifyEmail}>
                    <h1 className="text-wrapper">Verify Email</h1>
                </div>
                </div>
            </div>
            </div>
            <img src="\images\Side Images.png" alt="" className='side_image'/>
        </Container>
    )
}

export default Verifaction

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    //align-items: center;
    padding-top: 60px;
    img{
  width: 550px;
  height: 530px;
  align-items: center;
  
    }
    .verify {
        //margin-top: 65px;
  position: relative;
  inset: 0;
  
  justify-content: center;
  align-items: center;
}
.rectangle-23 {
  background: #f7fbff;
  border-radius: 24px;
  border-style: solid;
  border-color: #000000;
  border-width: 1px;
  width: 438px;
  height: 567px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  z-index: -1;
}
.wrap1{
    //margin-top: 50px;
    padding-top: 90px;
}

.emailtext{
    color: #000;
text-align: center;
width: 309px;
font-family: "Source Sans Pro", sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 38px;
margin-left: 65px;
padding: 15px 0;
}

.email {
  width: 102px;
  height: 102px;
  color: #000;
text-align: justify;
width: 309px;
font-family: "Source Sans Pro", sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 38px;
margin-left: 65px;
}
.please-verify-this-email-adress-by-clicking-button-below {
  color: #000000;
  text-align: justified;
  font: 400 16px/38px "Source Sans Pro", sans-serif;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}

.overlap-group {
  background-color: #f58e49;
  border-radius: 20px;
  height: 50px;
  position: relative;
  width: 177px;
  margin-left: 130px;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
}

.text-wrapper {
  color: #f7fbff;
  font-family: "Source Sans Pro-Bold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 24px;
  letter-spacing: 0;
  line-height: normal;
  //position: absolute;
  //top: px;
 // position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 14px;
}

@media screen and (min-width:280px) and (max-width:414px) {

  .side_image
  {
    display:none;
  }
  .rectangle-23
  {
    width:300px;
  
  }
  .wrap
  {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow:none;
  }
  .wrap1
  {
  height:600px;
  }
  .emailtext
  {
    font-size:14px;
    margin-left:0px;
  }
  .email
  {
    width:150px;
    height:90px;
    
  }
  .please-verify-this-email-adress-by-clicking-button-below
  {
    font-size:14px;
    width:290px;
    text-align:center;
    margin-left:0px;
  }
  .overlap-group
  {
    margin-left:60px;
    
  }
}
  
@media screen and (min-width:420px) and (max-width:768px)
{

  .side_image
  {
    display:none;
  }
  .rectangle-23
  {
    width:300px;
  
  }
  .wrap
  {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow:none;
  }
  .wrap1
  {
  height:600px;
  }
  .emailtext
  {
    font-size:14px;
    margin-left:0px;
  }
  .email
  {
    width:150px;
    height:90px;
    
  }
  .please-verify-this-email-adress-by-clicking-button-below
  {
    font-size:14px;
    width:290px;
    text-align:center;
    margin-left:0px;
  }
  .overlap-group
  {
    margin-left:60px;
    
  }
}
@media screen and (min-width:820px) and (max-width:1024px)
{
  .side_image
  {
    display:none;
  }
  .rectangle-23
  {
    width:400px;
  
  }
  .wrap
  {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow:none;
  }
  .wrap1
  {
  height:600px;
  width:400px;
  }
  .emailtext
  {
    font-size:18px;
    margin-left:10px;
    text-align:center;
    width:350px;
    
  }
  .email
  {
    width:150px;
    height:90px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left:120px;
  }
  .please-verify-this-email-adress-by-clicking-button-below
  {
    font-size:18px;
    width:350px;
    text-align:center;
    margin-left:10px;
  }
  .overlap-group
  {
   
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

`

// import React, { useEffect } from 'react'
// import styled from 'styled-components'
// import SignUp from './SignUp'
// import { useNavigate, useParams } from 'react-router-dom'
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';


// const Verification = () => {

//   const navigate = useNavigate();
//   const auth = firebase.auth();
//   const user = firebase.auth().currentUser;
//   const email = user.email;


//   const handleVerifyEmail = () => {
//     user
//       .sendEmailVerification()
//       .then(() => {
//         console.log('Verification email sent.');
//       })
//       .catch((error) => {
//         console.error('Failed to send verification email:', error);
//       });
//     console.log(user)
//     console.log("User email", user.email)
//     console.log("Email is verify or Not", user.emailVerified)
//     // useEffect(() => {
//     //     const unsubscribe = auth.onAuthStateChanged((user) => {
//     //       if (user && user.emailVerified) {
//     //         // Email verified, redirect to thank you page
//     //         navigate('/thankyou');
//     //         console.log('Email is verified')
//     //       }
//     //     });

//     //     return () => unsubscribe();
//     //   }, [auth , navigate]);
//   };

//   return (
//     <Container>

//       <Img><img className="email" alt="Email" src="\images\Email.png" /></Img>
//       <Text1>
//         <p>You have entered {email} as the email adrress for your account</p>
//         <p className="p">Please verify this email adress by clicking button below</p>
//       </Text1>
//       <Wrap3>
//         <div className="group">
//           <div className="overlap-group" onClick={handleVerifyEmail}>
//             <h1 className="text-wrapper">Verify Email</h1>
//           </div>
//         </div>
//       </Wrap3>
//     </Container>
//   )
// }

// export default Verification

// const Container = styled.div`

//   margin-top: 100px;
//   align-items: center;
  

// `
// const Text1 = styled.div`
//   color: #000000;
//   font-family: "Inter-Regular", Helvetica;
//   font-size: 25px;
//   font-weight: 400;
//   p{
//     display: flex;
//     justify-content: center;
//     align-items: center;
    
//   }

//   @media screen and (max-width : 768px){
//     font-size: 16px;
//     p{
//       /* max-width: 200px;
//       justify-content: center; */
//       margin: 0 15px;
//       text-align: center;
//       padding: 20px 20px;
//     }
//   }
  

// `
// const Img = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 25px;

//   @media screen and (max-width : 768px){
//     img{width: 60%;}
//   }

// `
// const Wrap3 = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   .group {
//   height: 75px;
//   width: 299px;
//   cursor: pointer;
// }

// .overlap-group {
//   background: linear-gradient(180deg, rgb(29, 3, 71) 0%, rgba(29, 3, 71, 0.75) 100%);
//   border-radius: 15px;
//   box-shadow: 0px 4px 4px #00000040;
//   height: 55px;
//   position: relative;
//   width: 299px;
// }

// .text-wrapper {
//   color: #ffffff;
//   font-family: "Inter-SemiBold", Helvetica;
//   font-size: 22px;
//   font-weight: 600;
//   //left: 108px;
//   letter-spacing: 0;
//   line-height: normal;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding-top:15px;
// }

// `