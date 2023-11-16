import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import {useState, useEffect} from 'react'
export default function Prod() {
  // const items = useSelector((state) => state.allCart.items);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchDetails = async () => {
        const response = await fetch('http://localhost:5000/product/getProducts');
        const data = await response.json();
        
        setItems(data);
        console.log(data);
    }

    fetchDetails();
}, [])

const dispatch = useDispatch();

return (
  <div className="m-2">
    <MDBContainer>
      <MDBRow className="mb-3">
        {items.map((item) => (
          <MDBCol key={item.productImage} size="md">
            <MDBCard>
              <MDBCardImage src={item.productImage} position="top" alt="..." />
              <MDBCardBody>
                <MDBCardTitle>{item.productName}</MDBCardTitle>
                <MDBCardText>{item.productPrice}</MDBCardText>
                <MDBBtn onClick={() => dispatch(addToCart(item))}>
                  Add to Cart
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  </div>
);
}