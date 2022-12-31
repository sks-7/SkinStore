import React from "react";
// import { Container, Box, Image } from "@chakra-ui/react";
import styles from "./AdBar.module.css";
const AdBar = () => {
  return (
    // <Container border="1px" size="full">
    //   <Box>
    //     <Image
    //       src="https://static.thcdn.com/www/common/images/flags/1x1/us-853f40a4f4.svg"
    //       boxSize="20px"
    //       borderRadius="full"
    //     ></Image>
    //   </Box>
    //   <Box>
    //     <p>Help</p>
    //   </Box>
    // </Container>

    <div className={styles.Adbar_cont}>
      <div className={styles.Adbar_innerDiv}>
        <div className={styles.Adbar_imgDiv}>
          <div>
            <img
              src="https://static.thcdn.com/www/common/images/flags/1x1/us-853f40a4f4.svg"
              alt=""
            />
          </div>

          <div>
            <p>us-USD</p>
          </div>
        </div>

        <div className={styles.Adbar_helpDiv}>
          <p>Help</p>
        </div>
      </div>
    </div>
  );
};

export default AdBar;
