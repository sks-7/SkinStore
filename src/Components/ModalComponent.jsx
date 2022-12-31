import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import styles from "./ModalComponent.Module.css";

function ProductPageModal({ isOpen, setIsOpen, item }) {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const CustomerAlsoBrought = [
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp//productimg/480/480/13927356-2104980626498655.jpg",
      title: "SkinCeuticals Anti-Aging Hyaluronic Acid Set ($242 Value)",
      price: 212.96,
    },
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp//productimg/480/480/12596429-3594871019700125.jpg",
      title: "SkinMedica TNS Advanced+ Serum 1oz",
      price: 265.5,
    },
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp//productimg/480/480/11588281-8764882139037003.jpg",
      title: "Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (1.7oz)",
      price: 91.5,
    },
  ];
  const onClose = () => {
    setIsOpen(false);
  };
  // console.log(item);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Added to Your Cart</ModalHeader>
          <ModalHeader>{item.productBlock_productName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div
              className={styles.productBlock_TopMainDiv}
              style={{
                display: "flex",
                fontSize: "30px",
                fontWeight: "700",
                justifyContent: "flex-start",
              }}
            >
              <div style={{ marginBottom: "30px" }}>
                <img src={item.imageURL} alt="" width="50%" />
              </div>
              <div>
                <p>{`$ ${item.productBlock_priceValue}`}</p>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p>Subtotal:</p>
                  (1 item in Your Cart)
                </div>
                <div>
                  <p>{`$ ${item.productBlock_priceValue}`}</p>
                </div>
              </div>

              <hr
                style={{
                  border: "1px solid #333",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              />
              <div>
                <Stack direction="row" spacing={4}>
                  <Button
                    colorScheme="blue"
                    borderRadius={0}
                    bg="white"
                    border="1px"
                    borderColor="#2E3337"
                    color="#2E3337"
                    _hover={{ bg: "teal.50" }}
                    w="full"
                    onClick={onClose}
                    // onClick={() => handleOnClick("/register")}
                  >
                    CONTINUE SHOPPING
                  </Button>
                  <Button
                    backgroundColor="#2E3337"
                    color="white"
                    borderRadius={0}
                    _hover={{ bg: "teal.600" }}
                    w="full"
                    onClick={() => navigate("/cart")}
                  >
                    VIEW CART
                  </Button>
                </Stack>
              </div>
              <hr style={{ border: "1px solid #333", marginTop: "10px" }} />
            </div>
          </ModalBody>

          <ModalFooter>
            <div style={{ marginBottom: "40px" }}>
              <div
                className={styles.productBlock_BottomTitle}
                style={{
                  display: "flex",
                  fontSize: "20px",
                  fontWeight: "700",
                  width: "400px",
                  margin: "auto",
                }}
              >
                <p>Customers who bought this also bought:</p>
              </div>
              <div className={styles.productBlock_ProdDiv}>
                <Flex justify="space-between" alignItems="center">
                  {CustomerAlsoBrought.map((el) => {
                    return (
                      <div key={el.title}>
                        <div
                          key={el.imageUrl}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <img src={el.imageUrl} alt="" width="70%" />
                        </div>
                        <div className={styles.productBlock_ProdPriceDiv}>
                          <p>{el.title}</p>
                          <p>{`$ ${el.price}`}</p>
                        </div>
                      </div>
                    );
                  })}
                </Flex>
              </div>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProductPageModal;
