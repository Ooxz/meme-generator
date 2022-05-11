import button from '../images/button.png'
import memesData from '../memesData.js'
import React, {useState} from 'react'

const Meme = () => {
/**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg"
	})

	function setTextEvent() {
		setMeme(prevState => {
			return {
				...prevState,
			topText: "",
			bottomText: ""
			}
		
	})
}
	const [allMemeImages, setAllMemeImages] = useState(memesData)

	function getMemeImage() {
		const memesArray = allMemeImages.data.memes
		const randomNumber = [Math.floor(Math.random()*memesArray.length)];
		const url = memesArray[randomNumber].url;
		setMeme(prevMeme => ({
			...prevMeme,
			randomImage: url
		}));
		console.log(url)
	}
	return (
		<main>
		<div className="form">
			<div className="input-container">
			<input type="text" value={meme.topText} className="first-input" onChange={setTextEvent} placeholder="Text for the top of the image"/>
			<input type="text" value={meme.bottomText} className="second-input" onChange={setTextEvent} placeholder="Text for the bottom of the image"/>
			</div>
			<div className="button-container">
			<button onClick={getMemeImage} type="button" className="button"><img src={button} alt="" /></button>
			</div>
		</div>
		<div className='image-container'>
		<img src={meme.randomImage} alt="" className='image'/>
		</div>
		</main>
	)
}

export default Meme