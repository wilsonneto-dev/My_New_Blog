import styles from "./styles.module.scss";
import { Component } from "react";

const DefaultLayout: React.FC = ({ children }) => (
  <>
    Default Layout
    <br /> {children}
  </>
);

export default DefaultLayout;
