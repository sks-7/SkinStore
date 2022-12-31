import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { FcApproval } from "react-icons/fc";
import styles from "./CartGiftSection.module.css";

const CartGiftSection = () => {
  const GiftData = [
    {
      image:
        "https://s1.thcdn.com//productimg/70/70/13697918-3304983548963862.jpg",
      title: "12-Piece Beauty Bag (worth $93)",
      id:1
    },
    {
      image:
        "https://s1.thcdn.com//productimg/70/70/13169882-1944973340032844.jpg",
      title: "La Roche-Posay Hyalu B5 Serum 3 fl. oz (worth $4.00)",
      id:2
    },
    {
      image:
        "https://s1.thcdn.com//productimg/70/70/13645143-7974933796180154.jpg",
      title:
        "Schwarzkopf Professional BlondMe All Blondes Rich Mask 30ml (Worth $5.00)",
        id:3
    },
    {
      image:
        "https://s1.thcdn.com//productimg/70/70/13314835-8444974386870811.jpg",
      title: "Obagi Clinical Vitamin C Eye Brightener 2ml (Worth $8.00)",
      id:4
    },
    {
      image:
        "https://s1.thcdn.com//productimg/70/70/13713194-1084967985178731.jpg",
      title:
        "Dr. Loretta Micro-Exfoliating Cleanser Packette 1.5ml (Worth $5.00)",
        id:5
    },
    {
      image:
        "https://s1.thcdn.com//productimg/70/70/13658344-3264970003983311.jpg",
      title:
        "Naturopathica Oat Cleansing Facial Polish Sample 1.5ml (Worth $5.00)",
        id:6
    },
  ];
  return (
    <div>
      <Accordion allowToggle className={styles.CartGiftSection_mainCont}>
        <AccordionItem>
          <h2>
            <AccordionButton bg="#F2F2F2">
              <Box flex="1" textAlign="left" display="flex" alignItems="center">
                Gift Selection
                <FcApproval style={{ marginLeft: "10px" }} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg="#F2F2F2">
            <div className={styles.CartGiftSection_dataDiv}>
              {GiftData.map((el) => (
                <>
                  <div
                    className={styles.CartGiftSection_innerdataDiv}
                    key={el.id}
                  >
                    <div>
                      <img src={el.image} alt="" />
                    </div>
                    <div>{el.title}</div>
                  </div>
                </>
              ))}
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CartGiftSection;
