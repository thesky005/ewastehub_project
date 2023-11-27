import React from 'react'
import { useState } from 'react';
import  styled  from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseApp from '../firebase'
import { Link, useNavigate } from 'react-router-dom';

     
const Signup = ({ setIsUserLoggedIn }) => {

  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const navigate = useNavigate();
  const handleSignupClick = () => {
    setIsLoginVisible(false);
  };

  const handleLoginClick = () => {
    setIsLoginVisible(true);
  };

  const btnStyle = {
    height: '40px',
    width: '280px',
    margin: '20px auto',
    borderRadius: '50px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };

  const loginSignupStyle = {
    fontSize: '20px', 
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    position: 'relative',
    cursor: 'pointer',
    fontWeight :'600',
    paddingTop:'50px', '@media screen and (max-width: 768px)': {
      fontSize: '18px',
      paddingTop: '30px',
    },
  };

  const sliderStyle = {
    height: '60px',
    width: '150px',
    borderRadius: '50px',
    backgroundImage: 'linear-gradient(to right, rgb(255, 195, 110), rgb(255, 146, 91))',
    position: 'absolute',
    top: '20px',
    left: '100px',
    transition: 'all 0.5s ease-in-out',
  };

  const formSectionStyle = {
    height: '500px',
    width: '990px',
    padding: '20px 0',
    display: 'flex',
    position: 'relative',
    transition: 'all 0.5s ease-in-out',
    left: '0px',
  };

  const formSectionMoveStyle = {
    left: '-500px',
  };

  const loginSignupBoxStyle = {
    height: '100%',
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px 10px',
    gap: '30px'
  };

  const loginBoxStyle = {
    gap: '50px',
  };

  const signupBoxStyle = {
    gap: '10px',
  };

  const inputStyle = {
    height: '50px',
    width: '320px',
    outline: 'none',
    border: 'none',
    color: 'rgb(77, 77, 77)',
    backgroundColor: 'rgb(240, 240, 240)',
    borderRadius: '50px',
    paddingLeft: '25px',
    fontSize: '16px',
  };
 
  const buttonStyle = {
    height: '40px',
    width: '130px',
    borderRadius: '50px',
    //backgroundImage: 'linear-gradient(to right, rgb(255, 255, 255), rgb(245, 245, 245))',

    // background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 77.92%)',
    backgroundImage: 'linear-gradient(to right, rgb(255, 195, 110), rgb(255, 146, 91))',
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '24px',
    fontWeight :'600'
  };

  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [confirmedpass, setconfirmedpass] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState('');

   const auth = firebase.auth();

  let emailTimeout = null;
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (
        
        email.trim() === '' ||
        Name.trim() === '' ||
        confirmedpass.trim() === '' ||
        password.trim() === ''
      ) {
        // Set an error state or display an error message indicating that all fields are required
        console.error('Please fill in all the required fields.');
        alert('Please fill in all the required fields.');
      }

    if(confirmedpass != password){
      alert('Password is not matching');
      return
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

   
     await auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            
            // Add user details to Firestore collection
            firebase.firestore().collection('userdetail').doc(user.uid).set({
                email,
                Name,
                confirmedpass,
                password
            });
            console.log("Daata add")

            // user.sendEmailVerification().then(() => {
            //     // Navigate to the verification page after sending the verification email
            //     navigate('/verification');
            //   });

            // Clear form inputs
            setEmail('');
            setName('');
            setconfirmedpass('');
            setPassword('');

            navigate('/verification');

            console.log('Registration successful.');
            setIsUserLoggedIn(true);
            console.log(user)
        })
        .catch((error) => {
            console.error('Registration failed:', error);
            alert(error)
        });
};

const [loginEmail, setLoginEmail] = useState('');
const [loginPassword, setLoginPassword] = useState('');

