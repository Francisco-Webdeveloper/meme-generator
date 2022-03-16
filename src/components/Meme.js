import React from "react";
import classes from "./Meme.module.css";
// import memesData from "../memesData";

export default function Meme() {
  // initializing state
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    image: "http://i.imgflip.com/1bij.jpg",
  });

  // 1st Option - initializing state (getting the object from memesData.js)
  // const [allMemes, setAllMemes] = React.useState(memesData);

  // 2nd Option - initializing state (to be updated with API request)
  const [allMemes, setAllMemes] = React.useState({});

  // updates the topText and bottomText properties of state
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  // 1st Option - updates the image property of state that is obtained from memesData.js
  // function getImage() {
  //   const memesArray = allMemes.data.memes;
  //   const randomIndex = Math.floor(Math.random() * memesArray.length);
  //   const randomURL = memesArray[randomIndex].url;
  //   setMeme((prevMeme) => ({
  //     ...prevMeme,
  //     image: randomURL,
  //   }));
  // }

  // 2nd Option - updates the image property of state using API request.
  function getImage() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const randomURL = allMemes[randomIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      image: randomURL,
    }));
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

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
        <p className={classes.topText}>{meme.topText.toUpperCase()}</p>
        <p className={classes.bottomText}>{meme.bottomText.toUpperCase()}</p>
      </div>
    </main>
  );
}
