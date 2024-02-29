"use client";
import { Box } from "@mui/material";
import LeftSide from "./leftSide";
import FirstSection from "./firstSection";
import SecondSection from "./secondSection";
import { useState, useEffect } from "react";

export default function Home() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setProducts(result);
    })();
  });
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(10000);
  const [value, setValue] = useState([0, 10000]);
  const handleChange = (event, value) => {
    if (event.target.value) {
      setValue(value);
      console.log(value);
    }
  };

  return (
    <Box>
      <LeftSide
        {...{
          value,
          setValue,
          handleChange,
          value1,
          setValue1,
          value2,
          setValue2,
        }}
      />
      <FirstSection />
      <SecondSection {...{ Products, value, value1, value2 }} />
    </Box>
  );
}
