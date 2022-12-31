import {
  Button,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Stack,
  Text,
} from "@chakra-ui/react";

import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./NavBarMenu.module.css";

const NavBarMenu = () => {
  const navigate = useNavigate();
  const handleOnClick = (a) => {
    navigate(a);
  };

  const brandBtn = [
    {
      name: "0-9",
    },
    {
      name: "A",
    },
    {
      name: "B",
    },
    {
      name: "C",
    },
    {
      name: "D",
    },
    {
      name: "E",
    },
    {
      name: "F",
    },
    {
      name: "G",
    },
    {
      name: "H",
    },
    {
      name: "I",
    },
    {
      name: "J",
    },
    {
      name: "K",
    },
    {
      name: "L",
    },
    {
      name: "M",
    },
    {
      name: "N",
    },
    {
      name: "O",
    },
    {
      name: "P",
    },
    {
      name: "Q",
    },
    {
      name: "R",
    },
    {
      name: "S",
    },
    {
      name: "T",
    },
    {
      name: "U",
    },
    {
      name: "V",
    },
    {
      name: "W",
    },
    {
      name: "X",
    },
    {
      name: "Y",
    },
    {
      name: "Z",
    },
  ];
  const BestOfSkin = [
    {
      name: "Smart Splurges",
      location:"/best-of-skinstore/smart-splurges"
    },
    {
      name: "Budget Friendly Finds",
    },
    {
      name: "One Step Solution",
    },
    {
      name: "No Makeup",
    },
    {
      name: "Clarify,Clam,& Correct",
    },
    {
      name: "Stay Timeless",
    },
    {
      name: "Total Body Beauty",
    },
    {
      name: "Hair-Body and Density",
    },
    {
      name: "Hair-Smooth and Soften",
    },
    {
      name: "Master your blowout",
    },
    {
      name: "Treat Yourself",
    },
    {
      name: "On the Go",
    },
  ];
  const SummerShop = {
    TopCategories: [
      "Sunless Tanning",
      "Hair Care",
      "Skincare",
      "Summer Scents",
      "Expert's Top Picks",
      "Body Care",
      "Skin Correcting Tools",
    ],
    Trending: [
      "Take the SPF Quiz",
      "SPF 30 and over",
      "SPF 50 and over",
      "After Sun",
      "Tinted",
      "Mineral",
      "Eye Protection",
    ],
    OnTheBlog: [
      "How to Choose The Right SPF",
      "Best Self Tanners for Summer",
      "Summer Beauty Tricks",
      "How to Get Glowing Skin This Summer",
      "Summer Hair",
    ],
  };
  const BuildARoutine = {
    SkinTypeRoutines: [
      "Dry Skin Routine",
      "Normal Skin Routine",
      "Oily Skin Routine",
      "Combination Skin Routine",
      "Sensitive Skin Routine",
    ],
    SkinConcernRoutines: [
      "Acne Routine",
      "Fine Lines & Wrinkles Routine",
      "Dark Spots & Discoloration Routine",
      "Redness & Rosacea Routine",
      "Dullness & Brightening Routine",
    ],
    BuildHairRoutine: [
      "Fine, Thinning Hair Routine",
      "Healthy Scalp Routine",
      "Colored Hair Routine",
      "Dry, Damaged Hair Routine",
      "Oily Hair Routine",
      "Hair Styling Routine",
    ],
  };
  const SkinCare = {
    PopularCategories: [
      "View All Skin Care",
      "New In",
      "Clean Skincare",
      "5* Rated Products",
      "Gifts & Sets",
      "Supersizes & Duo",
      "Travel Sizes",
    ],
    ByProductType: [
      "Moisturizers",
      "Serums",
      "Eye Serums",
      "Exfoliators",
      "Masks",
      "Eye Care",
      "Toners",
      "Lip Care",
      "Oils",
      "Treatments",
      "Mists",
      "Self Tanning",
      "Tools",
    ],
    ByIngredient: [
      "Vitamin C",
      "AHA",
      "Caffeine",
      "Retinol",
      "Hyaluronic Acid",
      "Niacinamide",
      "Lactic Acid",
      "Salicylic Acid",
      "Glycolic Acid",
      "Azelaic Acid",
    ],
    BySpecificConcern: [
      "Acne & Blemishes",
      "Fine Lines & Wrinkles",
      "Dark Circles",
      "Dry Skin",
      "Dullness",
      "Lack of Firmness",
      "Pigmentation",
      "Pregnancy Skincare",
      "Redness & Rosacea",
      "Sensitive Skin",
      "Visible Pores",
    ],
  };
  const Hair = {
    PopularCategories: [
      "View All Hair Care",
      "New In",
      "Clean Hair Care",
      "5* Rated Products",
      "Gifts & Sets",
      "Travel Sizes",
      "Supersize & Duos",
    ],
    ProductType: [
      "Shampoo",
      "Conditioners",
      "Hair Treatments",
      "Hair Masks",
      "Hair Oils",
      "Hair Sprays",
      "Hair Styling",
      "Hair Thinning & Loss",
      "Hair Color Treatments",
      "Hair Supplements",
      "Hair Brushes & Combs",
    ],
    HairType: [
      "Anti-Dandruff & Scalp Care",
      "Coarse & Textured Hair",
      "Colored Hair",
      "Curly & Wavy Hair",
      "Damaged Hair",
      "Dry Hair",
      "Fine Hair",
      "Oily Hair",
    ],
    Electrical: ["Flat Irons", "Hair Dryers", "Rollers & Curling Tongs"],
    HairRemoval: [
      "Hair Removal Devices",
      "Hair Removal Products",
      "Men's Shaving Products",
    ],
  };
  const MakeUp = {
    PopularCategories: [
      "View All Cosmetics",
      "New In",
      "Clean Makeup",
      "5* Rated Products",
      "Gifts & Sets",
      "Brushes & Application",
      "Makeup palettes",
      "Nails",
    ],
    Eyes: [
      "Eye Liners",
      "Lash & Brow Enhancers",
      "Eye Shadows",
      "Mascaras",
      "Brow Pencils",
    ],
    Face: [
      "BB & CC Cream",
      "Blushers",
      "Bronzers",
      "Color Correctors",
      "Concealers",
      "Contour",
      "Face Powders",
      "Foundations",
      "Highlighters",
      "Makeup Removers",
      "Makeup Setting Spray",
      "Primers",
      "Tinted Moisturizer",
    ],
    Lips: [
      "Lipsticks",
      "Lip Balms",
      "Lip Glosses",
      "Lip Liners",
      "Lip Plumpers",
      "Liquid Lipsticks",
    ],
  };
  const Tools = {
    PopularCategories: ["View All Tools", "Makeup Brushes & Accessories"],
    HairCare: [
      "Hair Dryers",
      "Flat Irons",
      "Rollers & Curling Irons",
      "Hair Brushes",
    ],
    Skincare: [
      "LED light Therapy",
      "Facial Toning",
      "Cleansing",
      "Dermabrasion",
    ],
  };
  const BathAndBody = {
    PopularCategories: [
      "View All Bath & Body",
      "New In",
      "Clean Bath & Body",
      "5* Rated Products",
      "Travel Sizes",
      "At Home Spa",
      "Deodorants",
      "Gifts & Sets",
      "Oral Care",
      "Mom & Baby",
    ],
    BathAndShower: [
      "Baths Oils/Soak",
      "Bath Salts",
      "Body Washes",
      "Cleansing Bars",
      "Exfoliators",
    ],
    SelfTanners: [
      "Accessories",
      "Pre-Tan Preparation",
      "Body Tanners",
      "Post Tanning",
    ],
    Moisturizers: ["Balms", "Butters", "Creams", "Lotions", "Oils"],
    TargetedCare: [
      "Bust",
      "Cellulite",
      "Dry Skin",
      "Hair Removal",
      "Hand & Foot Care",
      "Hand Soap, Sanitizers & Creams",
      "Legs",
      "Slimming & Sculpting",
      "Stretch Marks",
      "Sunscreen",
    ],
  };
  const SelfCare = {
    PopularCategories: [
      "Self Care",
      "New In",
      "5* Rated Products",
      "At-Home Spa",
      "View All Wellness Products",
    ],
    SexualWellness: ["Devices", "Skin Care"],
    Supplements: [
      "Skin",
      "Hair",
      "Immune Boosting",
      "Health & Wellbeing",
      "Weight Loss",
    ],
    CleanBeauty: [
      "Clean Skincare",
      "Clean Haircare",
      "Clean Makeup",
      "Clean Bath & Body",
    ],
  };
  const Fragrance = {
    PopularCategories: ["View All Fragrance", "New In", "5* Rated Products"],
    TopBrands: [
      "NEOM Organics",
      "Glasshouse Fragrances",
      "KORRES",
      "NEST Fragrances",
      "Molton Brown",
    ],
    PersonalFragrance: [
      "Perfume",
      "Eau de Toilette",
      "Body Spray",
      "For Her",
      "For Him",
    ],
    HomeFragrance: [
      "Scented Candles",
      "Diffusers",
      "Aromatherapy",
      "Pillow Mists",
      "Room Sprays",
    ],
  };
  const NewAndTrending = {
    Latestbrands: [
      "Ellis Brooklyn",
      "Rituals",
      "Juliette Has a Gun",
      "Chris Collins",
      "Cire Trudon",
      "Carrière Frères",
      "Alurx",
      "Lumira",
      "Hermetica",
      "Veronique Gabai",
      "Liquides Imaginaires",
      "Arquiste Parfumeur",
      "David Mallett",
    ],
    ViewAllNew: [
      "New Skin Care",
      "New Makeup",
      "New Hair Care",
      "New Bath & Body",
      "New Fragrance",
    ],
    TrendingNow: ["Best of British Brands"],
  };

  //   console.log(SummerShop.TopCategories);
  return (
    <div className={styles.NavMenMainCont}>
      <div className={styles.NavMenInnerCont}>
        <div className={styles.NavMen_brands_div}>
          <Popover
            trigger="hover"
            placement="bottom-start"
            gutter="0"
            arrowSize="0"
          >
            <PopoverTrigger>
              <Button
                bg="white"
                _hover={{ bg: "#2E3337", color: "white" }}
                borderRadius="none"
                size="sm"
              >
                Brands
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent w="full">
                <PopoverArrow />
                <br />
                <PopoverHeader></PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <Stack direction="row" spacing={4}>
                    {brandBtn.map((el) => {
                      return (
                        <Button
                          backgroundColor="white"
                          color="#2E3337"
                          borderRadius={0}
                          _hover={{ bg: "#F2F2F2" }}
                          onClick={() => handleOnClick()}
                          key={el.name}
                          size="sm"
                        >
                          {el.name}
                        </Button>
                      );
                    })}
                  </Stack>
                </PopoverBody>
                <PopoverFooter>
                  <br />
                  <Stack direction="row" spacing={4}>
                    <Text>111SKIN</Text>
                    <Text>3LAB</Text>
                    <Text>121LOOK</Text>
                  </Stack>
                  <br />
                </PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
        </div>
        <div className={styles.NavMen_BestOfSkin_div}>
          <Popover
            trigger="hover"
            placement="bottom-start"
            gutter="0"
            arrowSize="0"
          >
            <PopoverTrigger>
              <Button
                bg="white"
                _hover={{ bg: "#2E3337", color: "white" }}
                borderRadius="none"
                size="sm"
              >
                Best of SkinStore
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <br />
                <PopoverHeader textAlign="center">
                  Winning Categories
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <PopoverBody>
                    <Stack direction="column" spacing={4}>
                      {BestOfSkin.map((el) => {
                        return (
                          <Button
                            backgroundColor="white"
                            color="#2E3337"
                            borderRadius={0}
                            _hover={{ bg: "#F2F2F2" }}
                            onClick={() => handleOnClick(el.location)}
                            key={el.name}
                            size="sm"
                            justifyContent="flex-start"
                          >
                            {el.name}
                          </Button>
                        );
                      })}
                    </Stack>
                  </PopoverBody>
                </PopoverBody>
                <PopoverFooter>
                  <Stack direction="column" spacing={4}></Stack>
                </PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
        </div>
        <div className={styles.NavMen_SummerShop_div}>
          <Popover
            trigger="hover"
            placement="bottom-start"
            gutter="0"
            arrowSize="0"
          >
            <PopoverTrigger>
              <Button
                bg="white"
                _hover={{ bg: "#2E3337", color: "white" }}
                borderRadius="none"
                size="sm"
              >
                Summer Shop
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent w="full">
                <PopoverArrow />
                <br />
                <Stack direction="row" spacing={4}>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Top Categories
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {SummerShop.TopCategories.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Trending:SPF
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {SummerShop.Trending.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">On the Blog</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {SummerShop.OnTheBlog.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                </Stack>
              </PopoverContent>
            </Portal>
          </Popover>
        </div>
        <div className={styles.NavMen_BuildARoutine_div}>
          <Popover
            trigger="hover"
            placement="bottom-start"
            gutter="0"
            arrowSize="0"
          >
            <PopoverTrigger>
              <Button
                bg="white"
                _hover={{ bg: "#2E3337", color: "white" }}
                borderRadius="none"
                size="sm"
              >
                Build a Routine
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent w="full">
                <PopoverArrow />
                <br />
                <Stack direction="row" spacing={4}>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Skin Type Routines
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {BuildARoutine.SkinTypeRoutines.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Skin Concern Routines
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {BuildARoutine.SkinConcernRoutines.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Build a Hair Routine
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {BuildARoutine.BuildHairRoutine.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                </Stack>
              </PopoverContent>
            </Portal>
          </Popover>
        </div>
        <div className={styles.NavMen_SkinCare_div}>
          <Popover
            trigger="hover"
            placement="bottom-start"
            gutter="0"
            arrowSize="0"
          >
            <PopoverTrigger>
              <Button
                bg="white"
                _hover={{ bg: "#2E3337", color: "white" }}
                borderRadius="none"
                size="sm"
              >
                Skin Care
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent w="full">
                <PopoverArrow />
                <br />
                <Stack direction="row" spacing={4}>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Popular Categories
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {SkinCare.PopularCategories.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      By Product Type
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {SkinCare.ByProductType.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      By Ingredient
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {SkinCare.ByIngredient.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      By Specific Concern
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {SkinCare.BySpecificConcern.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                </Stack>
              </PopoverContent>
            </Portal>
          </Popover>
        </div>
        <div className={styles.NavMen_Hair_div}>
          <Popover
            trigger="hover"
            placement="bottom-start"
            gutter="0"
            arrowSize="0"
          >
            <PopoverTrigger>
              <Button
                bg="white"
                _hover={{ bg: "#2E3337", color: "white" }}
                borderRadius="none"
                size="sm"
              >
                Hair
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent w="full">
                <PopoverArrow />
                <br />
                <Stack direction="row" spacing={4}>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Popular Categories
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {Hair.PopularCategories.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Product Type
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {Hair.ProductType.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">Hair Type</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {Hair.HairType.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">Electrical</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {Hair.Electrical.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Hair Removal
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {Hair.HairRemoval.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                </Stack>
              </PopoverContent>
            </Portal>
          </Popover>
        </div>
        <div className={styles.NavMen_Makeup_div}>
          <Popover
            trigger="hover"
            placement="bottom-start"
            gutter="0"
            arrowSize="0"
          >
            <PopoverTrigger>
              <Button
                bg="white"
                _hover={{ bg: "#2E3337", color: "white" }}
                borderRadius="none"
                size="sm"
              >
                Makeup
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent w="full">
                <PopoverArrow />
                <br />
                <Stack direction="row" spacing={4}>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Popular Categories
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {MakeUp.PopularCategories.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">Eyes</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {MakeUp.Eyes.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">Face</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {MakeUp.Face.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">Lips</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {MakeUp.Lips.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                </Stack>
              </PopoverContent>
            </Portal>
          </Popover>
        </div>
        <div className={styles.NavMen_Tools_div}>
          <Popover
            trigger="hover"
            placement="bottom-start"
            gutter="0"
            arrowSize="0"
          >
            <PopoverTrigger>
              <Button
                bg="white"
                _hover={{ bg: "#2E3337", color: "white" }}
                borderRadius="none"
                size="sm"
              >
                Tools
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent w="full">
                <PopoverArrow />
                <br />
                <Stack direction="row" spacing={4}>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Popular Categories
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {Tools.PopularCategories.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">Hair Care</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {Tools.HairCare.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">Skincare</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {Tools.Skincare.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                </Stack>
              </PopoverContent>
            </Portal>
          </Popover>
        </div>
        <div className={styles.NavMen_BathAndBody_div}>
          <Popover
            trigger="hover"
            placement="bottom-start"
            gutter="0"
            arrowSize="0"
          >
            <PopoverTrigger>
              <Button
                bg="white"
                _hover={{ bg: "#2E3337", color: "white" }}
                borderRadius="none"
                size="sm"
              >
                Bath & Body
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent w="full">
                <PopoverArrow />
                <br />
                <Stack direction="row" spacing={4}>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Popular Categories
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {BathAndBody.PopularCategories.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Bath & Shower
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {BathAndBody.BathAndShower.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Self Tanners
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {BathAndBody.SelfTanners.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Moisturizers
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {BathAndBody.Moisturizers.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Targeted Care
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {BathAndBody.TargetedCare.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                </Stack>
              </PopoverContent>
            </Portal>
          </Popover>
        </div>
        <div className={styles.NavMen_SelfCare_div}>
          <Popover
            trigger="hover"
            placement="bottom-start"
            gutter="0"
            arrowSize="0"
          >
            <PopoverTrigger>
              <Button
                bg="white"
                _hover={{ bg: "#2E3337", color: "white" }}
                borderRadius="none"
                size="sm"
              >
                Self Care
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent w="full">
                <PopoverArrow />
                <br />
                <Stack direction="row" spacing={4}>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Popular Categories
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {SelfCare.PopularCategories.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Sexual Wellness
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {SelfCare.SexualWellness.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">Supplements</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {SelfCare.Supplements.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Clean Beauty
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {SelfCare.CleanBeauty.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                </Stack>
              </PopoverContent>
            </Portal>
          </Popover>
        </div>
        <div className={styles.NavMen_Fragrance_div}>
          <Popover
            trigger="hover"
            placement="bottom-start"
            gutter="0"
            arrowSize="0"
          >
            <PopoverTrigger>
              <Button
                bg="white"
                _hover={{ bg: "#2E3337", color: "white" }}
                borderRadius="none"
                size="sm"
              >
                Fragrance
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent w="full">
                <PopoverArrow />
                <br />
                <Stack direction="row" spacing={4}>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Popular Categories
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {Fragrance.PopularCategories.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">Top Brands</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {Fragrance.TopBrands.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Personal Fragrance
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {Fragrance.PersonalFragrance.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Home Fragrance
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {Fragrance.HomeFragrance.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                </Stack>
              </PopoverContent>
            </Portal>
          </Popover>
        </div>
        <div className={styles.NavMen_NewAndTrending_div}>
          <Popover
            trigger="hover"
            placement="bottom-start"
            gutter="0"
            arrowSize="0"
          >
            <PopoverTrigger>
              <Button
                bg="white"
                _hover={{ bg: "#2E3337", color: "white" }}
                borderRadius="none"
                size="sm"
              >
                New & Trending
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent w="full">
                <PopoverArrow />
                <br />
                <Stack direction="row" spacing={4}>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Latest brands
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {NewAndTrending.Latestbrands.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      View All New
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {NewAndTrending.ViewAllNew.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                  <Stack direction="column" spacing={4}>
                    <PopoverHeader marginLeft="25px">
                      Trending Now
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <PopoverBody>
                        <Stack direction="column" spacing={4}>
                          {NewAndTrending.TrendingNow.map((el) => {
                            return (
                              <Button
                                backgroundColor="white"
                                color="#2E3337"
                                borderRadius={0}
                                _hover={{ bg: "#F2F2F2" }}
                                onClick={() => handleOnClick()}
                                key={el}
                                size="sm"
                                justifyContent="flex-start"
                              >
                                {el}
                              </Button>
                            );
                          })}
                        </Stack>
                      </PopoverBody>
                    </PopoverBody>
                  </Stack>
                </Stack>
              </PopoverContent>
            </Portal>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default NavBarMenu;
