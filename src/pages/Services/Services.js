import React from "react";
import { InfoSection, Pricing } from "../../components";
import { servicesObjOne, servicesObjTwo } from "./Data";

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...servicesObjOne} />
      <InfoSection {...servicesObjTwo} />
    </>
  );
}

export default Services;
