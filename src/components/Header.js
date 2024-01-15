import React, { useState , useEffect } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';


 const Header = ({ isUserLoggedIn ,setIsUserLoggedIn }) => {
// const Header = () => {

  const navigate = useNavigate();
 //const { isUserLoggedIn, setIsUserLoggedIn } = useUser();

  const user =  firebase.auth().currentUser;
  const db = firebase.firestore();
  const [isOpen1, setIsOpen1] = useState(false);


var useremail;

useEffect(() => {
  const storedIsOpen = JSON.parse(localStorage.getItem('isOpen1'));
  if (storedIsOpen !== null) {
    setIsOpen1(storedIsOpen);
  }

  // Check for user login status here and update the state accordingly
  const user = firebase.auth().currentUser;
  setIsUserLoggedIn(!!user); // Set to true if the user is logged in, false otherwise
}, [isUserLoggedIn]);

// useEffect(() => {
//   const storedIsOpen = JSON.parse(localStorage.getItem('isOpen1'));
//   if (storedIsOpen !== null) {
//     setIsOpen1(storedIsOpen);
//   }
// }, []);

if (user) {
  // console.log("User is logged in:", user);
  // console.log("User UID:", user.uid);
  // console.log("User UID:", user.email);
  // console.log("User Name:", user.displayName);
  useremail = user.email.split('@')[0];

  var currentUserUID = user.uid;
  var userCollection = db.collection('userDetails');
  var userDocument = userCollection.doc(currentUserUID);

 // Set up a real-time listener for the document
  userDocument.onSnapshot((docSnapshot) => {
    //console.log("Document Snapshot:", docSnapshot);

    if (docSnapshot.exists) {
      var userData = docSnapshot.data();
      //console.log('User data:', userData);
      // You can now use the userData object to access user details
    } else {
      //console.log('User data not found');
    }
  }, (error) => {
    //console.error('Error listening for user data:', error);
  });

  // db.collection('userDetails').onSnapshot((snapshot) =>{
  //   console.log("userdata", snapshot);
  // })

} else {
  //console.log('No user is signed in.');
}

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const navigator = () => {
    navigate('/signup');
  }
  const navigator1 = () => {
    navigate('/');
  }



  const handlesignout = () => {
    firebase.auth().signOut().then(() => {
     
      navigate('/signup')
      setIsUserLoggedIn(false);
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleToggle1 = () => {
    console.log('Menu button clicked');
    setIsOpen1(!isOpen1);
    localStorage.setItem('isOpen1', JSON.stringify(!isOpen1));
  };

  const handleOptionClick = (option) => {
    console.log(`Clicked: ${option}`);
    //setIsOpen(false);
    if (option === 'Home') {
      // Navigate to the home section
      scrollToSection('home-section');
    } else if (option === 'Categories') {
      // Navigate to the categories section
      scrollToSection('categories-section');
    } else if (option === 'Sign Up') {
      // Navigate to the sign-up page
      navigate('/signup');
    } else if (option === 'Get App') {
      // Navigate to the get app page
      navigate('/getapp');
    }
  };

  return (
    //<Nav>
    <NavBar>
      <Rgt>
        <Logo>
          <Link to='/'>
            <img src='\images\ewasteLOGO.svg' alt='img'></img>
          </Link>
{/*  */}
        </Logo>
        <NavMenu>
        <Link to='/'>
          <span>Home</span>
          </Link>
          <Link to='tradinglp'>
          <span>Ecommerce</span>
          </Link>
          <Link to='chatbot'>
          <span>Education</span>
          </Link>
          <Link to='graph'>
          <span>Statatic</span>
          </Link>
          {/* <span onClick={() => scrollToSection('categories-section')}>Features</span> */}
          {/* <span>About Us</span> */}
        </NavMenu>
      </Rgt>
      {/* <Button> <p>{t('getinapp')}</p></Button> */}
      <Left>
        <Lft>
          <Link to={'usercart'}>
          <Button>
            <img src='\images\trolley.png'></img>
            <p>Cart</p>
            </Button>
            </Link>
          {isUserLoggedIn ? (
            <div className="user-icon">
              {/* Render the user icon here */}
              <img src="/images/profile.png" alt="User Icon" onClick={handleToggle1} />
              {isOpen1 && (
                <DropDown1>
                  <span style={{ fontSize: '14px', width: '60px' }}>{useremail}</span><br /><br />
                  <span onClick={() => handleOptionClick('Changepassowrd')}>Change password</span>
                  <br /><br />
                  <span onClick={handlesignout}>Sign Out</span>

                  {/* <hr /> */}
                  {/* <span onClick={() => handleOptionClick('Get App')}>Get App</span>
              <hr /> */}
                </DropDown1>

              )}
            </div>
          ) : (
            // <div className="signup">
            //   <a href="/login"><span>Login</span></a>
            // </div>
            <Button1 onClick={navigator}><p>Sign Up</p></Button1>
          )}
          {/* <Button1 onClick={navigator}><p>Sign Up</p></Button1> */}
        </Lft>
        {/* <Menubtn >
          <img src="/images/134216_menu_lines_hamburger_icon.svg" alt="Menu" onClick={handleToggle} />

          {isOpen && (
            <DropDown>
              <span onClick={() => handleOptionClick('Home')}>Home</span>
              <hr />
              <span onClick={() => handleOptionClick('Categories')}>Categories</span>
              <hr />
              <span onClick={() => handleOptionClick('Sign Up')}>Sign Up</span>
            </DropDown>

          )}
        </Menubtn> */}
      </Left>
    </NavBar>
    //</Nav> 
  )
}

export default Header

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
`

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 92px;
  margin: 0 170px;
  cursor: pointer;
  //position: absolute;
  //background-color: white;
  //position: fixed;
  //flex-shrink:1;

  @media screen and (max-width: 768px) {
    margin: 0 20px;
  }
  
`
const Lft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  .user-icon img{
  width: 40px;
  height: 40px;
  margin-right:120px ;
}
`
const Rgt = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.div`
  padding-right: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
 img{max-width: 200px;
  height: 36px;}

  @media screen and (max-width: 768px) {
    img{
      //padding-right: 5px;
      max-width: 160px;
      max-height: 36px;
    }
  }
  

`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;

  a{
    text-decoration: none;
  }

  span {
    line-height: 24px;
    cursor: pointer;
    color: #4B4B4B;
    font-size: 18px;
    font-family: "Inter-Medium", Helvetica;
    font-weight: 600;
    letter-spacing: 1.2px;
    transition: color 0.3s ease; /* Add a smooth transition effect */
}

span:hover {
  color: rgb(20, 180, 142);
}
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Button1 = styled.div`

    position: relative;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #1D0347 0%, rgba(29, 3, 71, 0.75) 86.77%);
    border-radius: 20px;
    margin-right: 12px;
    @media screen and (max-width: 768px) {
    display: none;
  }
    
  p{
    font-family: "Inter-Medium", Helvetica;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color:#FFFFFF;
    //text-decoration: none;
  }
 
  

`

const DropDown1 = styled.div`
  opacity: 1;
  position: absolute;
  top: 70px;
  right: 316px;
  background: #ffffff;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 20px;
  //padding-right: 0;
  font-size: 14px;
  letter-spacing: 2px;
  width: 160px;
  height: 100px;
  font-family: "Source Sans Pro-Bold", Helvetica;
  font-weight: 600;
  transition: opacity 0.5s ease-in-out;
  cursor: pointer;
  z-index: 1;

  span{
    margin: 20px 0;
    cursor: pointer;
  }
`
const LangToggel = styled.div`
justify-content: flex-end;
opacity: 0;
img{
  
  min-width: 32px;
  max-height: 32px;
}
 
`


const Button = styled.div`
   
    position: relative;
    width: 156px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 77.92%);
    border: 0.2px solid #BDBDBD;
    border-radius: 20px;
    margin-right: 30px;
    opacity: 1;
    text-decoration: none;

    p {
        padding-bottom: 4px;
        margin: 5px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        padding-left: 16px;
        
    }
    img{
     max-height: 25px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const DropDown = styled.div`
  opacity: 0;
  position: absolute;
  top: 38px;
  right: 0px;
  background: #ffffff;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
`;

const Menubtn = styled.div`
  position: relative;
  //display: inline-block;
  display: none;
  opacity: 0;
  
  img {
    width: 25px;
    height: 25px;
    padding-left: 10px;
  }

  /* &:hover */${DropDown} { 
    display: block;
    opacity: 1;
    transition-duration: 1s;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    opacity: 1;
    display: block;
  }
`



