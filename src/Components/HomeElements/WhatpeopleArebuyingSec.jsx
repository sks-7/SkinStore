import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { useStateContext } from "../../Context/CartContext";
import ProductPageModal from "../ModalComponent";
import styles from "./WhatpeopleArebuyingSec.module.css";

const WhatpeopleArebuyingSec = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const { onAdd, qty } = useStateContext();
  const WhatpeopleArebuyingSecProd = [
    {
      imageURL:
        "https://static.thcdn.com/images/small/webp//productimg/480/480/13927356-2104980626498655.jpg",
      productBlock_productName:
        "SkinCeuticals Anti-Aging Hyaluronic Acid Set ($242 Value)",
      productBlock_priceValue: 212.96,
    },
    {
      imageURL:
        "https://static.thcdn.com/images/small/webp//productimg/480/480/12596429-3594871019700125.jpg",
      productBlock_productName: "SkinMedica TNS Advanced+ Serum 1oz",
      productBlock_priceValue: 265.5,
    },
    {
      imageURL:
        "https://static.thcdn.com/images/small/webp//productimg/480/480/11588281-8764882139037003.jpg",
      productBlock_productName:
        "Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (1.7oz)",
      productBlock_priceValue: 91.5,
    },
    {
      imageURL:
        "https://static.thcdn.com/images/small/webp//productimg/480/480/13339906-1564915031255922.jpg",
      productBlock_productName: "Revision Skincare D.E.J eye cream 0.5 oz.",
      productBlock_priceValue: 109.0,
    },
  ];

  const handleClick = (item) => {
    setIsModalVisible(true);

    setSelectedData(item);
  };
  return (
    <div className={styles.WhatPeopleBuy_mainCont}>
      <div>
        <p>What People Are Buying Right Now</p>
      </div>
      <div className={styles.WhatPeopleBuy_ProdDiv}>
        <Flex justify="space-between" alignItems="center">
          {WhatpeopleArebuyingSecProd.map((el) => {
            return (
              <div key={el.productBlock_productName}>
                <div onClick={() => handleClick(el)}>
                  <div
                    key={el.imageURL}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img src={el.imageURL} alt="" width="70%" />
                  </div>
                  <div
                    className={
                      styles.WhatPeopleBuy_ProdproductBlock_priceValueDiv
                    }
                  >
                    <p>{el.productBlock_productName}</p>
                    <p>{`$ ${el.productBlock_priceValue}`}</p>
                  </div>
                </div>

                <div className={styles.WhatPeopleBuy_BtnDiv}>
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
                    <BsHandbag
                      style={{ marginRight: "10px", color: "white" }}
                    />
                    SHOP NOW
                  </Button>
                </div>
              </div>
            );
          })}
        </Flex>
        <ProductPageModal
          item={selectedData}
          isOpen={isModalVisible}
          setIsOpen={setIsModalVisible}
        />
      </div>
    </div>
  );
};

export default WhatpeopleArebuyingSec;
