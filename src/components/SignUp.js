import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//import  auth  from '../firebase';
import firebaseApp from '../firebase'
import { useNavigate } from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';



const SignUp = () => {


    const auth = firebase.auth();
    const db = firebase.firestore();
    const navigate = useNavigate()

    const [nationalId, setNationalId] = useState('');
    const [mobile, setMobile] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    /*
        const handleRegistration = (e) => {
            e.preventDefault();
    
            auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                    const user = userCredential.user;
    
    
    
                    // Add user details to Firestore collection
                    firebase.firestore().collection('costumer').doc(user.uid).set({
                        nationalId,
                        mobile,
                        dateOfBirth,
                        email,
                        firstName,
                        lastName,
                    });
    
                    // Send email verification
                    
                    user.sendEmailVerification();
    
                    // Clear form inputs
                    setNationalId('');
                    setMobile('');
                    setDateOfBirth('');
                    setEmail('');
                    setFirstName('');
                    setLastName('');
                    setPassword('');
    
                    console.log('Registration successful. Verification email sent.');
                })
                .catch((error) => {
                    console.error('Registration failed:', error);
                });
        };
    */


        let emailTimeout = null;
        const [isEmailValid, setIsEmailValid] = useState(false);
        
      /*  const handlesetEmail = (e) => {
            const enteredEmail = setEmail();
            clearTimeout(emailTimeout);
            emailTimeout = setTimeout(() => {
              validateEmail(enteredEmail);
            }); // Adjust the delay as needed (in milliseconds)
          };
          
          const validateEmail = (email) => {
            if (email !== '' && !isValidEmail(email)) {
              alert('The email address is badly formatted.');
              
              setEmail('');
              return;
              
            } else {
              setIsEmailValid(true);
            }
          };
          
          const isValidEmail = (email) => {
            // Use a regular expression to validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
          };*/

      
    const handleRegistration = (e) => {
        e.preventDefault();

        if (
            nationalId.trim() === '' ||
            mobile.trim() === '' ||
            dateOfBirth.trim() === '' ||
            email.trim() === '' ||
            firstName.trim() === '' ||
            lastName.trim() === '' ||
            password.trim() === ''
          ) {
            // Set an error state or display an error message indicating that all fields are required
            console.error('Please fill in all the required fields.');
            alert('Please fill in all the required fields.');
          }

        const enteredEmail = email;
          clearTimeout(emailTimeout);
          emailTimeout = setTimeout(() => {
            validateEmail(enteredEmail);
          }, 500); // Adjust the delay as needed (in milliseconds)
        
        const validateEmail = (email) => {
          if (email !== '' && !isValidEmail(email)) {
            alert('The email address is badly formatted.');
            
            setEmail('');
            return;
            
          } else {
            setIsEmailValid(true);
          }
        };
        
        const isValidEmail = (email) => {
          // Use a regular expression to validate email format
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        };

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Add user details to Firestore collection
                firebase.firestore().collection('landingpage-costumer').doc(user.uid).set({
                    nationalId,
                    mobile,
                    dateOfBirth,
                    email,
                    firstName,
                    lastName,
                });
                console.log("Daata add")

                // user.sendEmailVerification().then(() => {
                //     // Navigate to the verification page after sending the verification email
                //     navigate('/verification');
                //   });

                // Clear form inputs
                setNationalId('');
                setMobile('');
                setDateOfBirth('');
                setEmail('');
                setFirstName('');
                setLastName('');
                setPassword('');

                navigate('/verification');

                console.log('Registration successful.');
                console.log(user)
            })
            .catch((error) => {
                console.error('Registration failed:', error);
            });
    };

    return (

        <Container>
            <Content>

                <Img>
                    <img src='\images\sigupimg.png'></img>
                </Img>
                <Form >
                    <Heading> <h2>Customer Registration</h2> </Heading>

                    <FormItem>
                        <Item>
                            <p>National ID /Iqama*</p>
                            <input type='number' placeholder='Enter your National ID /Iqama' value={nationalId}
                                onChange={(e) => setNationalId(e.target.value)} required min={10} max={10}></input>
                        </Item>
                        <Item>
                             <p>Mobile No*</p>
                             <div className='wrap'>
                            <div className='Left'>+996</div>
                            <div className='Right'>
                            <input type='number' placeholder='Enter your Mobile No ' value={mobile}
                                onChange={(e) => setMobile(e.target.value)} required min={9} max={9}></input>
                            </div>
                            </div>
                        </Item>
                        <Item>
                            <p>Date of birth</p>
                            <input type='date' placeholder='dd-mm-yyyy' value={dateOfBirth} required
                                onChange={(e) => setDateOfBirth(e.target.value)}></input>
                        </Item>
                        <Item>
                            <p>Email Adress*</p>
                            <input type='email' placeholder='Enter your Email Adress' value={email}
                                onChange={(e) => setEmail(e.target.value)}  required></input>
                        </Item>
                        <Item>
                            <p>First Name*</p>
                            <input type='text' placeholder='Enter your First Name' value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} required></input>
                        </Item>
                        <Item>
                            <p>Last Name</p>
                            <input type='text' placeholder='Enter your Last Name' value={lastName}
                                onChange={(e) => setLastName(e.target.value)} required></input>
                        </Item>
                        <Item>
                            <p>Password*</p>
                            <input type='password' placeholder='Enter your Password' value={password}
                                onChange={(e) => setPassword(e.target.value)} required></input>
                        </Item>
                    </FormItem>

                    <Term>
                        <div className="block">
                            <div className="termnCond" >
                                <div className='tickBox'>
                                    <input type="checkbox" id="tickBox" style={tickBoxStyle} required />
                                    <label htmlFor="tickBox" ></label>
                                </div>
                                <p className="i-m-over-years">
                                    <span className="span">I’m over 18 years old and agree to </span>
                                    <a href="https://www.reno.sa/terms-and-conditions" rel="noopener noreferrer" target="_blank">
                                        <span className="text-wrapper-2">Terms &amp; Conditions.</span>
                                    </a>
                                </p>
                            </div>
                            <div className='privacy'>
                                <div className='tickBox'>
                                    <input type="checkbox" id="tickBox" style={tickBoxStyle} required/>
                                    <label htmlFor="tickBox"></label>
                                </div>
                                <p className="i-agree-to-privacy">
                                    <span className="text-wrapper-3">I agree to </span>
                                    <a href="https://www.reno.sa/terms-and-conditions" rel="noopener noreferrer" target="_blank">
                                        <span className="text-wrapper-4">Privacy Policy</span>
                                    </a>
                                    <span className="text-wrapper-5">.</span>
                                </p>
                            </div>
                        </div>
                    </Term>

                    <SignUpBtn type="submit" onSubmit={handleRegistration} onClick={handleRegistration}>
                        <div className="overlap-group" >
                            <h1 className="sign-up">&nbsp;&nbsp;&nbsp;&nbsp; Sign Up</h1>
                        </div>
                    </SignUpBtn>

                    <Merchant>Not a customer sign up as <a href='merchant'>Merchant</a>.</Merchant>
                </Form>
            </Content>
        </Container>
    )
}

