import React from "react";
import classes from "./Meme.module.css";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    image: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState(memesData);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value.toUpperCase(),
      };
    });
  }

  function getImage() {
    const memesArray = allMemes.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    const randomURL = memesArray[randomIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      image: randomURL,
    }));
  }

  return (
    <main>
      <div className={classes.form}>
        <input
          className={classes.input}
          type="text"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />
        <input
          className={classes.input}
          type="text"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />
        <button className={classes.memeButton} onClick={getImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className={classes.memeContainer}>
        <img className={classes.memeImage} src={meme.image} alt="meme" />
        <p className={classes.topText}>{meme.topText}</p>
        <p className={classes.bottomText}>{meme.bottomText}</p>
      </div>
    </main>
  );
}
