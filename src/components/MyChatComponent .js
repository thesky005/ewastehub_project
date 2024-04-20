import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const MyChatComponent = () => {

  const [stateName, setStateName] = useState('');

  const stateOptions = ['<--Select State-->','AndhraPradesh', 'goa', 'Assam', 'Gujarat' , 'delhi' ,'haryana' , 'westbengal' , 'uttarpradesh' ,'tamilnadu' ,'rajasthan', 'punjab' , 'odisha', 'maharastra','madhyapradesh' , 'karnataka', 'jharkhand', 'jammu_kashmir'];

  useEffect(() => {
    //fetchData();
  }, [stateName]);

  const handleSelectChange = (e) => {
    setStateName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   // fetchData();
  };
  return (
    <div>


      {/* <Container1>
      <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>
            Select State  :
            <SelectInput value={stateName} onChange={handleSelectChange}>
              {stateOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </SelectInput>
          </StyledLabel>
        </StyledForm>
      </Container1> */}

      <Container>

      <h1 >E-Waste Item Details Chatbot</h1>
      <iframe
        src="https://app.fastbots.ai/embed/cltx71nyy0007swb42meqv1d7"
        title="Fastbots Chat"
        style={{
          //margin : '56px 0 0 166px',
          marginLeft:'250px',
          width : '70%',
          height: '500px', // Adjust the height as needed
          border: 'none',
        }}
      ></iframe>
      </Container>
    </div>
  );
}

export default MyChatComponent;

const Container1 = styled.div`
    height: 100%;
`
const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin-left: 500px;
`;

const StyledLabel = styled.label`
  margin-right: 12px;
  font-size: 16px;
  font-family: "Inter-Medium", Helvetica;

`;

const SelectInput = styled.select`
  padding: 6px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0 12px;
  width: 264px;
`;
const Container = styled.div`

display: flex;
  flex-direction: column; // This ensures items are stacked vertically
  justify-content: center;
  align-items: center;
  width: 80%;

  h1{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4B4B4B;
    font-size: 36px;
    font-family: "Inter-Medium", Helvetica;
    font-weight: 600;
    letter-spacing: 1.2px;
    margin-left: 240px;


  }
  iframe {
    padding: 64px;
    box-shadow: 0 4px 8px 0 rgb(20, 180, 142); /* X-offset Y-offset Blur Spread Color */
    border-radius: 10px; /* Rounded corners */
    border: 1px solid #ddd; /* Light grey border */
    transition: all 0.3s; /* Smooth transition for hover effects */
    
    &:hover {
      box-shadow: 0 6px 12px 0 rgb(20, 180, 169); /* Larger shadow when hovered */
      border-color: #ccc; /* Slightly darker border on hover */
    }
  }
`