export default SignUp

const tickBoxStyle = {
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    boxShadow: '0px 4px 4px #00000040',
    height: '15px',
    width: '15px',
    border: 'none',
    margin: '5px',
};

const Container = styled.div`
//display: flex;
justify-content: center;
align-items: center;
//background-color: red;
width: 100vw;
//margin-left: 150px;
  //height: 100vh;
    //width: 100vw;
    //align-items: center;
    //font-size: small;
    @media screen and (max-width: 768px) {
        justify-content: flex-start;
    padding: 10px;
    height: auto;
    //overflow-x: scroll;
    }
 `
const Content = styled.div`
    display: flex;
    width: 362px; 
    height: 884px;
    margin-right: 300px;
    position: relative;
    //background-color: red;
    @media screen and (max-width:768px){
        padding-left: 15px;
    }

`

const Img = styled.div`
    margin-right: 120px;
    //background: linear-gradient(135deg, rgba(249, 245, 255, 0.56) 0%, rgba(214, 190, 249, 0.56) 49.27%, rgba(42, 11, 87, 0.56) 100%);
    @media screen and (max-width:768px){
        display: none;
        padding-left: 10px;
    }
    img{
       // max-height: 865px;
       width: 602px;
       height: 1114px;
       opacity: 60%;
      // background: linear-gradient(135deg, rgba(249, 245, 255, 0.56) 0%, rgba(214, 190, 249, 0.56) 49.27%, rgba(42, 11, 87, 0.56) 100%);
      // border-radius: 36px;

    }
    
 `
