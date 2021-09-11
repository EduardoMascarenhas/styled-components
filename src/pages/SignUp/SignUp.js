import React from "react";
import { InfoSection } from "../../components";
import { signupObjOne, signupObjTwo } from "./Data";

function SignUp() {
  return (
    <>
      <InfoSection {...signupObjOne} />
      <InfoSection {...signupObjTwo} />
    </>
  );
}

export default SignUp;
