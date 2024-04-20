

//Correct 

// import React, { useEffect, useRef } from 'react';

// const Graph = () => {
//   const graphRef = useRef();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch chart data from the Flask server
//         const response = await fetch('http://localhost:5000/get_chart_data');
//         const data = await response.json();
//         console.log(data)

//         // Display the chart     
//         const img = new Image();
//         img.src = `data:image/png;base64, ${data.chartData}`;
//         graphRef.current.appendChild(img);
//       } catch (error) {
//         console.error('Error fetching chart data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return <div ref={graphRef}></div>;
// };

// export default Graph;



import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'

const Graph = () => {
  const graphRef = useRef();
  const [stateName, setStateName] = useState('');
  const stateOptions = ['<--Select State-->','AndhraPradesh', 'goa', 'Assam', 'Gujarat' , 'delhi' ,'haryana' , 'westbengal' , 'uttarpradesh' ,'tamilnadu' ,'rajasthan', 'punjab' , 'odisha', 'maharastra','madhyapradesh' , 'karnataka', 'jharkhand', 'jammu_kashmir'];

  const fetchData = async () => {
    try {
      // Fetch chart data from the Flask server based on the selected state
      const response = await fetch(`https://ewastehubflask.onrender.com/get_chart_data/${stateName}`);
      //const response = await fetch(`https://adorable-cowboy-hat-deer.cyclic.app/get_chart_data/${stateName}`);
      const data = await response.json();

      // Display the chart     
      const img = new Image();
      //  img.width = 800; // Set your desired width
      //  img.height = 600;
      img.src = `data:image/png;base64, ${data.chartData}`;
      graphRef.current.innerHTML = ''; // Clear previous content
      graphRef.current.appendChild(img);
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }

  };

  // Fetch data when component mounts and when stateName changes
  useEffect(() => {
    fetchData();
  }, [stateName]);

  const handleInputChange = (e) => {
    setStateName(e.target.value);
  };

  const handleSelectChange = (e) => {
    setStateName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <>
      {/* <Container>
          <form onSubmit={handleSubmit}>
            <label>
              Enter State Name:
              <input type="text" value={stateName} onChange={handleInputChange} />
            </label>
            <button type="submit">Fetch Chart</button>
          </form>
          <Chart>
            <div ref={graphRef}></div>
          </Chart>
      </Container> */}
      <Container>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>
            {/* Enter State Name:
            <SearchInput type="text" value={stateName} onChange={handleInputChange} /> */}
            Select State  :
            <SelectInput value={stateName} onChange={handleSelectChange}>
              {stateOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </SelectInput>
          </StyledLabel>
          {/* <SearchButton type="submit">Fetch Chart</SearchButton> */}
        </StyledForm>
        <Chart>
          <div ref={graphRef}></div>
        </Chart>
      </Container>
    </>
  );
};

export default Graph;


// const Container = styled.div`
//   //display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Chart = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   div{
//     //width: 100%;
//   }
// `;

const Container = styled.div`
  //display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: visible;
  
`;

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

const SearchInput = styled.input`
  padding: 6px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0 12px;
`;

const SearchButton = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #1D0347 0%, rgba(29, 3, 71, 0.75) 86.77%);
  border-radius: 20px;
  margin-right: 12px;
  color: white;
  font-family: "Inter-Medium", Helvetica;
  font-size: 16px;
  cursor: pointer;
`;

const Chart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
