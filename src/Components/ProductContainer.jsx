import React, { useState } from "react";
import { Grid, GridItem, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import styles from "./ProductContainer.module.css";
import { MdStarRate } from "react-icons/md";
import ProductPageModal from "./ModalComponent";
import { useStateContext } from "../Context/CartContext";
const ProductContainer = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const { decQty, incQty, qty, onAdd } = useStateContext();

  const handleClick = (item) => {
    setIsModalVisible(true);

    setSelectedData(item);
  };

  return (
    <div className={styles.ProductCon_mainCont}>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {data?.map((el) => {
          //   console.log(el)
          return (
            // <GridItem w="100%" h="10" bg="blue.500" />
            <div
              className={styles.ProductCon_ProdDiv}
              key={Math.floor(Math.random() * 100000000000)}
            >
              <div
                className={styles.ProductCon_ProdDiv}
                onClick={() => handleClick(el)}
              >
                <img src={el.imageURL} alt="" />
                <p className={styles.ProductCon_ProdName}>
                  {el.productBlock_productName}
                </p>
                <div className={styles.ProductCon_panBannerTextDiv}>
                  <p>{el.papBanner_text}</p>
                </div>
                <div className={styles.ProductCon_RatingDiv}>
                  <Flex display="flex">
                    <MdStarRate color="gold" />
                    <MdStarRate color="gold" />
                    <MdStarRate color="gold" />
                    <MdStarRate color="gold" />
                    <MdStarRate color="gold" />
                    <p
                      className={styles.ProductCon_RatingText}
                    >{`(${el.productBlock_reviewCount})`}</p>
                  </Flex>
                </div>
                <div className={styles.ProductCon_priceDiv}>
                  <p>{` $ ${el.productBlock_priceValue} `}</p>
                </div>
              </div>
              <div>
                <Button
                  colorScheme="blue"
                  borderRadius={0}
                  bg="#2E3337"
                  border="1px"
                  borderColor="#2E3337"
                  color="white"
                  _hover={{ bg: "teal.300" }}
                  size="sm"
                  padding="20px 10px"
                  marginTop="15px"
                  w="full"
                  onClick={() => onAdd(el, qty)}
                >
                  QUICK BUY
                </Button>
              </div>
            </div>
          );
        })}
      </Grid>
      <ProductPageModal
        item={selectedData}
        isOpen={isModalVisible}
        setIsOpen={setIsModalVisible}
      />
    </div>
  );
};

export default ProductContainer;

// imageURL: "https://static.thcdn.com/images/xsmall/original//productimg/original/11289036-4054900270733709.jpg"
// papBanner_text: "25% off with code LABOR + Gift"
// papPopup_link: "SHOP NOW"
// "papPopup_link ": "https://www.skinstore.com/offers/all.list"
// papPopup_text: "25% off with code LABOR at the cart. Plus, receive a free Neostrata Dark Spot Corrector (worth $30) when you spend $130 or more on your purchase."
// "productAddToWishlist_login_button ": "https://www.skinstore.com/best-of-skinstore/smart-splurges.list?pageNumber=2#"
// "productBlock_link ": "https://www.skinstore.com/patchology-flashpatch-rejuvinatingeye-gels-30-pairs-jar/11289036.html"
// productBlock_priceValue: 50
// productBlock_productName: "Patchology FlashPatch RejuvinatingEye Gels - 30 Pairs/Jar (Worth $90)"
// productBlock_reviewCount: "3"
// productQuickbuySimple: "Quick Buy"
// visually-hidden: "5.0 Stars 3 Reviews"
// visually-hidden 2: "Patchology FlashPatch RejuvinatingEye Gels - 30 Pairs/Jar (Worth $90)"
