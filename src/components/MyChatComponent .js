import React from 'react';
import styled from 'styled-components';

const MyChatComponent = () => {
  return (
    <div>


      <Container1>

      </Container1>

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
  
`

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
