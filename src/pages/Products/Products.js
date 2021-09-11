import React from "react";
import { InfoSection } from "../../components";
import { productObjOne, productObjTwo } from "./Data";

function Products() {
  return (
    <>
      <InfoSection {...productObjOne} />
      <InfoSection {...productObjTwo} />
    </>
  );
}

export default Products;
