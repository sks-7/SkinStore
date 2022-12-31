import {
  Alert,
  AlertIcon,
  Button,
  Divider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import AdBar from "../Components/AdBar";
import OneNavbar from "../Components/OneNavbar";
import { useStateContext } from "../Context/CartContext";
import styles from "../Pages_Css/Cart.module.css";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { TiDeleteOutline } from "react-icons/ti";
import CartGiftSection from "../Components/CartGiftSection";
import WhatpeopleArebuyingSec from "../Components/HomeElements/WhatpeopleArebuyingSec";
import Footer from "../Components/Footer";

const CartPage = () => {
  const navigate = useNavigate();
  const {
    decQty,
    incQty,
    qty,
    onRemove,
    cartItems,
    totalPrice,
    totalQuantities,
    toggleCartItemQuantity,
  } = useStateContext();
  return (
    <>
      <div>
        <AdBar />
        <OneNavbar />
      </div>
      <div className={styles.Cart_mainCon}>
        <div className={styles.Cart_mainTitleCon}>
          <p>Your Cart</p>
          <br />
          <hr />
          {cartItems.length >= 1 && (
            <div className={styles.Cart_AlertDiv}>
              <Alert status="success">
                <AlertIcon />
                You have qualified for: Select a gift for you or someone you
                love when you spend $130 or more Don't forget to make your
                selection below
              </Alert>
            </div>
          )}

          <hr />
        </div>
        <div className={styles.Cart_emptyCartCon}>
          {cartItems.length < 1 && (
            <div>
              {/* <AiOutlineShopping size={150} /> */}
              <p>There are currently no items in your cart.</p>

              <Button
                backgroundColor="#2E3337"
                color="white"
                borderRadius={0}
                _hover={{ bg: "teal.600" }}
                onClick={() => navigate("/")}
              >
                CONTINUE SHOPPING
              </Button>
            </div>
          )}

          <div className={styles.Cart_innerMainCon}>
            <div>
              {cartItems.length >= 1 && (
                <>
                  <TableContainer>
                    <Table
                      variant="simple"
                      size="lg"
                      className={styles.Cart_TableDiv}
                    >
                      <TableCaption>
                        <hr />
                      </TableCaption>
                      <Thead>
                        <Tr>
                          <Th>Items</Th>
                          <Th></Th>
                          <Th isNumeric>Price</Th>
                          <Th isNumeric>Quantity</Th>
                          <Th isNumeric>SubTotal</Th>
                          <Th>Remove</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {cartItems.map((el) => (
                          <Tr key={el.productBlock_productName}>
                            <Td>
                              <div className={styles.Cart_TableImgTitleDiv}>
                                <img src={el.imageURL} alt={el.imageURL} />
                              </div>
                            </Td>
                            <Td overflow="hidden">
                              {el.productBlock_productName}
                            </Td>

                            <Td
                              isNumeric
                            >{`$ ${el.productBlock_priceValue}`}</Td>

                            <Td
                              className={styles.Cart_TableQuantityDiv}
                              isNumeric
                            >
                              {" "}
                              <Button
                                colorScheme="blue"
                                borderRadius={0}
                                bg="#EDEEEE"
                                border="1px"
                                borderColor="#2E3337"
                                color="#2E3337"
                                _hover={{ bg: "#D1D2D5", color: "#2E3337" }}
                                size="sm"
                                width="35px"
                                height="25px"
                                onClick={() =>
                                  toggleCartItemQuantity(
                                    el.productBlock_productName,
                                    "dec"
                                  )
                                }
                              >
                                <HiMinusSm size="15px" />
                              </Button>
                              <span
                                className={styles.Cart_TableQuantityCountspan}
                              >
                                {el.quantity}
                              </span>
                              <Button
                                colorScheme="blue"
                                borderRadius={0}
                                bg="#EDEEEE"
                                border="1px"
                                borderColor="#2E3337"
                                color="#2E3337"
                                _hover={{ bg: "#D1D2D5", color: "#2E3337" }}
                                size="sm"
                                width="35px"
                                height="25px"
                                onClick={() =>
                                  toggleCartItemQuantity(
                                    el.productBlock_productName,
                                    "inc"
                                  )
                                }
                              >
                                <HiPlusSm size="15px" />
                              </Button>
                            </Td>
                            <Td isNumeric>{`$ ${
                              el.productBlock_priceValue * el.quantity
                            }`}</Td>

                            <Td>
                              <div className={styles.Cart_TableRemoveDiv}>
                                <Button
                                  size="sm"
                                  borderRadius="100%"
                                  bg="white"
                                  onClick={() => onRemove(el)}
                                >
                                  <TiDeleteOutline size="20px" />
                                </Button>
                              </div>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                      <Tfoot>
                        <Tr>
                          <Th></Th>
                          <Th></Th>
                          <Th></Th>
                          <Th>Card SubTotal:</Th>
                          <Th isNumeric>{`$ ${totalPrice}`}</Th>
                        </Tr>
                      </Tfoot>
                    </Table>
                  </TableContainer>
                </>
              )}
            </div>
            <div>{cartItems.length >= 1 && <CartGiftSection />}</div>
          </div>
        </div>

        {cartItems.length >= 1 && (
          <div className={styles.Cart_CheckOutBtnDiv}>
            <Button
              colorScheme="blue"
              borderRadius={0}
              bg="#EDEEEE"
              border="1px"
              borderColor="#2E3337"
              color="#2E3337"
              _hover={{ bg: "#D1D2D5", color: "#2E3337" }}
              size="sm"
              w="250px"
              height="40px"
              onClick={() => navigate("/")}
            >
              CONTINUE SHOPPING
            </Button>
            <Button
              type="submit"
              backgroundColor="#2E3337"
              color="white"
              borderRadius={0}
              _hover={{ bg: "teal.600" }}
              w="250px"
              height="40px"
            >
              CHECKOUT
            </Button>
          </div>
        )}
      </div>
      <div className={styles.WhatpeopleArebuyingSec_com}>
        <WhatpeopleArebuyingSec />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default CartPage;
