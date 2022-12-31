import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import styles from "./Pagination.module.css";

function Pagination({ current, onChange, totalPages }) {
  const prev = (
    <Button
      colorScheme="blue"
      borderRadius={0}
      bg="white"
      border="1px"
      borderColor="#2E3337"
      color="#2E3337"
      _hover={{ bg: "teal.50" }}
      size="md"
      padding="20px 10px"
      marginTop="15px"
      disabled={current === 1}
      onClick={() => {
        onChange(current - 1);
      }}
    >
      <ChevronLeftIcon/>
    </Button>
  );
  const currentPage = (
    <Button
      colorScheme="blue"
      borderRadius={0}
      bg="#2E3337"
      border="1px"
      borderColor="#2E3337"
      color="white"
      _hover={{ bg: "#2E3337", color: "white" }}
      size="md"
      padding="20px 10px"
      marginTop="15px"
    >
      {current}
    </Button>
  );
  const nextpage = (
    <Button
      colorScheme="blue"
      borderRadius={0}
      bg="white"
      border="1px"
      borderColor="#2E3337"
      color="#2E3337"
      _hover={{ bg: "#2E3337", color: "white" }}
      size="md"
      padding="20px 10px"
      marginTop="15px"
      onClick={() => {
        onChange(current + 1);
      }}
    >
      {current + 1}
    </Button>
  );

  const next = (
    <Button
      colorScheme="blue"
      borderRadius={0}
      bg="white"
      border="1px"
      borderColor="#2E3337"
      color="#2E3337"
      _hover={{ bg: "#2E3337", color: "white" }}
      size="md"
      padding="20px 10px"
      marginTop="15px"
      onClick={() => {
        onChange(current + 1);
      }}
    >
      <ChevronRightIcon />
    </Button>
  );
  //   const page = new Array(totalPages)
  //     .fill(0)
  //     .map((e, i) => <Button onClick={() => onChange(i + 1)}>{i + 1}</Button>);
  //   const totalPagesElem = (
  //     <div>
  //       Total Pages: <b>{totalPages}</b>
  //       {page}
  //     </div>
  //   );
  return (
    <div className={styles.PaginationMainDiv}>
      <div className={styles.PaginationDiv}>
        {prev}
        {currentPage}
        {nextpage}
        <div>--</div>
        {next}
        {/* {totalPagesElem} */}
      </div>
    </div>
  );
}

export default Pagination;
