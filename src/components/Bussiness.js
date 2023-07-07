import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Finanicial from './Finanicial'
import { useNavigate, useLocation } from 'react-router-dom'
//import storage from '../firebase'
import firebase from 'firebase/app';
import 'firebase/storage'

const Bussiness = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const storage = firebase.storage()

    const [selectedPortfolioFile, setSelectedPortfolioFile] = useState(null);
    const [selectedCertificateFile, setSelectedCertificateFile] = useState(null);
    const [selectedCityofOperation, setSelectedCityofOperation] = useState('');
    const [selectedYearinBusiness, setSelectedYearinBusiness] = useState('');
    const [selectedServicesOffered, setSelectedServicesOffered] = useState('');

    const [bussinessAddress, setbussinessAddress] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [refrence, setRefrence] = useState('');
    const [SocialMediaProfile, setSocialMediaProfile] = useState('');
    const [Website, setWebsite] = useState('');
    //const [bussinessAddress , setbussinessAddress] = useState('');


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
        const URL = downloadURL.then((data => setSelectedPortfolioFile(data)))
        //setSelectedPortfolioFile(downloadURL)
        console.log("URL",URL)
    };

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     setSelectedPortfolioFile(file);
    // };
    const handleFileChange1 = (event) => {
        const file = event.target.files[0];
        //setSelectedCertificateFile(file);
        const downloadURL = handleFileUpload(file);
        console.log('File uploaded and download URL stored in setSelectedPortfolioFile.');
        console.log("URL",downloadURL)
        //setSelectedCertificateFile(downloadURL)
        downloadURL.then((data => setSelectedCertificateFile(data)))
    };

    const handleDropdownChange = (event) => {
        const value = event.target.value;
        setSelectedCityofOperation(value);
    };
    const handleDropdownChange1 = (event) => {
        const value = event.target.value;
        setSelectedYearinBusiness(value);

    };
    const handleDropdownChange2 = (event) => {
        const value = event.target.value;
        setSelectedServicesOffered(value);
    };

    const Bussinessinfo = {
        merchantinfo: location.state.merchantinfo,
        bussinessAddress: bussinessAddress,
        district: district,
        city: city,
        refrence: refrence,
        SocialMediaProfile: SocialMediaProfile,
        Website: Website,
        selectedPortfolioFile: selectedPortfolioFile,
        selectedCertificateFile: selectedCertificateFile,
        selectedCityofOperation: selectedCityofOperation,
        selectedYearinBusiness: selectedYearinBusiness,
        selectedServicesOffered: selectedServicesOffered,
    }

    const handleSubmit = (e) => {
        //navigate('/bussiness')
        e.preventDefault();

        if (
            bussinessAddress.trim() === '' ||
            district.trim() === '' ||
            city.trim() === '' ||
            selectedPortfolioFile === null ||
            selectedCertificateFile === null ||
            selectedCityofOperation.trim() === '' ||
            selectedYearinBusiness.trim() === '' ||
            selectedServicesOffered.length === 0
          ) {
            // Set an error state or display an error message indicating that all fields are required
            console.error('Please fill in all the required fields.');
            alert('Please fill in all the required fields.');
            return;
          }


        navigate("/finanicial", {
            state: {
                Bussinessinfo: Bussinessinfo
            }
        });
    };

    console.log(location.state.merchantinfo)
    return (

        <Container>
            <Content>

                <Img>
                    <img src='\images\merchant.jpg'></img>
                </Img>
                <Form>
                    <Heading> <h2>Bussiness Information</h2> </Heading>

                    <FormItem>
                        <Item>
                            <p>Business Address*</p>
                            <input type='text' placeholder='Enter your company name' value={bussinessAddress} required
                                onChange={(e) => setbussinessAddress(e.target.value)} ></input>
                        </Item>
                        <Wrap2>
                            <WrapItem>
                                <p>District*</p>
                                <input type='text' placeholder='Enter your district' value={district} required
                                    onChange={(e) => setDistrict(e.target.value)}></input>
                            </WrapItem>
                            <WrapItem>
                                <p>City*</p>
                                <input type='text' placeholder='Enter your city' value={city} required
                                    onChange={(e) => setCity(e.target.value)}></input>
                            </WrapItem>
                        </Wrap2>
                        <Item>
                            <p>Reference</p>
                            <input type='text' placeholder='Enter your Reference' value={refrence}
                                onChange={(e) => setRefrence(e.target.value)}></input>
                        </Item>
                        <Wrap>
                            <CompType>
                                <div className="dropdown-container" onChange={handleDropdownChange} >
                                    <p>City of Operation*</p>
                                    <select className="dropdown-content" required >
                                        <option className="dropdown-opt" value="" disabled selected hidden>----Select----</option>
                                        <option className="dropdown-opt">Riyadh</option>
                                        <option className="dropdown-opt">Jeddah</option>
                                        <option className="dropdown-opt">Mecca</option>
                                        <option className="dropdown-opt">Medina</option>
                                        <option className="dropdown-opt">Medina</option>
                                    </select>
                                </div>
                            </CompType>
                            <CompType>
                                <div className="dropdown-container" onChange={handleDropdownChange1} >
                                    <p>Year in Business*</p>
                                    <select className="dropdown-content" required>
                                        <option className="dropdown-opt" value="" disabled selected hidden>----Select----</option>
                                        <option className="dropdown-opt">Less than 1 year</option>
                                        <option className="dropdown-opt">1-3 years</option>
                                        <option className="dropdown-opt">3-5 years</option>
                                        <option className="dropdown-opt">More than 5 years</option>
                                    </select>
                                </div>
                            </CompType>
                            <CompType>
                                <div className="dropdown-container" onChange={handleDropdownChange2}>
                                    <p>Services Offered*</p>
                                    <select className="dropdown-content" required multiple>
                                        <option className="dropdown-opt" value="" disabled selected hidden>----Select----</option>
                                        <option className="dropdown-opt">Plumbing</option>
                                        <option className="dropdown-opt">Electrical</option>
                                        <option className="dropdown-opt">Construction</option>
                                        <option className="dropdown-opt">HVAC</option>
                                    </select>
                                </div>
                            </CompType>

                        </Wrap>
                        <Wrap2>
                            <WrapItem>
                                <p>Social Media Profile</p>
                                <input type='text' placeholder='Enter your Reference No ' value={SocialMediaProfile}
                                    onChange={(e) => setSocialMediaProfile(e.target.value)}></input>
                            </WrapItem>
                            <WrapItem>
                                <p>Website</p>
                                <input type='text' placeholder='Enter your Reference No ' value={Website}
                                    onChange={(e) => setWebsite(e.target.value)}></input>
                            </WrapItem>
                        </Wrap2>
                        <ItemUplod>
                            <Wrap1>
                                <p>Past Portfolio*</p>
                                <div className="upload-btn-wrapper">
                                    <button className={`btn ${selectedPortfolioFile ? 'uploaded' : ''}`}>
                                        {selectedPortfolioFile ? 'Uploaded' : 'Upload a file'}
                                    </button>
                                    <input type="file" name="myfile" onChange={handleFileChange} required/>
                                </div>
                            </Wrap1>
                            <Wrap1>
                                <p>Professional Certificate*</p>
                                <div className="upload-btn-wrapper">
                                    <button className={`btn ${selectedCertificateFile ? 'uploaded' : ''}`}>
                                        {selectedCertificateFile ? 'Uploaded' : 'Upload a file'}
                                    </button>
                                    <input type="file" name="myfile" onChange={handleFileChange1} required />
                                </div>
                            </Wrap1>
                        </ItemUplod>

                    </FormItem>
                    <SignUpBtn onSubmit={handleSubmit} onClick={handleSubmit} type='submit'>
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

export default Bussiness

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
    margin-right: 10px;
    }

    .dropdown-content {
        /* position: absolute;
        top: 100%;
        left: 0; */
        width: 180px;
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
        width: 168px;
        padding: 10px;
        //overflow-y: hidden;
    } 
    .dropdown-opt{
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
        width: 120px;
        padding: 10px;
    }
    @media screen and (max-width: 768px) {
        .dropdown-content {
        width: 240px;

    } 
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
    cursor: pointer;
    a{
        border: none;
        text-decoration: none;
    }
    @media screen and (max-width:768px){
        margin-left: 84px;
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
  //flex-direction: column; /* Updated: Stack elements vertically */
  align-items: center;

  @media screen and (max-width: 768px) {
    /* Add styles for mobile view */
    //align-items: flex-start; /* Align items to the left */
    flex-direction: column;
    align-items: flex-start;
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