async function logIn(email, password) {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    // Signed in
    var user = userCredential.user;
    setIsUserLoggedIn(true);
    localStorage.setItem('isUserLoggedIn', 'true');
    navigate("/");
    console.log(user);
    // ... any other code you want to execute after successful login
  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error('Login failed:', errorMessage);

    // ... any other error handling code you want to add
  }
}

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  if (
    loginEmail.trim() === '' ||
    loginPassword.trim() === ''
  ) {
    // Set an error state or display an error message indicating that all fields are required
    console.error('Please fill in all the required fields.');
    alert('Please fill in email and password fields.');
    return; // Add this line to exit the function if fields are empty
  }


  try {
    await logIn(loginEmail, loginPassword); // Use loginEmail and loginPassword
  } catch (err) {
    setError(err.message);
  }
};


  return (
    <Container>
      <Signupcontainer>

        <style>

        </style>
  
      <div className='containerStyled'>
        <div style={btnStyle}>
          <button
            style={loginSignupStyle}
            className={isLoginVisible ? 'login active' : 'login'}
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button
            style={loginSignupStyle}
            className={isLoginVisible ? 'signup' : 'signup active'}
            onClick={handleSignupClick}
          >
            Signup
          </button>
        </div>

        <div className={`form-section ${isLoginVisible ? '' : 'move'}`}
          // style={
          //   isLoginVisible
          //     ? { ...formSectionStyle }
          //     : { ...formSectionStyle, ...formSectionMoveStyle }
          // }
        >
          <div className="login_box" style={loginSignupBoxStyle}>
            <input type="email" className="inputStyle" placeholder="youremail@example.com"
             value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)} 
               required/>
            <input type="password" className="inputStyle" placeholder="Enter Your Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
             required />
            <button className="clkbtn"
            onSubmit={handleSubmit}
             onClick={handleSubmit}
             style={buttonStyle}>Login</button>
             <Link to="/forgetpassword">Forgot Password</Link>
          </div>

          <div className="signup-box" style={{ ...loginSignupBoxStyle, ...signupBoxStyle }}>
            <input type="text" className="inputStyle" placeholder="Enter your Name*"
              value={Name}
              onChange={(e) => setName(e.target.value)}
               required />
            <input type="email" className="inputStyle" placeholder="youremail@example.com*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
               required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
            <input type="password" className="inputStyle" placeholder="Enter Your Password(Min 6char)*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
               required />
            <input type="password" className="inputStyle" placeholder="Confirm Password*"
              value={confirmedpass}
              onChange={(e) => setconfirmedpass(e.target.value)}
              required/>
            <button className="clkbtn" type="submit" onSubmit={handleRegistration} onClick={handleRegistration} style={buttonStyle}>Signup</button>
          </div>
        </div>
      </div>
      </Signupcontainer>
      <img src='\images\ewastesignimg.png' alt='ImG'></img>
    </Container>
  )
}

export default Signup

const Container = styled.div`
//margin-left: 120px;
display: flex;
justify-content: space-around;
align-items: center;
/* @media screen and (max-width: 786px){
    height: 500px;
    width: 400px;
    margin-left: 0;

} */
img{
  width: 420px;
  height: 590px;
  @media screen and (max-width : 420px){
    display: none;
}
}

.containerStyled{
  height: 580px;
  width: 480px;
  background-color: rgba(22, 201, 158, 0.02);
  box-shadow: 4px 4px 10px rgb(128, 128, 128);
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  margin-top: 30px;
}
.active{
  color: #265182;
}

.form-section {
  height: 500px;
  width: 990px;
  padding: 20px 0;
  display: flex;
  position: relative;
  transition: all 0.5s ease-in-out;
  left: 0px;
}

.form-section.move {
  left: -500px;
}

.login_box{

    height: 100%;
    width: 500px;
    display: flex;
    //flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 100px;

    a{
      padding-top: 25px;
    }
}
.inputStyle {
    height: 50px;
    width: 320px;
    outline: none;
    border: none;
    color: rgb(77, 77, 77);
    background-color: rgb(240, 240, 240);
    border-radius: 50px;
    padding-left: 25px;
    font-size: 16px;
}
  @media screen and (min-width:250px) and (max-width:420px) 
  {
    .login_box{

    width: 400px;
    padding: 0 50px;

    }
    .containerStyled{
      height: 500px;
      width: 330px;
      margin-bottom: 50px;  
    }

    .form-section {
  height: 400px;
  width: 700px;
  padding: 20px 0;
  display: flex;
  position: relative;
  transition: all 0.5s ease-in-out;
  left: 0px;
}

  .form-section.move {
    left: -360px;
  }
  .inputStyle {
    height: 40px;
    width: 260px;
    padding-left: 1px;
    font-size: 14px;
}
}




`

const Signupcontainer = styled.div`
     /* @media screen and (min-width:250px) and (max-width:420px) 
  {
      height: 580px;
      width: 480px;
    } */
`

