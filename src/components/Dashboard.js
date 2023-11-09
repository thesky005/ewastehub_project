import React , {useEffect , useState} from "react";
import styled from "styled-components";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';



const Dashboard = () => {

    const db = firebase.firestore()

    const user = firebase.auth().currentUser;
    const [tradingData, setTradingData] = useState([]);

    useEffect(() => {
      const db = firebase.firestore();
  
      // Fetch data from the "trading-data" collection
      const unsubscribe = db.collection("trading-data").onSnapshot((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          // Push each document's data to the data array
          data.push(doc.data());
        });
        // Update the tradingData state with the fetched data
        setTradingData(data);
      });
  
      // Return the unsubscribe function to stop listening when the component unmounts
      return () => unsubscribe();
    }, []);

    // useEffect(() => {
    //   const unsubscribe = db.collection("trading-data").onSnapshot(querySnapshot => {
    //     if (querySnapshot.empty) {
    //       console.log("No documents found in trading-data collection");
    //     } else {
    //       const newData = querySnapshot.docs.map(doc => ({
    //         id: doc.id,
    //         ...doc.data(),
    //       }));
    
    //       console.log("Data received:", newData);
    //     }
    //   }, error => {
    //     console.error("Error getting data from Firestore:", error);
    //   });
    
    //   return unsubscribe;
    // }, []);

    const unsubscribe  =db.collection("trading-data").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  });
    

    // const userTradingDataRef = db.collection('trading-data').doc("k18TDDP94GMquupRdxqHIgk6nst2").collection('tradingdata');
    // console.log(userTradingDataRef)


    // const [productData, setProductData] = useState([]);
    // useEffect(() => {
    //   const unsubscribe = db.collection("trading-data").onSnapshot((querySnapshot) => {
    //     const products = [];
  
    //     querySnapshot.forEach((doc) => {
    //       const productData = doc.data();
    //       products.push({
    //         id: doc.id,
    //         ...productData,
    //       });
    //     });
  
    //     // Update the state with the retrieved product data
    //     setProductData(products);

    //     console.log(productData)
    //   });
  
    //   // Clean up the listener when the component unmounts
    //   return () => {
    //     unsubscribe();
    //   };
    // }, []);
    

    //const tradingProductCollectionRef = userTradingDataRef.collection('tradingdata')


  return (
    <>
    <Wrapper>
      <Content>
    {tradingData.map((item, index) => (
      <Card key={index}>
        <DesktopImage
          src={item.uploadimage}
          alt="Perfume"
        />
        <ProductContainer>
          <Title>Product</Title>
          <Name>{item.productname}</Name>
          <Description>
          {item.description}
          </Description>
          <PriceContainer>
            <CurrentPrice>${item.productprice}</CurrentPrice>
            <OriginalPrice>$169.99</OriginalPrice>
          </PriceContainer>
          <Button>
            <Icon
              src={process.env.PUBLIC_URL + "/images/icon-cart.svg"}
              alt="Cart"
            />
            Add to Cart
          </Button>
        </ProductContainer>
      </Card>
      ))}
      </Content>
    </Wrapper>
    {/* <Wrapper>
      <Card>
        <DesktopImage
          src={"/images/ewaste1.jpg"}
          alt="Perfume"
        />
        <ProductContainer>
          <Title>Perfume</Title>
          <Name>Gabrielle Essence Eau De Parfum</Name>
          <Description>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </Description>
          <PriceContainer>
            <CurrentPrice>$149.99</CurrentPrice>
            <OriginalPrice>$169.99</OriginalPrice>
          </PriceContainer>
          <Button>
            <Icon
              src={process.env.PUBLIC_URL + "/images/icon-cart.svg"}
              alt="Cart"
            />
            Add to Cart
          </Button>
        </ProductContainer>
      </Card>
    </Wrapper> */}

{/* <Wrapper>
{tradingData.map((item, index) => (
  <Card key={index}>
    <DesktopImage src={item.uploadimage} alt={item.productname} />
    <ProductContainer>
      <Title>Product</Title>
      <Name>{item.productname}</Name>
      <Description>{item.description}</Description>
      <PriceContainer>
        <CurrentPrice>${item.productprice}</CurrentPrice>
      </PriceContainer>
    </ProductContainer>
  </Card>
))}
</Wrapper> */}
</>
  );
};

export default Dashboard;



const Wrapper = styled.main`

  margin-top: 56px ;
  margin-left: 120px;
  margin-right: 120px;



  /* @media screen and (min-width: 600px) {
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */
`;



const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  /* display: flex;
  flex-direction: column; */
  margin: 1.75rem 1rem;
  //min-width: 15.5rem;
  background-color: white;
  border-radius: 0.6rem;
  box-shadow: 0.5px 1.25px 5px 1px rgba(20,20,20,0.4);
  //max-height: 17.5rem;

  /* @media screen and (max-width: 280px) {
    margin: auto;
  }

  @media screen and (min-width: 600px) {
    max-width: 37.5rem;
    flex-direction: row;
  } */
`;

const DesktopImage = styled.img`


  //display: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 450px;

  @media screen and (min-width: 600px) {
    display: inline-block;
    border-radius: 0.6rem 0 0 0.6rem;
    width: 300px;
    flex-basis: 10;
  }
`;

const MobileImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0.6rem 0.6rem 0 0;

  /* @media screen and (min-width: 600px) {
    display: none;
  } */
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0.8rem 2rem 2rem;
  max-width: 450px;

  /* @media screen and (min-width: 600px) {
    padding: 1rem 2rem 2rem;
  } */
`;

const Title = styled.p`
  color: ${(props) => props.theme.veryDarkBlue};
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.3rem;

  /* @media screen and (min-width: 600px) {
    padding-bottom: 0.5rem;
  } */
`;

const Name = styled.h1`
  color: ${(props) => props.theme.veryDarkBlue};
  font-size: 1.9rem;
  font-family: "Fraunces", sans-serif;
  margin: 0.2rem 0;
  line-height: 1.9rem;

  /* @media screen and (min-width: 600px) {
    padding-bottom: 0.5rem;
    font-size: 1.95rem;
    line-height: 2rem;
  } */
`;

const Description = styled.p`
  color: ${(props) => props.theme.darkGrayishBlue};
  font-size: 0.8rem;
  line-height: 1.4rem;

  /* @media screen and (min-width: 600px) {
    font-size: 0.9rem;
    line-height: 1.45rem;
  } */
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.9rem 0 1rem 0;

  /* @media screen and (min-width: 600px) {
    padding: 0.5rem 0 1.5rem 0;
  } */
`;

const CurrentPrice = styled.h2`
  color: ${(props) => props.theme.darkCyan};
  font-family: "Fraunces", sans-serif;
  font-size: 2rem;
  padding-right: 1.5rem;
  margin: 0;
`;

const OriginalPrice = styled.h3`
  color: ${(props) => props.theme.darkGrayishBlue};
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: line-through;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.darkCyan};
  color: ${(props) => props.theme.white};
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 0.6rem;
  border-style: none;
  padding: 1rem;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.superDarkCyan};
  }
`;

const Icon = styled.img`  
  width: 1rem;
  padding-right: 0.8rem;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(2, minmax(0, 1fr))
`;
