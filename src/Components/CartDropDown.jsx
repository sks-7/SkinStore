import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../Context/CartContext";
import styles from "./CartDropDown.module.css";

const CartDropDown = () => {
  const { cartItems, totalPrice, totalQuantities } = useStateContext();
  const navigate = useNavigate();
  return (
    <div className={styles.Cart_dropDownMainCon}>
      <div className={styles.Cart_dropDownTopDiv}>
        <p>{`${totalQuantities} in your cart `}</p>
        <p>
          <b>{`$ ${totalPrice}`}</b>
        </p>
      </div>
      <div>
        <Button
          type="submit"
          backgroundColor="#2E3337"
          color="white"
          borderRadius={0}
          _hover={{ bg: "teal.600" }}
          w="120px"
          marginTop="20px"
          marginBottom="20px"
          onClick={() => navigate("/cart")}
        >
          VIEW CART
        </Button>
      </div>
      {/* {cartItems.length >= 1 && ( */}
      <>
        {cartItems.map((el) => (
          <div
            className={styles.Cart_dropDowninnerMainCon}
            key={Math.floor(Math.random() * 100000000000)}
          >
            <div className={styles.Cart_dropDownTableImgTitleDiv}>
              <img src={el.imageURL} alt={el.imageURL} />
            </div>
            <div className={styles.Cart_dropDownTableDetailDiv}>
              <p>{el.productBlock_productName}</p>
              <p>
                <b>{`$ ${el.productBlock_priceValue}`}</b>
              </p>
              <p>{`Quantity: ${el.quantity}`}</p>
              <hr />
            </div>
          </div>
        ))}
      </>
      {/* )} */}
    </div>
  );
};

export default CartDropDown;
