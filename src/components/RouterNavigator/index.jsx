import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../Forms/Sign-In";
import SignUp from "../Forms/Sign-Up";
import HomePage from "../Home";
export default function RouterNavigator() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
