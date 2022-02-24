import React from 'react'
import image_22 from '../../src/assets/image_22.jpg'
import image_23 from '../../src/assets/image_23.jpg'
import image_24 from '../../src/assets/image_24.jpg'
import image_25 from '../../src/assets/image_25.jpg'
import image_26 from '../../src/assets/image_26.jpg'
import image_27 from '../../src/assets/image_27.jpg'
import image_28 from '../../src/assets/image_28.jpg'
import image_29 from '../../src/assets/image_29.jpg'
import image_30 from '../../src/assets/image_30.jpg'
import HeroPhoto from './HeroPhoto'


function UpperFold () {
  return (
    <>
      <div className="upper--single-photo-container">
        <img className="upper--single-photo" src={image_28} alt="photo of hands which appear to be performing a seance over top of a wok"></img>
      </div>
      <HeroPhoto image1={image_30} image2={image_26} alt1="young woman holds freshly baked bread" alt2="contemporary dancer performs leap in front of a doorway arch"/>
      <HeroPhoto image1={image_27} image2={image_29} alt1="salt falls on food" alt2="close up of hands playing a guitar"/>
      <HeroPhoto image1={image_22} image2={image_23} alt1="closeup of hands playing a keyboard" alt2="person does butterfly stroke in pool"/>
      <HeroPhoto image1={image_25} image2={image_24} alt1="young woman meditates on a yoga mat" alt2="young person sings solo into mic"/>
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts &mdash;all without leaving your home.</p>
    </>
  )
}

export default UpperFold