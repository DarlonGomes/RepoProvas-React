import React from "react";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <>
      OLÁ
      <Link to="/sign-in"> Sign In </Link>
      <Link to="/sign-up"> Sign Up </Link>
    </>
  );
}
