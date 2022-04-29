import button from '../images/button.png'
import memesData from '../memesData.js'
import React, {useState} from 'react'

const Meme = () => {
	const [memeImage, setMemeImage] = useState("")
	function getMemeImage() {
		const memesArray = memesData.data.memes
		const randomNumber = [Math.floor(Math.random()*memesArray.length)];
		const url = memesArray[randomNumber].url;
		setMemeImage(url);
		console.log(url)
	}
	return (
		<main>
		<div className="form">
			<div className="input-container">
			<input type="text" className="first-input" placeholder="Text for the top of the image"></input>
			<input type="text" className="second-input" placeholder="Text for the bottom of the image"></input>
			</div>
			<div className="button-container">
			<button onClick={getMemeImage} type="button" className="button"><img src={button} alt="" /></button>
			</div>
		</div>
		<div className='image-container'>
		<img src={memeImage} alt="" className='image'/>
		</div>
		</main>
	)
}

export default Meme