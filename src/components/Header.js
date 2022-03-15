import React from "react";
import trollFace from "../images/troll-face.png";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <nav className={classes.navbar}>
      <img className={classes.logo} src={trollFace} alt="troll face logo" />
      <h2 className={classes.title}>Meme Generator</h2>
      <p className={classes.project}>React Project</p>
    </nav>
  );
}
