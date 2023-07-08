import React, { useState } from 'react'
import styled from 'styled-components'
import en from '../locales/en.json';
import ar from '../locales/ar.json';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll'


const Header = () => {

  const navigate = useNavigate();

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

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    console.log('Menu button clicked');
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log(`Clicked: ${option}`);
    setIsOpen(false);
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
          <img src='\images\logoDark.5f0dd6e5be677a6d9328.png' alt='img'></img>
        </Logo>
        <NavMenu>
          <span>Home</span>
          <span onClick={() => scrollToSection('categories-section')}>Categories</span>
          <span>About Us</span>
        </NavMenu>
      </Rgt>
      {/* <Button> <p>{t('getinapp')}</p></Button> */}
      <Left>
        <Lft>
          <Button>
            <img src='\images\circum_mobile-1.svg'></img>
            <p>Get in App</p></Button>
          <Button1 onClick={navigator}><p>Sign Up</p></Button1>
          <LangToggel>
            <img src='\images\Arabic.svg'></img>
            {/* <button onClick={toggleLanguage}>Toggle Language</button> */}
          </LangToggel>
        </Lft>
        <Menubtn >
          <img src="/images/134216_menu_lines_hamburger_icon.svg" alt="Menu" onClick={handleToggle} />

          {isOpen && (
            <DropDown>
              <span onClick={() => handleOptionClick('Home')}>Home</span>
              <hr />
              <span onClick={() => handleOptionClick('Categories')}>Categories</span>
              <hr />
              <span onClick={() => handleOptionClick('Sign Up')}>Sign Up</span>
              <hr />
              <span onClick={() => handleOptionClick('Get App')}>Get App</span>
              <hr />
            </DropDown>

          )}
        </Menubtn>
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
  height: 72px;
  margin: 0 170px;
  cursor: pointer;
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

  span {
    line-height: 24px;
    cursor: pointer;
    color: #4B4B4B;
    font-size: 18px;
    font-family: 'Inter';
    font-weight: 600;
    color : #4B4B4B;
    letter-spacing: 2px;

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
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color:#FFFFFF;
  }
 
  

`
const LangToggel = styled.div`
justify-content: flex-end;
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
    margin-right: 20px;
    p {
        padding-bottom: 4px;
        margin: 5px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
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

