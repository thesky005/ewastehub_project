import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const Merchant = () => {
    return (
        
        <Container>
            <Content>
            <Img>
                <img src='\images\merchant.jpg'></img>
            </Img>
            <Form>
                <Heading> <h2>Merchant  Registration</h2> </Heading>

                <FormItem>
                    <Item>
                        <p>Company Name</p>
                        <input type='text' placeholder='Enter your company name'></input>
                    </Item>
                    <Item>
                        <p>Company Registration No* </p>
                        <input type='text' placeholder='Enter your Company Registration'></input>
                    </Item>
                    <Item>
                        <p>Email Adress*</p>
                        <input type='text' placeholder='Enter your Email Adress'></input>
                    </Item>
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
                    <a href='/merchant1'>
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

export default Merchant


const Container = styled.div`

    justify-content: center;
    align-items: center;
    width: 100vw;

    @media screen and (max-width: 768px) {
        justify-content: flex-start;
        padding: 10px;
        height: auto;
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
        width: 380px;
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
const SignUpBtn = styled.div`
    display: flex;
    justify-content: centers;
    align-items: center;
    position: relative;
    margin: 30px 0px;
    margin-left: 120px;

    a{
        text-decoration: none;
    }

    @media screen and (max-width:768px){
        margin-left: 104px;
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
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 1.75px;
        line-height: normal;
        width: 117px;
        height: 47px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`