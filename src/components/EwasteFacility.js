import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/firestore';
// import { Form, Dropdown } from 'react-bootstrap';

const EwasteFacility = () => {
  const db = firebase.firestore();
  const [location, setlocation] = useState([]);
  const [data, setData] = useState([]);
  const [stateid, setStateid] = useState([]);
  const [searchTermCity, setSearchTermCity] = useState([]);
  const [searchTermState, setSearchTermState] = useState([]);

  const [searchTerm, setSearchTerm] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [stateName, setStateName] = useState('');

  const stateOptions = ['<--Select State-->','AndhraPradesh', 'goa', 'Assam', 'Gujarat' , 'delhi' ,'haryana' , 'westbengal' , 'uttarpradesh' ,'tamilnadu' ,'rajasthan', 'punjab' , 'odisha', 'maharastra','madhyapradesh' , 'karnataka', 'jharkhand', 'jammu_kashmir'];



  const handleSelectChange = (e) => {
    setStateName(e.target.value);
  };

  useEffect(() => {
    const unsubscribe = db.collection('Location').limit(100).onSnapshot(querySnapshot => {
      const newData = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(newData);
      //console.log("Search data: ", newData);

      const dataWithId12 = newData.find(item => item.id === "12");

      if (Array.isArray(dataWithId12.data)) {
        dataWithId12.data.forEach((item, index) => {
          const installedCapacity = item.Installed_Capacity_Metric_Tons_per_Annum_MTA;
          const nameAddress = item.Name_Address;
          const sno = item.Sno;

          // console.log(`Index ${index}:`);
          // console.log(`Installed Capacity: ${installedCapacity}`);
          // console.log(`Name and Address: ${nameAddress}`);
          // console.log(`Sno: ${sno}`);
        });

      } else {
        console.log("Data with id 12 not found.");
      }

    });
    return unsubscribe;
  }, []);
  const SearchLocation = (e) => {
    e.preventDefault();

    // First filter by state
    const filteredByState = data.filter((item) =>
      item.name && item.name.toLowerCase() === searchTermState.toLowerCase()
    );

    // Then filter by city within the state-filtered data
    const filteredData = [];

    // Iterate through state-filtered data
    filteredByState.forEach((item) => {
      if (item.data) {
        // Filter by city within the state-filtered data
        const cityMatches = item.data.filter(dataItem =>
          dataItem.Name_Address &&
          dataItem.Name_Address.toLowerCase().includes(searchTermCity.toLowerCase())
        );

        // If there are city matches, add them to the result array
        if (cityMatches.length > 0) {
          filteredData.push(...cityMatches);
        }
      }
    });

    setFilteredData(filteredData);
    //console.log(filteredData);
  };

  const imgstyled = {
    position : 'absolute',
    zIndex : '-1',
    width : '100%',
    height: '450px',
    filter: 'brightness(55%)'
    //filter: brightness(35%);
  }
  return (
    <>
    <img src="\images\pxfuel.jpg" alt="" style={imgstyled} />
    <Container>
      
      <Title>Search Results</Title>
      <SearchForm onSubmit={(e) => { SearchLocation(e) }}>
        <SearchInput
          type="text"
          placeholder="Enter the City"
          value={searchTermCity}
          onChange={(e) => setSearchTermCity(e.target.value)}
        />
       {/* <StyledLabel>
            
            Select State  :
            <SelectInput value={stateName} onChange={handleSelectChange}>
              {stateOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </SelectInput>
          </StyledLabel> */}
        <SearchInput
          type="text"
          placeholder="Enter Your State"
          value={searchTermState}
          onChange={(e) => setSearchTermState(e.target.value)}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      <WrapResult>
      <ResultsContainer>
        <Wrap>
          {filteredData.map((dataItem, index) => (

            <ResultItem key={index}>
              {/* <ItemName>{searchTermState}</ItemName> */}
              <Wrap1>
                <p>{dataItem.Name_Address}</p>
                <p>Capacity : {dataItem.Installed_Capacity_Metric_Tons_per_Annum_MTA} MTA</p>
              </Wrap1>
              <Button>View</Button>
            </ResultItem>

          ))}
        </Wrap>
      </ResultsContainer>
      </WrapResult>
    </Container>
    </>
  );
}

export default EwasteFacility;

const SelectInput = styled.select`
  padding: 6px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0 12px;
  width: 264px;
`;

const StyledLabel = styled.label`
  margin-right: 12px;
  font-size: 16px;
  font-family: "Inter-Medium", Helvetica;

`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
  width: 100%;
  //margin: 0 170px;


`;
const Wrap = styled.div`

  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

`
const WrapResult = styled.div`
  margin: 0 170px;
  margin-top: 50px;
`
const Wrap1 = styled.div`
   // background-color: red;
    border-radius: 8px;
    p{
      font-size: 17px;
      //font-family: Arial, Helvetica, sans-serif;
      font-family: "Inter-Medium",Helvetica;
      font-weight: 600;
      
    } 
    //font-family: "Inter-Medium",Helvetica;
`

const Button = styled.div`
  position: relative;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #1D0347 0%, rgba(29, 3, 71, 0.75) 86.77%);
    border-radius: 8px;
    margin-right: 12px;
    color: white;
    font-family: "Inter-Medium",Helvetica;
    font-size: 16px;
`
const SearchForm = styled.form`
  display: flex;
  padding-right: 30px;
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
    font-family: "Inter-Medium",Helvetica;
    font-size: 16px;
  cursor: pointer;
`;
const SearchResult = styled.div`
  padding: 0 0 26px;
  h2{
    margin-top:80px ;
  }
`;

const Title = styled.h1`
  font-family: "Inter-Medium",Helvetica;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 10vh;
  color: white;
`;

const ResultsContainer = styled.div`

  display: flex;
  //flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  gap: 1rem;
`;

const ResultItem = styled.div`
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
  
  //max-width: 60vh;
`;

const ItemName = styled.p`
  font-family: 'Montserrat';
  font-weight: bold;
`;

const Capacity = styled.h2`
  font-family: 'Montserrat';
  font-weight: bold;
  margin-top: 2rem;
`;

const GoButton = styled.button`
  font-family: 'Montserrat';
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: #ff5757;
  transition: transform 0.3s;
  &:hover {
    background-color: #ff5757;
    transform: scale(1.05);
  }
`;

// Inside your React component

