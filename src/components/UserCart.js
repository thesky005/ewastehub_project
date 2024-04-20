import React, { useEffect, useState } from "react";
import styled from "styled-components";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { useParams } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OpDLISGI9eUr3ggtMQdIQ9uZ7hGAWX5MsOLLhd1ZTPL1lL8iAc57r9dHrMxNCXZ7NSSMMULCzPs5Fdtau8dFO460061GRL0oy');


const UserCart = () => {

    const user =  firebase.auth().currentUser;
    //console.log("User UID get : ",user.uid)
  
    const { id } = useParams(); 
    
   
    const [cart , setcart] = useState([]);
  
    
  
    useEffect(() => {
      // Check if a user is authenticated
      if (user) {
        const db = firebase.firestore();
  
        // Reference to the user's watchlist collection
        const cartRef = db.collection('users').doc(user.uid).collection('cart');
        console.log(cartRef)
  
        // Set up a listener to get watchlist data
        const unsubscribe = cartRef.onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log("Cart Data:", data);
          setcart(data);
        });
  
        return () => {
          // Unsubscribe from the listener when the component unmounts
          unsubscribe();
        };
      }else{
        alert("User is not authenticated. Please log in");
      }
    }, [user]);

  //   const handleCheckout = async () => {
  //     const stripe = await stripePromise;
  //     const response = await fetch('/your-server-endpoint-for-payment', {
  //         method: 'POST',
  //         headers: {
  //             'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ items: cart }),
  //     });
  //     const session = await response.json();
  //     const result = await stripe.redirectToCheckout({
  //         sessionId: session.id,
  //     });
  //     if (result.error) {
  //         console.error(result.error);
  //         // Handle error
  //     }
  // };
//   const handleCheckout = async () => {
//     try {
//         const response = await fetch('http://localhost:5000/api/payment', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ items: cart }),
//         });
//         const session = await response.json();
//         const stripe = await stripePromise;
//         const result = await stripe.redirectToCheckout({
//             sessionId: session.sessionId,
//         });
//         if (result.error) {
//             console.error("Errrrrrrrrrrrrrro : ",result.error);
//             // Handle error
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         // Handle error
//     }
// };

const handleCheckout = async () => {
  try {
      const response = await fetch('https://ewastehubflask.onrender.com/api/payment', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ items: cart }),
      });
      const session = await response.json();

      if (session.sessionId) {
          const stripe = await stripePromise;
          const result = await stripe.redirectToCheckout({
              sessionId: session.sessionId,
          });
          if (result.error) {
              console.error(result.error);
              // Handle error
          }
      } else {
          console.error('Error: No session ID received from server');
          // Handle error
      }
  } catch (error) {
      console.error('Error:', error);
      // Handle error
  }
};


  return (
    <>
      <Wrapper>
        <Content>
          {cart && cart.length > 0 && cart.map((item, index)=> (
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
                    src={"/images/trolley.png"}
                    alt="Cart"
                  />
                  Add to Cart
                </Button>
              </ProductContainer>
            </Card>
          ))}
        </Content>

        <BuyButton onClick={handleCheckout}>
        
            {/* <Link to='trading'> */}
            <div className="box">
              <div className="get-started-box-wrapper">
                <div className="get-started-box">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="text-wrapper">Buy Now</div>
                  </div>
                </div>
              </div>
            </div>
            {/* </Link> */}
          
        </BuyButton>
      </Wrapper>
    </>
  );
};

export default UserCart;


const BuyButton = styled.div`
  margin-right: 2rem;
  cursor: pointer;
    .box {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    }

    .box .get-started-box-wrapper {
    border: 0px none;
    height: 4.711rem;
    overflow-x: hidden;
    width: 11.65rem;
    }

    .box .get-started-box {
    height: 4.688rem;
    width: 10.25rem;
    }

    .box .overlap-group {
    height: 4.688rem;
    position: relative;
    width: 11.25rem;

    }

    .box .rectangle {
    background: linear-gradient(180deg, rgb(29, 3, 71) 0%, rgba(29, 3, 71, 0.75) 77.92%);
    border-radius: 20px;
    height: 4.188rem;
    width: 11rem;
    }

    .box .text-wrapper {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 1.25rem;
    font-weight: 600;
    left: 2.9rem;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 1.438rem;
    width: 8.313rem;
    }

    /* @media screen and (max-width: 768px) {
       // display: table-row;
        justify-content: center;
        } */

  @media screen and (max-width: 768px) {
  .box {
    //flex-direction: column;
   // align-items: center;
   //justify-content: center;
   padding: 20px 0;
   padding-left: 5px;
  }
  .box .overlap-group {
    //padding-left: 15px;

    }

  .box .get-started-box-wrapper {
    //width: 100%;
    //padding-left: 25px;
  }
}
`
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
  width: 1.6rem;
  padding-right: 2rem;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(2, minmax(0, 1fr))
`;
