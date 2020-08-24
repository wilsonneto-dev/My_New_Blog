import { Component } from "react";

import Header from "../Header";
import styles from "./styles.module.scss";

const DefaultLayout: React.FC = ({ children }) => (
  <>
    <Header />
    Default Layout
    <br /> {children}
  </>
);

export default DefaultLayout;
