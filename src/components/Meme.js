import button from "../images/button.png";
import React, { useState, useEffect } from "react";

const Meme = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

console.log(meme)

  function setTextEvent(event) {
	  const {name, value} = event.target;
    setMeme(prevState => ({
		...prevState,
        [name]: value
	})  
  )}

  useEffect(() => {
    async function getMemes() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
    }, [])

  const [allMemes, setAllMemes] = useState({});
  console.log(allMemes)
  function getMemeImage() {
    const randomNumber = [Math.floor(Math.random() * allMemes.length)];
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
    console.log(url);
  }
  return (
    <main>
      <div className="form">
        <div className="input-container">
          <input
            type="text"
            value={meme.topText}
            className="first-input"
            onChange={setTextEvent}
            placeholder="Top text"
			name="topText"
          />
          <input
            type="text"
            value={meme.bottomText}
            className="second-input"
            onChange={setTextEvent}
            placeholder="Bottom text"
			name="bottomText"
          />
        </div>
        <div className="button-container">
          <button onClick={getMemeImage} type="button" className="button">
            <img src={button} alt="" />
          </button>
        </div>
      </div>
      <div className="image-container">
        <img src={meme.randomImage} alt="" className="image" />
		<h2 className="meme--text top">{meme.topText}</h2>
		<h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
