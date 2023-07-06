import React, { useState , useEffect } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Finanicial from './Finanicial'
import { useNavigate } from 'react-router-dom'

const Merchant1 = () => {

    const navigate = useNavigate();

    const [selectedValue, setSelectedValue] = useState('');
    const [company, setCompany] = useState('');
    const [regNo, setRegNo] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [AuthorizedRepresentative, setAuthorizedRepresentative] = useState('');
    const [ARNationalID, setARNationalID] = useState('');
    const [password, setPassword] = useState('');

    const handleDropdownChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
    };
    console.log()

    useEffect(() => {
        function generateRandomPassword(length) {
          const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          let generatedPassword = '';
    
          for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
          }
    
          setPassword(generatedPassword);
        }
    
        generateRandomPassword(8);
      }, []);
    
      // Rest of your component code

    const merchantinfo = {
        company: company,
        regNo: regNo,
        email: email,
        mobileNo: mobileNo,
        AuthorizedRepresentative: AuthorizedRepresentative,
        ARNationalID: ARNationalID,
        selectedValue: selectedValue,
        password: password
    }

    const handleSubmit = () => {
        //navigate('/bussiness')
        navigate("/bussiness", {
            state: {
                merchantinfo: merchantinfo
            }
        });
    };

    const handleCompanyChange = (event) => {
        setCompany(event.target.value);
    };


    return (
        <Container>
            <Content>

                <Img>
                    <img src='\images\merchant.jpg'></img>
                </Img>
                <Form>
                    <Heading> <h2>Merchant Registration</h2> </Heading>

                    <FormItem>
                        <Item>
                            <p>Company Name</p>
                            <input type='text' placeholder='Enter your company name' value={company}
                                onChange={handleCompanyChange}></input>
                        </Item>
                        <Item>
                            <p>Company Registration No* </p>
                            <input type='text' placeholder='Enter your Company Registration' value={regNo} onChange={(e) => setRegNo(e.target.value)}></input>
                        </Item>
                        <Wrap>
                            <CompType>
                                <div className="dropdown-container" onChange={handleDropdownChange}>
                                    <p>Company Type* </p>
                                    <select className="dropdown-content">
                                        <option className="dropdown-opt" value="" disabled selected hidden>----Select----</option>
                                        <option className="dropdown-opt">General partnership</option>
                                        <option className="dropdown-opt">Limited partnership </option>
                                        <option className="dropdown-opt">Limited Liablity company</option>
                                        <option className="dropdown-opt"> Joint-stock company</option>
                                        <option className="dropdown-opt">Simplified joint-stock company</option>
                                    </select>
                                </div>
                            </CompType>
                            <Item1>
                                <p>Email Adress*</p>
                                <input type='text' placeholder='Enter your Email Adress' value={email}
                                    onChange={(e) => setEmail(e.target.value)}></input>
                            </Item1>
                        </Wrap>
                        {/* <Item>
                            <p>Password*</p>
                            <input type='password' placeholder='Enter your Password' value={password}
                                onChange={(e) => setPassword(e.target.value)}></input>
                        </Item> */}
                        <Item>
                            <p>Mobile No*</p>
                            <input type='text' placeholder='Enter your Mobile No ' value={mobileNo}
                                onChange={(e) => setMobileNo(e.target.value)}></input>
                        </Item>
                        <Item>
                            <p>Authorized Representative</p>
                            <input type='text' placeholder='Enter your Representative Full Name' value={AuthorizedRepresentative}
                                onChange={(e) => setAuthorizedRepresentative(e.target.value)}></input>
                        </Item>
                        <Item>
                            <p>Authorized Representative’s National ID*</p>
                            <input type='text' placeholder='Enter your Authorized Representative’s National ID*' value={ARNationalID}
                                onChange={(e) => setARNationalID(e.target.value)}></input>
                        </Item>
                    </FormItem>
                    <SignUpBtn type='submit' onSubmit={handleSubmit} onClick={handleSubmit} >
                        <a>
                            <div className="overlap-group">
                                <h1 className="sign-up">&nbsp;&nbsp;&nbsp;&nbsp; Next</h1>

                            </div>
                        </a>
                    </SignUpBtn>
                </Form>

            </Content>
        </Container>
    )
}

