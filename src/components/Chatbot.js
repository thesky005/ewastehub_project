// App.js
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Chatbot = () => {
  const [productName, setProductName] = useState('');
  const [itemDetails, setItemDetails] = useState(null);

  const stateOptions = [
    '<--Select State-->',
    'Air Conditioners',
    'Audio Players (MP3 Players)',
    'Audio Receivers',
    'Blu-ray Players',
    'Camcorders',
    'Calculators',
    'Car Electronics (e.g., GPS Navigation Systems)',
    'Cassette Players',
    'Computer Mice',
    'Copiers',
    'Cordless Phones',
    'Desktop Computers',
    'Digital Cameras',
    'Digital Clocks',
    'Digital Thermostats',
    'DVD Players',
    'Electric Heaters',
    'External Hard Drives',
    'Fax Machines',
    'Fitness Trackers',
    'Gaming Consoles',
    'GPS Devices',
    'Home Appliances (Refrigerators, Washing Machines, etc.)',
    'Home Theater Systems',
    'Internal Hard Drives',
    'Keyboards',
    'Laptop Computers',
    'Landline Telephones',
    'Medical Equipment (X-ray Machines, Ultrasound Machines)',
    'Microwave Ovens',
    'Monitors (LCD, LED, CRT)',
    'Pagers',
    'Plasma Display Panel',
    'Precious Metals',
    'Printers (Dot Matrix)',
    'Printers (Inkjet, Laser)',
    'Radios',
    'Scanners',
    'Smartphones',
    'Smoke Detectors',
    'Solid State Drives (SSDs)',
    'Speakers',
    'Steel Chassis',
    'Tablets',
    'Televisions (LCD, LED, Plasma)',
    'Transistors',
    'Uttar Pradesh',
    'Video Game Controllers',
    'VCRs (Video Cassette Recorders)',
    'Walkie Talkies',
    'West Bengal',
  ];
  
  // Replace "data" with the actual variable containing your JSON data
  // This assumes that the structure of the JSON remains consistent
  // If the structure changes, you may need to adjust the code accordingly
  

  const handleInputChange = (e) => {
    setProductName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/get_item_details', { productName });
      setItemDetails(response.data);
      console.log("Data get")
    } catch (error) {
      console.error('Error fetching data:', error);
      setItemDetails(null);
    }
  };

  return (
    <Wrap>
      <Heading>
        <h1>E-Waste Item Details Chatbot</h1>
      </Heading>
      <Form>
        <form onSubmit={handleSubmit}>
            Product Name:
            <SearchInput value={productName} onChange={handleInputChange}>{stateOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}</SearchInput>
            <SearchButton type="submit">
              Get Details
            </SearchButton>
        </form>
      </Form>
      {itemDetails && (
        <ProdInfo>
          <h2>{itemDetails.productName}</h2>
          <Content>
          <InfoComponent>
            <h3>Electronic Components</h3>
            <ul>
              {itemDetails.components && itemDetails.components["Electronic Components"] && (
                itemDetails.components["Electronic Components"].map((component, index) => (
                  <li key={index}>{component}</li>
                ))
              )}
            </ul>
          </InfoComponent>
          <InfoComponent>
            <h3>Circuit Boards</h3>
            <ul>
              {itemDetails.components && itemDetails.components["Circuit Boards"] && (
                itemDetails.components["Circuit Boards"].map((board, index) => (
                  <li key={index}>{board}</li>
                ))
              )}
            </ul>
          </InfoComponent>
          <InfoComponent>
            <h3>Plastic Casings</h3>
            <ul>
              {itemDetails.components && itemDetails.components["Plastic Casings"] && (
                itemDetails.components["Plastic Casings"].map((casing, index) => (
                  <li key={index}>{casing}</li>
                ))
              )}
            </ul>
          </InfoComponent>

          {/* Display Metal Components */}
          <InfoComponent>
            <h3>Metal Components</h3>
            <ul>
              {itemDetails.components && itemDetails.components["Metal Components"] && (
                itemDetails.components["Metal Components"].map((metal, index) => (
                  <li key={index}>{metal}</li>
                ))
              )}
            </ul>
          </InfoComponent>

          {/* Display Precious Metals */}
          <InfoComponent>
            <h3>Precious Metals</h3>
            <ul>
              {itemDetails.components && itemDetails.components["Precious Metals"] && (
                itemDetails.components["Precious Metals"].map((preciousMetal, index) => (
                  <li key={index}>{preciousMetal}</li>
                ))
              )}
            </ul>
          </InfoComponent>

          {/* Display Harmful Elements */}
          <InfoComponent>
            <h3>Harmful Elements:</h3>
            <ul>
              {itemDetails.harmfulElements && (
                itemDetails.harmfulElements.map((harmfulElement, index) => (
                  <li key={index}>{harmfulElement}</li>
                ))
              )}
            </ul>
          </InfoComponent>
          </Content>

          <h3>Descripation</h3>
          <p>{itemDetails.description}</p>
          {/* Display other details as needed */}
        </ProdInfo>
      )}

    </Wrap>
  );
}

export default Chatbot;

const Wrap = styled.div`
  margin-bottom: 100px;

  margin-left: 170px;
  margin-right: 170px;

`

const Heading = styled.div`
  font-family: "Inter-Medium",Helvetica;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  //margin-bottom: 10vh;
`

const Form = styled.div`
  font-family: "Inter-Medium",Helvetica;
  font-weight: bold;
  font-size: 1.2rem;
  
  form{
    display: flex;
  justify-content: center;
  align-items: center;

  }
`

const SearchInput = styled.select`
  padding: 6px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0 16px;
`;

const SearchButton = styled.button`
    position: relative;
    width: 130px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #1D0347 0%, rgba(29, 3, 71, 0.75) 86.77%);
    border-radius: 20px;
    margin-right: 12px;
    color: white;
    font-family: "Inter-Medium",Helvetica;
    font-size: 16px;
  cursor: pointer;
`;

const ProdInfo = styled.div`

  h2{
    font-family: "Inter-Medium",Helvetica;
  font-weight: bold;
  font-size: 1.7rem;
  }

  p{
    font-family: "Inter-Medium",Helvetica;
    font-weight: 600;
  font-size: 1rem;
  }
`

const InfoComponent = styled.div`

display: flex;
  //margin-top: 50px;
 // margin: 0 170px;
  flex-direction: column;
  align-items: center;
  gap: 2vw;
  padding: 1rem;
  border-radius: 1rem;
  //max-height: 200px;
  //background-color: #ff5757;
  box-shadow: 0 0 0.15rem #16C99E;
  background-color: white;
  

  h3{
    font-family: "Inter-Medium",Helvetica;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
justify-content: center;
align-items: center;
padding: 0;margin: 0;
  }
  ul{
    font-family: "Inter-Medium",Helvetica;
  font-weight: 400;
  font-size: 1rem;
  padding: 0;
  margin: 0;
  letter-spacing: 2px;
  }
`

const Content = styled.div`
  display: grid;
  grid-gap: 48px;
  gap: 48px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`
