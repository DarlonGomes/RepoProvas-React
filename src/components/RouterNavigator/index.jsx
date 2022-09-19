import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../Forms/Sign-In";
import SignUp from "../Forms/Sign-Up";
import HomePage from "../Home";
import Loading from "../Loading";
export default function RouterNavigator() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/loading" element={<Loading />} />
    </Routes>
  );
}
