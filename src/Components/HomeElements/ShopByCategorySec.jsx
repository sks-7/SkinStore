import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import styles from "./ShopByCategorySec.module.css"

const ShopByCategorySec = () => {
  const ShopByCategoryProd = [
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/01/Page-001-025201.png",
      title: "SKINCARE",
    },
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/09/Page-002-025209.png",
      title: "HAIR CARE",
    },
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/17/Page-003-025217.png",
      title: "MAKEUP",
    },
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/21/Page-004-025221.png",
      title: "TOOLS",
    },
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/40/Page-005-025240.png",
      title: "BATH & BODY",
    },
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/58/Page-006-025258.png",
      title: "SELF-CARE",
    },
  ];

  return (
    <div className={styles.ShopByCat_mainCont}>
      <div>
        <p>Shop by Category</p>
      </div>
      <div>
        <Flex justify="space-between" alignItems='center'>
          {ShopByCategoryProd.map((el)=>{
            return(
              
                
                <div key={el.imageUrl} style={{display:"flex",justifyContent:"center"}}>
                    <img src={el.imageUrl} alt="" width="70%" />
                </div>
    
            )
          })}
        </Flex>
      </div>
    </div>
  );
};

export default ShopByCategorySec;
