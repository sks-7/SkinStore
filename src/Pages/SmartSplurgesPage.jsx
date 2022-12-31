import React, { useEffect, useState } from "react";
import AdBar from "../Components/AdBar";
import OneNavbar from "../Components/OneNavbar";

import fetchData from "../Components/API";
import ProductContainer from "../Components/ProductContainer";
import Pagination from "../Components/Pagination";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Select,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import SideSortBar from "../Components/SideSortBar";
import styles from "../Pages_Css/SmartSplurgePage.module.css";
import Footer from "../Components/Footer";
import { useSearchParams } from "react-router-dom";
const SmartSplurgesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(30);
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [order, setOrder] = useState("ASC");
  const [sort, setSort] = useState("productBlock_priceValue");
  const [Filter, setFilter] = useState("");
  const [FilterTitle, setFilterTitle] = useState("");
  const [isLoading, setIsloading] = useState(true);

  const GetData = async () => {
    setSearchParams({ page });
    setIsloading(true);
    let res = await fetchData({
      page,
      limit,
      order,
      sort,
      FilterTitle,
      Filter,
    });
    setData(res);
    setIsloading(false);
    console.log(res);
  };
  useEffect(() => {
    GetData();
  }, [page, limit, order, sort, Filter]);
  const handlePage = (newpage) => {
    setPage(newpage);
  };

  const handlePriceSort = (value) => {
    setSort("productBlock_priceValue");
    setOrder(value);
    // console.log(value);
  };

  const handleSelect = (e) => {
    // e.preventDefault();
    let name = null;
    let value = null;
    if (e.target.checked) {
      name = e.target.name;
      value = e.target.value;
      setFilterTitle(name);
      setFilter(value);
    } else {
      name = null;
      value = null;
      setFilterTitle(name);
      setFilter(value);
    }
    console.log(value, name);
  };

  const PageTitle = "Smart Splurges";
  return (
    <>
      <div>
        <AdBar />
        <OneNavbar />
        <div className={styles.SmartSplurgesPage_BreadcrumbDiv}>
          <Breadcrumb fontWeight="light" fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="/">Best Of SkinStore</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/best-of-skinstore/smart-splurges">
                Smart Splurges
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className={styles.SmartSplurgesPage_mainCont}>
          <div>
            <SideSortBar handleSelect={handleSelect} />
          </div>
          <div>
            <div className={styles.SmartSplurgesPage_TitleAndDesDiv}>
              <p>Smart Splurges</p>
              <p>
                Our best reviewed products curated into a list for anyone who
                wants to spoil themselves or someone you love with our Smart
                Splurges category.{" "}
              </p>
            </div>
            <div className={styles.SmartSplurgesPage_sortPaginaDiv}>
              <div className={styles.SmartSplurgesPage_sortDiv}>
                <p>Sort by </p>
                <Select
                  placeholder="Default"
                  w="300px"
                  borderRadius="none"
                  onChange={(e) => {
                    handlePriceSort(e.target.value);
                    // setlimit(value)
                  }}
                >
                  <option value="ASC">Price: Low to High</option>
                  <option value="DESC">Price: High to Low</option>
                </Select>
              </div>
              <div>
                <Pagination current={page} onChange={handlePage} />
              </div>
            </div>
            {isLoading ? (
              <Stack>
                <Skeleton height="280px" width="1150px" />
                <Skeleton height="280px" width="1150px" />
                <Skeleton height="280px" width="1150px" />
                <Skeleton height="280px" width="1150px" />
                <Skeleton height="280px" width="1150px" />
                <Skeleton height="280px" width="1150px" />
                <Skeleton height="280px" width="1150px" />
                <Skeleton height="280px" width="1150px" />
                <Skeleton height="280px" width="1150px" />
              </Stack>
            ) : (
              <ProductContainer data={data} pageTitle={PageTitle} />
            )}
            <Pagination current={page} onChange={handlePage} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SmartSplurgesPage;
