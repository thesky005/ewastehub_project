import React , {useState} from 'react'
import styled from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const Trading = () => {

    const storage = firebase.storage();
    

    const [productname,setproductname] = useState('');
    const [description,setproductdescription] = useState('');
    const [productbrand,setproductbrand] = useState('');
    const [selectcondition,setproductcondition] = useState('');
    const [productprice,setproductprice] = useState('');
    const [uploadimage,setuploadimage] = useState('');
    const handleFileUpload = async (file) => {
        try {
          // Create a storage reference with a unique file name
          const storageRef = storage.ref().child(`files/${file.name}`);
      
          // Upload the file to Firebase Storage
          const snapshot = await storageRef.put(file);
      
          // Get the download URL of the uploaded file
          const downloadURL = await snapshot.ref.getDownloadURL();
           
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
        const URL = downloadURL.then((data => setuploadimage(data)))
        //setSelectedPortfolioFile(downloadURL)
        console.log("URL",URL)
    };
    const handleDropdownChange = (event) => {
        const value = event.target.value;
        setproductcondition(value);
    };

    const handleSubmit = (e) => {
        const user = firebase.auth().currentUser;
        console.log(user.uid)
        //navigate('/bussiness')
        e.preventDefault();

        if (
            productname.trim() === '' ||
            productprice.trim() === '' ||
            productbrand.trim() === '' ||
            uploadimage === null ||
            description.trim() === '' ||
            selectcondition.trim() === ''
          ) {
            // Set an error state or display an error message indicating that all fields are required
            console.error('Please fill in all the required fields.');
            alert('Please fill in all the required fields.');
            return;
          }

        //   firebase.firestore().collection('trading-data').doc(user.uid
        //     ).collection('traderproduct').add({
        //     productname,
        //     productprice,
        //     productbrand,
        //     uploadimage,
        //     description, selectcondition
        //   });

          firebase.firestore().collection('trading-data').add({
            productname,
            productprice,
            productbrand,
            uploadimage,
            description, selectcondition
          });
          console.log("Daata add")
      
          // Clear form inputs
          setproductname('');
          setproductprice('');
          setproductbrand('');
          setuploadimage('');
          setproductdescription('');
          setproductcondition(''); 


        // navigate("/finanicial", {
        //     state: {
        //         Bussinessinfo: Bussinessinfo
        //     }
        // });


    };
  return (
    <Container>
        <Form>
                    <Heading> <h2>Product Information</h2> </Heading>

                    <FormItem>
                        <Item>
                            <p>Product Name*</p>
                            <input type='text' placeholder='Enter your Product name' value={productname} required
                                onChange={(e) => setproductname(e.target.value)} ></input>
                        </Item>
                        <Wrap2>
                            <WrapItem>
                                <p>Prize*</p>
                                <input type='number' placeholder='Enter Product Prize' value={productprice} required
                                    onChange={(e) => setproductprice(e.target.value)}></input>
                            </WrapItem>
                            <WrapItem>
                                <p>Brand/Manufacturer*</p>
                                <input type='text' placeholder='Enter Brand/Manufacturer' value={productbrand} required
                                    onChange={(e) => setproductbrand(e.target.value)}></input>
                            </WrapItem>
                        </Wrap2>
                        <Item>
                            <p>Description*</p>
                            <input type='box' placeholder='Enter Product Description' value={description}
                                onChange={(e) => setproductdescription(e.target.value)}></input>
                        </Item>
                        <Wrap>
                            <CompType>
                                <div className="dropdown-container1" onChange={handleDropdownChange} >
                                    <p>Condition*</p>
                                    <select className="dropdown-content" required >
                                        <option className="dropdown-opt" value="" disabled selected hidden>----Select----</option>
                                        <option className="dropdown-opt">Minor Scratches</option>
                                        <option className="dropdown-opt">Fully Functional</option>
                                        <option className="dropdown-opt">Needs Repair</option>
                                        <option className="dropdown-opt">Not Working</option>
                                    </select>
                                </div>
                            </CompType>
                           

                        </Wrap>
                        
                        <ItemUplod>
                            <Wrap1>
                                <p>Upload Product Image*</p>
                                <div className="upload-btn-wrapper">
                                    <button className={`btn ${uploadimage ? 'uploaded' : ''}`}>
                                        {uploadimage ? 'Uploaded' : 'Upload a file'}
                                    </button>
                                    <input type="file" name="myfile" onChange={handleFileChange} required/>
                                </div>
                            </Wrap1>
                            
                        </ItemUplod>

                    </FormItem>
                    <SignUpBtn onSubmit={handleSubmit} onClick={handleSubmit} type='submit'>
                        <a>
                            <div className="overlap-group">
                                <h1 className="sign-up">&nbsp;&nbsp;&nbsp;&nbsp; Submit</h1>
                            </div>
                        </a>
                    </SignUpBtn>
                </Form>
    </Container>
  )
}

export default Trading


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

    .dropdown-container1 {
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
    height: 804px;
    @media screen and (max-width:768px){
        padding-left: 15px;
    }

`

const Img = styled.div`
    margin-right: 80px;
    align-items: center;
    @media screen and (max-width:768px){
        display: none;
        padding-left: 10px;
    }
    img{
       width: 562px;
       height: 806px;
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
        margin-left: 74px;
        padding-bottom: 30px;
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
