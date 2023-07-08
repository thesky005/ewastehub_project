import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Header from './Header'
import { useLocation, useNavigate } from 'react-router-dom'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'
import { radioClasses } from '@mui/material';



const Finanicial = (props) => {

    const auth = firebase.auth();
    const db = firebase.firestore();
    const navigate = useNavigate();
    const storage = firebase.storage()

    const [isOpen, setIsOpen] = useState(false);

    const [selectedFinancialStatementsFile, setselectedFinancialStatementsFile] = useState(null);
    const [BankName, setBankName] = useState('');
    const [AccountHoldersName, setAccountHoldersName] = useState('');
    const [AccountNumber, setAccountNumber] = useState('');
    const [IBANNumber, setIBANNumber] = useState('');
    const [InsuranceType, setInsuranceType] = useState('');
    const [PolicyNumber, setPolicyNumber] = useState('');
    const [ExpirationYear, setExpirationYear] = useState('');
    const [TaxIdentificationNo, setTaxIdentificationNo] = useState('');

    const handleFileUpload = async (file) => {
        try {
          // Create a storage reference with a unique file name
          const storageRef = storage.ref().child(`files/${file.name}`);
      
          // Upload the file to Firebase Storage
          const snapshot = await storageRef.put(file);
      
          // Get the download URL of the uploaded file
          const downloadURL = await snapshot.ref.getDownloadURL();
      
          // Store the download URL in Firestore
          /*const docRef = firestore.collection('files').doc();
          await docRef.set({
            fileName: file.name,
            downloadURL: downloadURL,
          });*/
          //setSelectedPortfolioFile(downloadURL)   
          return downloadURL 
      
          console.log('File uploaded and download URL stored in setSelectedPortfolioFile.');
          console.log("URL",downloadURL)
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        //setSelectedPortfolioFile(file);
        const downloadURL = handleFileUpload(file);
        console.log('File uploaded and download URL stored in setSelectedPortfolioFile.');
        console.log("URL",downloadURL)
        downloadURL.then((data => setselectedFinancialStatementsFile(data)))

    };

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     setselectedFinancialStatementsFile(file);
    // };
    const location = useLocation();
    console.log(location);
    console.log(location.state.Bussinessinfo)
    console.log('Company : ', location.state.Bussinessinfo.merchantinfo.company)

    const email = location.state.Bussinessinfo.merchantinfo.email;
    const password = location.state.Bussinessinfo.merchantinfo.password;

    const regNo = location.state.Bussinessinfo.merchantinfo.regNo;
    const company = location.state.Bussinessinfo.merchantinfo.company;
    const mobileNo = location.state.Bussinessinfo.merchantinfo.mobileNo;
    const Companytype = location.state.Bussinessinfo.merchantinfo.selectedValue;
    const ARNationalID = location.state.Bussinessinfo.merchantinfo.ARNationalID;
    const AuthorizedRepresentative = location.state.Bussinessinfo.merchantinfo.AuthorizedRepresentative;

    //Busseness 
    const bussinessAddress = location.state.Bussinessinfo.bussinessAddress;
    const district = location.state.Bussinessinfo.district;
    const city = location.state.Bussinessinfo.city;
    const Website = location.state.Bussinessinfo.Website;
    const refrence = location.state.Bussinessinfo.refrence;
    const selectedCityofOperation = location.state.Bussinessinfo.selectedCityofOperation;
    const selectedServicesOffered = location.state.Bussinessinfo.selectedServicesOffered;
    const selectedYearinBusiness = location.state.Bussinessinfo.selectedYearinBusiness;
    const selectedPortfolioFile = location.state.Bussinessinfo.selectedPortfolioFile;
    const selectedCertificateFile = location.state.Bussinessinfo.selectedCertificateFile;
    const SocialMediaProfile = location.state.Bussinessinfo.SocialMediaProfile;




    const handleRegistration = (e) => {
        e.preventDefault();

        if (
            BankName.trim() === '' ||
            AccountHoldersName.trim() === '' ||
            AccountNumber.trim() === '' ||
            IBANNumber.trim() === '' ||
            TaxIdentificationNo.trim() === '' ||
           selectedFinancialStatementsFile === null
          ) {
            // Set an error state or display an error message indicating that all fields are required
            console.error('Please fill in all the required fields.');
            alert('Please fill in all the required fields.');
            return;
          }

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Add user details to Firestore collection
                firebase.firestore().collection('landingpage-merchant').doc(user.uid).set({
                    email,
                    password,
                    BankName,
                    AccountHoldersName,
                    AccountNumber,
                    IBANNumber,
                    InsuranceType,
                    PolicyNumber,
                    ExpirationYear,
                    TaxIdentificationNo,
                    regNo,
                    company,
                    mobileNo,
                    Companytype,
                    ARNationalID,
                    AuthorizedRepresentative,
                    bussinessAddress, district, city, Website, refrence, selectedCityofOperation, selectedServicesOffered, selectedYearinBusiness, selectedPortfolioFile, selectedCertificateFile, SocialMediaProfile,selectedFinancialStatementsFile
                });

                // user.sendEmailVerification().then(() => {
                //     // Navigate to the verification page after sending the verification email
                //     navigate('/verification');
                //   });

                // Clear form inputs
                setBankName('');
                setAccountHoldersName('');
                setAccountNumber('');
                setIBANNumber('');
                setInsuranceType('');
                setPolicyNumber('');
                setExpirationYear('');
                setTaxIdentificationNo('');

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
                    <img src='\images\finInfo.png'></img>
                </Img>
                <Form>
                    <Heading> <h2>Financial Documentation</h2>
                        <h5>Bank Account Details</h5>
                        <p></p>
                    </Heading>

                    <FormItem>
                        <Item>
                            <p>Bank Name*</p>
                            <input type='text' placeholder='Enter Bank Name' value={BankName}
                                onChange={(e) => setBankName(e.target.value)} required></input>
                        </Item>
                        <Item>
                            <p>Account Holders Name*</p>
                            <input type='text' placeholder='Enter Account Holders Full Name' value={AccountHoldersName}
                                onChange={(e) => setAccountHoldersName(e.target.value)} required></input>
                        </Item>
                        <Wrap2>
                            <WrapItem>
                                <p>Account Number*</p>
                                <input type='number' placeholder='Enter Account Number ' value={AccountNumber}
                                    onChange={(e) => setAccountNumber(e.target.value)} required></input>
                            </WrapItem>
                            <WrapItem>
                                <p>IBAN Number*</p>
                                <input type='text' placeholder='Enter IBAN Number' value={IBANNumber}
                                    onChange={(e) => setIBANNumber(e.target.value)} required></input>
                            </WrapItem>
                        </Wrap2>
                        <Item>
                            <p>Insurance Type</p>
                            <input type='text' placeholder='Enter Your Insurance Type' value={InsuranceType}
                                onChange={(e) => setInsuranceType(e.target.value)}></input>
                        </Item>
                        <Wrap2>
                            <WrapItem>
                                <p>Policy Number</p>
                                <input type='text' placeholder='Enter Policy Number' value={PolicyNumber}
                                    onChange={(e) => setPolicyNumber(e.target.value)}></input>
                            </WrapItem>
                            <WrapItem>
                                <p>Expiration Year</p>
                                <input type='text' placeholder='Enter Expiration Year' value={ExpirationYear}
                                    onChange={(e) => setExpirationYear(e.target.value)}></input>
                            </WrapItem>
                        </Wrap2>

                        <WholeWrap>
                            <ItemUplod>
                                <Wrap1>
                                    <p>Financial Statements*</p>
                                    <div className="upload-btn-wrapper">
                                        <button className={`btn ${selectedFinancialStatementsFile ? 'uploaded' : ''}`}>
                                            {selectedFinancialStatementsFile ? 'Uploaded' : 'Upload a file'}
                                        </button>
                                        <input type="file" name="myfile" required onChange={handleFileChange} />
                                    </div>
                                </Wrap1>
                                <WrapItem>
                                    <p>Tax Identification No*</p>
                                    <input type='number' placeholder='Enter Tax Identification No ' value={TaxIdentificationNo}
                                        onChange={(e) => setTaxIdentificationNo(e.target.value)} required></input>
                                </WrapItem>
                            </ItemUplod>

                        </WholeWrap>

                    </FormItem>
                    <SignUpBtn type='submit' onSubmit={handleRegistration} onClick={handleRegistration}>
                        <a>
                            <div className="overlap-group">
                                <h1 className="sign-up">&nbsp;&nbsp;&nbsp;&nbsp; Submit</h1>
                            </div>
                        </a>
                    </SignUpBtn>
                </Form>
            </Content>
        </Container>
    )
    return null;
}

export default Finanicial

const Container = styled.div`

    align-items: center;
    width: 100vw;
    @media screen and (max-width: 768px) {
        justify-content: flex-start;
        padding: 10px;
        height: auto;
    }
 `



const Wrap = styled.div`
    display : flex;
    align-items: center;
    @media screen and (max-width : 768px) {
        display: inline-table;
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

@media screen and (max-width : 768px){
    p{
        font-size: 16px;
        width: 147px;
    }
    input{
        height: 42px;
        width: 250px;
    }
}

`
const Content = styled.div`
    display: flex;
    width: 662px;
    height: 854px;
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
       height: 854px;
       flex-shrink: 0;
       opacity: 60%;
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
        font-size: 18px;
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

@media screen and (max-width : 768px){
    p{
        font-size: 16px;
        width: 147px;
    }
    input{
        width: 200px;
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
        margin-left: 72px;
    }
    
    .overlap-group {
        background: linear-gradient(180deg, rgb(29, 3, 71) 0%, rgba(29, 3, 71, 0.75) 100%);
        border-radius: 15px;
        box-shadow: 0px 4px 4px #00000040;
        height: 47px;
        position: relative;
        width: 187px;
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
const ItemUplod = styled.div`

    display: flex;
    //justify-content: space-around;
    align-items: center;

    @media screen and (max-width : 768px) {
        display: inline-table;
    }
    
`

const Wrap1 = styled.div`

    margin-right: 62px;
    .upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
    box-shadow: 0px 4px 4px #00000040;
  }

  .btn {
    border: 2px solid gray;
    color: gray;
    font-family: "Inter-SemiBold", Helvetica;
    background-color: #f5f5f5;
    padding: 8px 20px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    width: 230px;
  }

  .btn.uploaded {
    color: green;
  }

  .upload-btn-wrapper input[type=file] {
    font-size: 20px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
`
const Wrap2 = styled.div`
    display: flex;
   // justify-content: space-around;
   align-items: center;
   @media screen and (max-width : 768px) {
        display: inline-table;
    }

`
const WrapItem = styled.div`
margin-right:  42px;
     p{
        color: #000000;
        font-family: "Inter-Regular", Helvetica;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0;
        line-height: normal;
        width: 200px;
    }
    input{
        background-color: #f5f5f5;
        border-radius: 15px;
        box-shadow: 0px 4px 4px #00000040;
        width: 200px;
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
        width: 220px;

}
`
const WholeWrap = styled.div`
    display: block;
    @media screen and (max-width : 768px) {
        display: table;
    }
`


