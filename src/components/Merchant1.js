import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Header'



const Merchant1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <Container>
            <Content>

                <Img>
                    <img src='\images\merchant.jpg'></img>
                </Img>
                <Form>
                    <Heading> <h2>Business Infomation</h2> </Heading>

                    <FormItem>
                        <Item>
                            <p>Company Name</p>
                            <input type='text' placeholder='Enter your company name'></input>
                        </Item>
                        <Item>
                            <p>Company Registration No* </p>
                            <input type='text' placeholder='Enter your Company Registration'></input>
                        </Item>
                        <Wrap>
                            <CompType>
                                <div className="dropdown-container">
                                    <p>Company Type* </p>
                                    {/* <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
                                    {isOpen && (
                                        <select className="dropdown-content">
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                        </select>
                                    )} */}
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
                                <input type='text' placeholder='Enter your Email Adress'></input>
                            </Item1>
                        </Wrap>
                        <Item>
                            <p>Mobile No*</p>
                            <input type='text' placeholder='Enter your Mobile No '></input>
                        </Item>
                        <Item>
                            <p>Authorized Representative</p>
                            <input type='text' placeholder='Enter your Representative Full Name'></input>
                        </Item>
                        <Item>
                            <p>Authorized Representative’s National ID*</p>
                            <input type='text' placeholder='Enter your Authorized Representative’s National ID*'></input>
                        </Item>
                    </FormItem>
                    <SignUpBtn>
                        <div className="overlap-group">
                            <h1 className="sign-up">&nbsp;&nbsp;&nbsp;&nbsp; Next</h1>
                        </div>
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


    /* .dropdown-content {
  position: relative;
  display: inline-block;

  select {
  appearance: none;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  transition: border-color 0.3s ease-in-out;
  width: 200px;
  cursor: pointer;

  select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

}
option {
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
}

option:hover {
  background-color: #f5f5f5;
}

option:checked {
  background-color: #007bff;
  color: white;
}
} */

    /* .dropdown-container:hover .dropdown-content {
        opacity: 1;
        transform: translateY(0);
    } */
` 

const Wrap = styled.div`
    display : flex;
    align-items: center;
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
        margin-left: 46px;
    }

 `
const FormItem = styled.div`
 
    margin-bottom: 32px;
    @media screen and (max-width:768px){
        margin-left: 46px;
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
`
const SignUpBtn = styled.div`
    display: flex;
    justify-content: centers;
    align-items: center;
    position: relative;
    margin: 30px 0px;
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

    }

    .sign-up {
        color: #ffffff;
        font-family: "Inter-SemiBold", Helvetica;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0;
        line-height: normal;
        width: 117px;
        height: 11px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`