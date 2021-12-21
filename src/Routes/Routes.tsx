import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { path } from "./path";
import { Header } from "../Components/header/header";
import { EditCat } from "../Module/EditCat/EditCat";
import { RegisterCat } from "../Module/RegisterCat/RegisterCat";
import { Home } from "../Module/Home/home";
import { Location } from "../Module/Location/location";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.REGISTER} element={<RegisterCat />} />
        <Route path={path.EDIT} element={<EditCat />} />
        <Route path={path.MAP} element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
};
