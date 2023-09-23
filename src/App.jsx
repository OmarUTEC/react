/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Omar Chavarria",
  title: "Web Designer && Developer",
  email: "alex@example.com",
  gitHub: "OmarUTEC",
  instagram: "microsoft",
  linkedIn: "satyanadella",
  medium: "",
  twitter: "microsoft",
  youTube: "Code",
  chesscom: "Omar_66",
  discord: "",
};

const primaryColor = "#1A5276";
const secondaryColor = "blue";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;

/*
commethod
*/