export default Merchant1;

const Container = styled.div`

    align-items: center;
    width: 100vw;
    @media screen and (max-width: 768px) {
        justify-content: flex-start;
        padding: 10px;
        height: auto;
    }
 `

const CompType = styled.div`

    .dropdown-container {
    position: relative;
    //margin-top: 12px;
    margin-right: 30px;
    }

    .dropdown-content {
        /* position: absolute;
        top: 100%;
        left: 0; */
        width: 200px;
        background-color: #f5f5f5;
        border-radius: 15px;
        padding: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        //opacity: 0;
        transform: translateY(0px);
        transition: opacity 0.9s, transform 0.75s;
        //border: none;
        font-family: "Inter-Regular", Helvetica;
        height: 39px;
        width: 180px;
        padding: 10px;
    } 
    .dropdown-opt{
        width: 200px;
        background-color: #f5f5f5;
        border-radius: 15px;
        padding: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        //opacity: 0;
        transform: translateY(0px);
        transition: opacity 0.9s, transform 0.75s;
        border: none;
        font-family: "Inter-Regular", Helvetica;
        height: 35px;
        width: 180px;
        padding: 10px;
    }
`

const Wrap = styled.div`
      display: flex;
  //flex-direction: column; /* Updated: Stack elements vertically */
  align-items: center;

  @media screen and (max-width: 768px) {
    /* Add styles for mobile view */
    //align-items: flex-start; /* Align items to the left */
    flex-direction: column;
    align-items: flex-start;
  }
`
const Item1 = styled.div`

   // margin-left: 50px;

    p{
        color: #000000;
        font-family: "Inter-Regular", Helvetica;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0;
        line-height: normal;
        width: 347px;
    }
    input{
        background-color: #f5f5f5;
        border-radius: 15px;
        box-shadow: 0px 4px 4px #00000040;
        width: 265px;
        height: 35px;
        flex-shrink: 0;
        color: #bdbcbc;
        font-family: "Inter-Regular", Helvetica;
        font-weight: 400;
        padding: 0 20px;
    }
    input::placeholder {
        color: #bdbcbc;
        font-family: "Inter-Regular", Helvetica;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: 0;
        line-height: normal;
        width: 480px;
}

`
const Content = styled.div`
    display: flex;
    width: 662px;
    height: 1104px;
    @media screen and (max-width:768px){
        padding-left: 15px;
    }

`

const Img = styled.div`
    margin-right: 60px;
    align-items: center;
    @media screen and (max-width:768px){
        display: none;
        padding-left: 10px;
    }
    img{
       width: 662px;
       height: 1104px;
       flex-shrink: 0;
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
    font-size: 30px;
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
        margin-left: 18px;
    }
    
 `
const Item = styled.div`

    p{
        color: #000000;
        font-family: "Inter-Regular", Helvetica;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0;
        line-height: normal;
        width: 347px;
    }
    input{
        background-color: #f5f5f5;
        border-radius: 15px;
        box-shadow: 0px 4px 4px #00000040;
        width: 480px;
        height: 35px;
        flex-shrink: 0;
        color: #bdbcbc;
        font-family: "Inter-Regular", Helvetica;
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
        width: 480px;
}

@media screen and (max-width : 768px){
    p{
        font-size: 16px;
        width: 247px;
    }
    input{
        width: 280px;
        height: 35px;
    }
    input::placeholder {
        font-size: 14px;

}
}
`
const SignUpBtn = styled.div`
    display: flex;
    justify-content: centers;
    align-items: center;
    position: relative;
    margin: 30px 0px;
    margin-left: 160px;
    a{
        border: none;
        text-decoration: none;
    }
    @media screen and (max-width:768px){
        margin-left: 104px;
    }
    
    .overlap-group {
        background: linear-gradient(180deg, rgb(29, 3, 71) 0%, rgba(29, 3, 71, 0.75) 100%);
        border-radius: 15px;
        box-shadow: 0px 4px 4px #00000040;
        height: 37px;
        position: relative;
        width: 137px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .sign-up {
        color: #ffffff;
        font-family: "Inter-SemiBold", Helvetica;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0;
        line-height: normal;
        //width: 117px;
        //height: 19px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 28px;
        //padding-top: 9px;
    }
`