const Form = styled.div`

@media screen and (max-width:768px){
        justify-content: center;
    }
`
const Heading = styled.div`
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
    width: 642px;

    @media screen and (max-width:768px){
        margin-left: 17px;
        font-size: 20px;
    }

 `
const FormItem = styled.div`
 
    margin-bottom: 32px;
    @media screen and (max-width:768px){
        margin-left: 26px;
    }
    
 `
const Item = styled.div`

    p{
        color: #000000;
        font-family: "Inter-Regular", Helvetica;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0;
        line-height: normal;
        width: 347px;
    }
    input{
        background-color: #f5f5f5;
        border-radius: 15px;
        box-shadow: 0px 4px 4px #00000040;
        height: 42px;
        width: 350px;
        color: #bdbcbc;
        font-family: "Inter-Regular", Helvetica;
        //font-size: 26px;
        font-weight: 400;
        padding: 0 20px;

    }
    input::placeholder {
        color: #bdbcbc;
        font-family: "Inter-Regular", Helvetica;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0;
        line-height: normal;
        //width: 200px;
}

.Right{
    input{
        width: 270px;
    }
}

.Left{
width: 65px;
height: 42px;
border-radius: 15px;
background: #f5f5f5;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
justify-content: center;
align-items: center;
display: flex;
color: #BDBDBD;
//font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-right: 15px;
border: solid black 2px;
}
.wrap{
    display: flex;
    //justify-content: space-around;
}

@media screen and (max-width : 768px){
    p{
        font-size: 16px;
        width: 147px;
    }
    input{
        height: 42px;
        width: 250px;
    }

    .Right{
    input{
        width: 163px;
    }
}
}

 `
const SignUpBtn = styled.div`
    display: flex;
    justify-content: centers;
    align-items: center;
    position: relative;
    margin: 30px 0px;
    margin-left: 100px;
    cursor: pointer;
    @media screen and (max-width:768px){
        margin-left: 84px;
    }
    
    .overlap-group {
        background: linear-gradient(180deg, rgb(29, 3, 71) 0%, rgba(29, 3, 71, 0.75) 100%);
        border-radius: 15px;
        box-shadow: 0px 4px 4px #00000040;
        height: 47px;
        position: relative;
        width: 157px;

    }

    .sign-up {
        color: #ffffff;
        font-family: "Inter-SemiBold", Helvetica;
        font-size: 18px;
        font-weight: 600;
        //left: 10px;
        letter-spacing: 0;
        line-height: normal;
       // position: relative;
        //bottom: 10px;
        width: 127px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    `

const Term = styled.div`
@media screen and (max-width:768px){
        margin-left: 1px;
    }
    .i-m-over-years {
        color: #bdbcbc;
        font-family: "Inter-Regular", Helvetica;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0;
        line-height: normal;
        width: 750px;
    }

    .span {
        color: #bdbcbc;
        font-family: "Inter-Regular", Helvetica;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0;
    }

    .text-wrapper-2 {
        text-decoration: underline;
        font-size: 12px;
    }

    .i-agree-to-privacy {
        color: #bdbcbc;
        font-family: "Inter-Regular", Helvetica;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0;
        line-height: normal;
        width: 432px;
    }

    .text-wrapper-3 {
        color: #bdbcbc;
        font-family: "Inter-Regular", Helvetica;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0;
    }

    .text-wrapper-4 {
    text-decoration: underline;
    }

    .text-wrapper-5 {
        color: #bdbcbc;
        font-family: "Inter-Regular", Helvetica;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0;
    }

    .termnCond{
        display: flex;
        justify-content: center;
        align-items: center;
        }
    .privacy{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
`
const Merchant = styled.div`
    margin-left: 39px;
    padding-bottom: 50px;
    a{
        cursor: pointer;
    }
`
