import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import styles from "./OverOnBlogSec.module.css";
const OverOnBlogSec = () => {
  const OverOnBlogSecProd = [
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/10/original-0328-STDCRE-33849-WC-SS-April-Photography-Batching-Shot07-500x500-030310.jpg",
      title: "SkinCeuticals: Vitamin C Beyond the Face",
      description:
        "SkinCeuticals believes in celebrating the skin-protective and rejuvenating powers of vitamin C every day, but this year they’re making sure your eyes and lips get in on the antioxidant action (and benefits).",
    },
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/51/original-0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_13-500x500-023351.jpg",
      title: "Which TriPollar Device is Right for You?",
      description:
        "In 2008, TriPollar launched themselves into the home beauty sphere with an aim to innovate the technology behind at-home treatments and devices.",
    },
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/16/original-NB-IMAGE-5---2022-SKINSTORE-LANDING-PAGE-025016.jpg",
      title: "Discover Natura Bissé",
      description:
        "With an aim to help their clients’ skin as they age and to turn their daily skin care routines into a moment of real self-care, Natura Bissé works to discover the latest scientific advancements and adapt them to the wellness industry.",
    },
    
  ];

  return (
    <div className={styles.TrendingHomeSec_mainCont}>
      <div>
        <p>Trending Offers</p>
      </div>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {OverOnBlogSecProd.map((el) => {
          return (
            // <GridItem w="100%" h="10" bg="blue.500" />
            <div className={styles.TrendingHomeSec_innerdiv} key={el.title}>
              <img src={el.imageUrl} alt="" />
              <p>{el.title}</p>
              <p>{el.description}</p>
              <Button
                colorScheme="blue"
                borderRadius={0}
                bg="white"
                border="1px"
                borderColor="#2E3337"
                color="#2E3337"
                _hover={{ bg: "teal.50" }}
                size="sm"
                padding="20px 10px"
                marginTop="15px"
              >
                READ MORE
              </Button>
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default OverOnBlogSec;
