import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import styles from "./TrendingSection.module.css";
const TrendingSection = () => {
  const TrendingProd = [
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/39/1224-STDCRE-28425-WC-SS-SkinStore-January-Photography-2022-BATCHING_Shot17-600x600-053341-095839.jpg",
      title: "12% off select SkinCeuticals bundles + Gift",
      description:
        "Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you spend $150 or more on the brand.",
    },
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/46/Anti_age_discoloration_sq-062146.jpg",
      title: "25% off Anti-Aging & Discoloration Treatments",
      description:
        "Get flawless looking skin, with or without makeup with our curated lists of anti-aging and discoloration treatments, 25% off at the cart... no code needed!",
    },
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/05/0805-STDCRE-39687-SS-LW-August-Batch-S07-600x600-023305.jpg",
      title: "Brand of the Month: Revision Skincare",
      description:
        "Revision Skincare was founded to change the way professional skincare results are achieved.",
    },
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/59/0531-STDCRE-36879-THG0034801-SS-WR-AP-SkinstoreSummerBatching-SHOT_10-500x500-093059.jpg",
      title: "Colorescience Gift",
      description:
        "Receive a Colorescience Deluxe Hydrating Mist 29ml (worth $15) when you spend $60 or more on the brand.",
    },
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/10/original-Screenshot_2022-02-28_175203-055610.png",
      title: "50% off select Eve Lom Cleansers",
      description:
        "If you haven't tried it already, the Eve Lom Cleanser is a must. Described as 'probably the best cleanser in the world' by Vogue this multi-award-winning balm has been designed to suit all skin types, and combines the brand's signature blend of four aromatic plant oils for glowing, radiant, smoother-looking skin.",
    },
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/53/original-original-500x500-085431-033753.jpg",
      title: "Christophe Robin Gift",
      description:
        "Receive a Christophe Robin Cleansing Volumizing Deluxe Paste 12ml (Free Gift) when you spend $80 or more.",
    },
  ];

  return (
    <div className={styles.TrendingHomeSec_mainCont}>
      <div>
        <p>Trending Offers</p>
      </div>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {TrendingProd.map((el) => {
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
                SHOP NOW
              </Button>
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default TrendingSection;
